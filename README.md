# CoinScope

[Live Demo](https://coinscope-488c.vercel.app/)

CoinScope is a lightweight crypto dashboard that lists top coins, lets you filter/sort, and explore a coin’s details including price chart, market stats, categories, and official links. Built with React + Vite and powered by the CoinGecko API.

## Features

- Coins list with search filter, sort options, and page size limit
- Coin details page with image, description, market stats, and links
- 7‑day price chart (Chart.js) with time scale and tooltips
- Loading states and basic error handling
- Vite dev proxy to avoid CORS during local development

## Tech Stack

- React 19 + Vite 7
- React Router 7
- Chart.js 4 + react-chartjs-2 5
- chartjs-adapter-date-fns + date-fns
- react-spinners for loaders
- ESLint (Vite’s React config)

## Getting Started

Prerequisites
- Node.js 18+ and npm

Install
- `npm install`

Environment
- Create `.env` in the project root (already included here). For development, requests are proxied via Vite to avoid CORS:
  - `VITE_API_URL="/api/coins/markets?vs_currency=usd"`
  - `VITE_COIN_API_URL="/api/coins"`

Dev Server
- `npm run dev`
- Open `http://localhost:5173`

Build & Preview
- `npm run build`
- `npm run preview`

## API & CORS

- Coin data is fetched from the CoinGecko API.
- During development, `vite.config.js` proxies `/api/*` to `https://api.coingecko.com/api/v3` to bypass browser CORS.
- For production, you should serve through a backend or serverless proxy (or configure a reverse proxy) because CoinGecko does not include permissive CORS headers for direct browser calls.

## Project Structure

- `src/pages/home.jsx` – list view with filtering/sorting/limit
- `src/pages/coin-details.jsx` – single coin view + chart and links
- `src/components/CoinChart.jsx` – 7‑day price chart
- `src/components/Spinner.jsx` – loading indicator
- `src/App.jsx` – routes and top-level data fetching
- `vite.config.js` – Vite plugins and dev proxy for `/api`

## Scripts

- `npm run dev` – start dev server
- `npm run build` – build for production
- `npm run preview` – preview production build

## Notes

- Set `VITE_API_URL` and `VITE_COIN_API_URL` appropriately if you deploy behind your own API gateway or serverless proxy.
- Chart uses a time scale; ensure `chartjs-adapter-date-fns` remains installed and imported.
