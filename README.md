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

## Performance Techniques

- Custom virtualization with scroll handling
- Lazy-loaded images
- Responsive column layout
- Efficient slice rendering
