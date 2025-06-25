import { useEffect, useState, useCallback, useRef } from "react";
import { fetchPhotos, searchPhotos } from "../api/pixels";
import { MasonryGrid } from "../components/MasonryGrid";
import { SearchBar } from "../components/SearchBar";
import type { Photo } from "../types/photo";
import {
  getHomePageState,
  setHomePageState,
  getSearchState,
  setSearchState,
  clearSearchState,
} from "../store/homePageStore";

export const HomePage = () => {
  const saved = useRef(getHomePageState());
  const savedSearch = useRef(getSearchState());

  const [photos, setPhotos] = useState<Photo[]>(saved.current.photos || []);
  const [page, setPage] = useState(saved.current.page || 2);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const [searchQuery, setSearchQuery] = useState(
    savedSearch.current.query || ""
  );
  const [searchResults, setSearchResults] = useState<Photo[]>(
    savedSearch.current.photos || []
  );
  const [searchCurrentPage, setSearchCurrentPage] = useState(
    savedSearch.current.page || 1
  );
  const [searchHasMore, setSearchHasMore] = useState(true);

  const observerRef = useRef<HTMLDivElement | null>(null);
  const hasMounted = useRef(false);

  const isSearching = searchQuery.length > 0;
  const currentPhotos = isSearching ? searchResults : photos;

  const loadMorePhotos = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);

    const newPhotos = await fetchPhotos(page);

    if (newPhotos.length === 0) {
      setHasMore(false);
    } else {
      setPhotos((prev) => [...prev, ...newPhotos]);
      setPage((prev) => prev + 1);
    }

    setLoading(false);
  }, [hasMore, loading, page]);

  const loadMoreSearchResults = useCallback(async () => {
    if (loading || !searchHasMore || !searchQuery) return;

    setLoading(true);

    const newPhotos = await searchPhotos(searchQuery, searchCurrentPage);

    if (newPhotos.length === 0) {
      setSearchHasMore(false);
    } else {
      setSearchResults((prev) => [...prev, ...newPhotos]);
      setSearchCurrentPage((prev) => prev + 1);
    }

    setLoading(false);
  }, [searchHasMore, loading, searchCurrentPage, searchQuery]);

  const handleSearch = useCallback(async (query: string) => {
    setSearchQuery(query);
    setSearchResults([]);
    setSearchCurrentPage(1);
    setSearchHasMore(true);
    setLoading(true);

    try {
      const newPhotos = await searchPhotos(query, 1);
      setSearchResults(newPhotos);
      setSearchCurrentPage(2);

      if (newPhotos.length === 0) {
        setSearchHasMore(false);
      }
    } catch (error) {
      console.error("Search failed:", error);
      setSearchHasMore(false);
    }

    setLoading(false);
  }, []);

  const handleClearSearch = useCallback(() => {
    setSearchQuery("");
    setSearchResults([]);
    setSearchCurrentPage(1);
    setSearchHasMore(true);
    clearSearchState();
  }, []);

  useEffect(() => {
    if (!hasMounted.current && !photos.length && !isSearching) {
      loadMorePhotos();
      hasMounted.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (loading) return;

    const shouldLoadMore = isSearching
      ? searchHasMore && searchCurrentPage > 1
      : hasMore && page > 2;

    if (!shouldLoadMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (isSearching) {
            loadMoreSearchResults();
          } else {
            loadMorePhotos();
          }
        }
      },
      { rootMargin: "100px" }
    );

    const currentRef = observerRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [
    loadMorePhotos,
    loadMoreSearchResults,
    hasMore,
    searchHasMore,
    loading,
    page,
    searchCurrentPage,
    isSearching,
  ]);

  useEffect(() => {
    return () => {
      if (isSearching) {
        setSearchState(searchResults, searchCurrentPage, searchQuery);
      } else {
        setHomePageState(photos, page);
      }
    };
  }, [
    photos,
    page,
    searchResults,
    searchCurrentPage,
    searchQuery,
    isSearching,
  ]);

  return (
    <>
      <SearchBar
        onSearch={handleSearch}
        onClear={handleClearSearch}
        isSearching={isSearching}
      />
      <MasonryGrid photos={currentPhotos} />
      <div ref={observerRef} style={{ height: "1px" }} />
      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
      {isSearching && currentPhotos.length === 0 && !loading && (
        <p style={{ textAlign: "center", padding: "2rem", color: "#6c757d" }}>
          No photos found for "{searchQuery}". Try a different search term.
        </p>
      )}
    </>
  );
};
