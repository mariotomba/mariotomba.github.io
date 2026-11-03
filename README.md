# mariotomba.github.io

Personal academic website of Mario Tomba Morillo, PhD student in mathematics at the University of Chicago. It is plain static HTML: no build tools and no dependencies.

## Pages

| File                | Content                                  |
| ------------------- | ---------------------------------------- |
| `index.html`        | Home: photo, introduction and email      |
| `publications.html` | Publications and preprints               |
| `teaching.html`     | Teaching                                 |
| `cv.html`           | Link to the CV PDF                       |

Styles shared by all pages are in `assets/styles.css`.

## Editing

Replace the bracketed placeholders (`[Title of Preprint]`, `[Course Title]`, …) in each page with your own content.

- **Photo:** save a portrait as `assets/headshot.jpg`. Use a vertical or roughly square image; the page crops it to 4:5. Until then a placeholder is shown.
- **CV:** save the PDF as `assets/cv.pdf`.

The bar at the top is copied into every page. To add a page, copy one of the existing pages, change its title and content, and add a link to it in the `<nav>` of **every** page. In each page, the link to that page itself has `aria-current="page"`, which underlines it in the bar.

## Preview locally

Open `index.html` in a browser.

## Publishing

GitHub Pages serves this repository at `https://mariotomba.github.io/`. On a free GitHub account the repository must be public. In **Settings → Pages**, set **Source** to **Deploy from a branch**, branch `main`, folder `/ (root)`. Each push to `main` then updates the site within a minute or two.

## Files

```text
.
├── index.html
├── publications.html
├── teaching.html
├── cv.html
├── assets
│   ├── headshot-placeholder.svg  (shown until headshot.jpg exists)
│   ├── kakeya-construction.png   (logo next to the name)
│   ├── main.js                   (fills in the year and last-updated date in the footer)
│   └── styles.css
└── README.md
```
