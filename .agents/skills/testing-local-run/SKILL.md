---
name: testing-local-run
description: Run mysmsapp (Vite frontend + Express backend) locally and smoke-test routes and frontend-backend CORS connectivity. Use when verifying local setup, dependency, or CORS/port changes.
---

# Running & smoke-testing mysmsapp locally

## Start the services
- Frontend (repo root): `npm install` then `npm run dev` -> Vite at http://localhost:5173
- Backend: `cd backend && npm install && node server.js` -> Express at http://localhost:5000
- The frontend expects the backend on port 5000.

## Known setup gotchas (may resurface)
- Root `npm install` can fail if a dependency has been unpublished from npm (e.g. `twitter-url-direct` returned 404). If a package is unpublished AND unused (grep `src/`, `backend/`), removing it from `package.json` is the fix.
- `backend/server.js` requires `ytdl-core` but it may be missing from `backend/package.json`; install it in `backend/` if `node server.js` throws `MODULE_NOT_FOUND`.
- CORS `origin` list in `backend/server.js` must include the actual Vite port (`http://localhost:5173`). If the browser can't reach the backend, check this list matches the port Vite prints.

## Smoke test (UI)
Navigate these routes and confirm distinctive content renders (defined in `src/App.tsx`):
- `/` -> "Powerful Document Transformation"
- `/pdf-tools` -> "PDF Toolbox" (6 tool cards)
- `/image-to-text` -> "Image to Text Converter"
- `/about` -> "Document Transformation Tools"
- `/video-downloader` -> "Universal Video Downloader"

## Proving frontend->backend CORS works
The only route that calls the backend is Video Downloader. To prove CORS (not just the app-level flow), run a cross-origin fetch FROM the page at :5173 and confirm the body is readable:
```js
fetch('http://localhost:5000/api/video-info',{method:'POST',headers:{'Content-Type':'application/json'},body:'{}'}).then(r=>r.text()).then(t=>console.log(t))
// expect: {"message":"URL is required"}  (readable body => CORS allows :5173)
```
A CORS block instead throws `TypeError: Failed to fetch`. Shell check: `curl -i -X OPTIONS http://localhost:5000/api/video-info -H 'Origin: http://localhost:5173' -H 'Access-Control-Request-Method: POST'` should return `Access-Control-Allow-Origin: http://localhost:5173`.

## Known broken areas (avoid false failures)
- The Video Downloader UI posts to `/api-video-info` (typo, should be `/api/video-info`) in `src/components/videodownloader/Videodownload.jsx`, so the full download flow returns 404 regardless of CORS. It also hardcodes its own `API_BASE_URL` instead of using `src/apiConfig.js`.
- `ytdl-core@4.11.5` is outdated; real YouTube fetches may fail even with a correct endpoint.

## Lint / build
- `npm run lint` (a preexisting `no-explicit-any` error in `src/declarations.d.ts` may show; unrelated to setup).
- `npm run build` (tsc + vite build, outputs to `build/`).

## Devin Secrets Needed
- None for local run/smoke test. (Note: `package.json` contains a hardcoded MongoDB URI; do not commit changes that worsen this leak.)
