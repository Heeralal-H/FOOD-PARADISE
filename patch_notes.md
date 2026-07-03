Planned change: unify dish image resolution for Vite.

- Before: many dishes use image like '/src/assets/dishes/<file>.jpg' (often 404 in Vite runtime).
- After: all dishes use: new URL('../assets/dishes/<file>.jpg', import.meta.url).href

This should fix missing images in Menu and FoodDetails.
