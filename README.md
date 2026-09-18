# Academic Website

A polished, lightweight academic website for a second-year Mathematics PhD student at the University of Chicago. It is intentionally static: no build tools, no dependencies, and ready for GitHub Pages.

## Customize

Edit `index.html` and replace the bracketed placeholders:

- `Your Name`
- the portrait alt text if you want it more specific
- `[research area]`, `[specific topic]`, and research-interest phrases under the name
- `[previous institution or degree]`
- publication and preprint titles, links, and descriptions
- teaching terms, course titles, office hours, and materials
- the CV link text if desired
- email, GitHub, Google Scholar, department profile, and office details

To add your photo, save a portrait image as:

```text
assets/headshot.jpg
```

Use a vertical or lightly cropped square image. The page will crop it neatly.

To add a CV, save your PDF as:

```text
assets/cv.pdf
```

The existing "Download CV" button will then work automatically.

## Preview Locally

Open `index.html` in a browser. Because the site is static, no local server is required.

## Deploy With GitHub Pages

1. Create a new GitHub repository, for example `academic-website`.
2. Upload or commit these files to the repository.
3. In GitHub, open **Settings** → **Pages**.
4. Under **Build and deployment**, choose **GitHub Actions**.
5. The included workflow in `.github/workflows/pages.yml` will publish the site after each push to `main`.

Your site will usually be available at:

```text
https://YOUR-GITHUB-USERNAME.github.io/academic-website/
```

For a personal homepage at `https://YOUR-GITHUB-USERNAME.github.io/`, name the repository exactly `YOUR-GITHUB-USERNAME.github.io`.

## File Structure

```text
.
├── index.html
├── assets
│   ├── main.js
│   ├── headshot.jpg
│   ├── headshot-placeholder.svg
│   ├── kakeya-construction.png
│   ├── kakeya-reference.png
│   └── styles.css
├── .github
│   └── workflows
│       └── pages.yml
├── .nojekyll
└── README.md
```
