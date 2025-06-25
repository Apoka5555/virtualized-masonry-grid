# Virtualized Masonry Grid App

## Features

- Responsive virtualized masonry grid using Pexels API
- Detail view page for photos
- React + TypeScript
- Custom virtualization for performance
- styled-components for styling
- Error boundaries for reliability
- Testing ready with Jest and React Testing Library

## Setup

1. Clone the repo
2. Run `npm install`
3. Create a `.env` file in the project root with the following variables:

   - `VITE_PEXELS_API_KEY` – Your Pexels API key (required for fetching photos)
   - `VITE_PEXELS_API_URL` – Base URL for the Pexels API (ex: `https://api.pexels.com/v1`)
   - `VITE_API_URL` – Base URL for your proxy backend API (ex: `/api`)

4. Run `npm run dev` to start development server
5. Run `npm run build` to create production build

## Testing

- `npm run test` - Run tests in watch mode
- `npm run test:run` - Run tests once
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage report

## Performance Techniques

- Custom virtualization with scroll handling
- Lazy-loaded images
- Nice to have: caching

## TODO:

- Equal width of image in photo page +
- Photo page: title, description, photographer's name, and date taken +
- Unit tests -
- Submit your application as a Git repository (e.g., GitHub, GitLab, Bitbucket). Ensure to include all source
  files and documentation. Make sure to commit regularly so we can track your development process.

## Additional:

- Web vitals metrics
- Implement utility and generic types where appropriate
- Discuss how you ensured the application's performance and any tools or techniques you used.
- Search Functionality: Implement a search feature that allows users to search for photos by
  keywords. The search results should update the masonry grid dynamically, fetching and
  displaying relevant photos from the Pexels API https://www.pexels.com/api/documentation/#photos-search.

## Potential improvements:

- Caching data from backend to avoid repetitive API calls
- Use Tanstack query library to make api calls, store and cache the data
- Add "msw" to mock API calls in tests
