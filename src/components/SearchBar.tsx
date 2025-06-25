import { useState } from "react";
import styled from "styled-components";

interface Props {
  onSearch: (query: string) => void;
  onClear: () => void;
  isSearching: boolean;
}

export const SearchBar = ({ onSearch, onClear, isSearching }: Props) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleClear = () => {
    setQuery("");
    onClear();
  };

  return (
    <SearchContainer>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          name="search"
          type="text"
          placeholder="Search for photos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <SearchButton type="submit" disabled={!query.trim()}>
          Search
        </SearchButton>
        {isSearching && (
          <ClearButton type="button" onClick={handleClear}>
            Clear
          </ClearButton>
        )}
      </SearchForm>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  padding: 1rem;
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
`;

const SearchForm = styled.form`
  display: flex;
  max-width: 600px;
  gap: 0.5rem;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 0.375rem;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

const SearchButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;

const ClearButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #545b62;
  }
`;
