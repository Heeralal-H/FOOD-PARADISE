# TODO

- [ ] Fix dish image URLs in `src/data/dishes.js` (replace `/src/assets/...` string paths with `new URL(..., import.meta.url).href`).
- [ ] Ensure dish image filenames used in data match files under `src/assets/dishes/`.
- [ ] Run `npm test` / `npm run build` (or `npm run dev`) to verify images resolve without 404s.

