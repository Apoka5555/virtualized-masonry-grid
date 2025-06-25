# Virtualized Masonry Grid App

## Features

- Responsive virtualized masonry grid using Pexels API
- Detail view page for photos
- React + TypeScript
- Custom virtualization for performance
- styled-components for styling
- Error boundaries for reliability

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

## Potential improvements:

- Caching data from backend to avoid repetitive API calls
- Use Tanstack query library to make api calls, store and cache data
- Add unit tests using Vitest and React Testing Library
- Add "msw" to mock API calls in tests
- Set image skeleton sizes exact the same as an image itself
- Improve masonry grid, for now there is an issue that images a bit shift when new page is loaded
- Add better spinner for loading images in grid
- Use next_page property to detect if there is more data to load
