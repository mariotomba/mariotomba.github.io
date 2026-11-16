# mariotomba.github.io

Personal academic website of Mario Tomba Morillo, PhD student in mathematics at the University of Chicago. It is plain static HTML: no build tools and no dependencies.

## Pages

| File                | Content                                  |
| ------------------- | ---------------------------------------- |
| `index.html`        | Home: photo, introduction and email      |
| `research.html`     | Research: publications and preprints     |
| `teaching.html`     | Teaching                                 |
| `outreach.html`     | Outreach                                 |

The CV link in the top bar opens `assets/cv.pdf` directly. It is commented out for now, until the PDF is added (see **CV** below). Styles shared by all pages are in `assets/styles.css`.

## Editing

- **Research:** each paper is one `<li>` in `research.html`, newest first. To add one, copy an existing `<li>` and change the title, coauthors, citation and the arXiv link. For a preprint, write "Preprint, <year>." in place of the citation.
- **Photo:** the home page shows `assets/headshot.jpg`, a 660×660 square crop. To change it, replace that file with another square image under the same name.
- **CV:** save the PDF as `assets/cv.pdf`. Then turn the link on in the `<nav>` of every page: delete the `<!-- CV link: uncomment once assets/cv.pdf is added.` line and the ` -->` after `<a href="assets/cv.pdf">CV</a>`. To update the CV later, replace the file with the new version under the same name.
- **Teaching:** courses are grouped by school and role, e.g. "University of Chicago — Teaching Assistant". For a new role, such as instructor of record, copy a whole `<section class="subsection">` block in `teaching.html`, give its `<h2>` a new `id` (and match it in `aria-labelledby`), change the role in the heading, and list the courses. For courses you teach yourself, drop the "Instructor:" line.
- **Outreach:** `outreach.html` lists outreach activities in the same format as Teaching. Each activity is one `<li>`: the activity, your role, and optionally the term on the right. Sub-bullets go in the `<ul class="entry-sublist">` inside an activity, one `<li>` each with a short `entry-note` and, optionally, a term (e.g. one per Directed Reading Program quarter, newest first).

The bar at the top is copied into every page. To add a page, copy one of the existing pages, change its title and content, and add a link to it in the `<nav>` of **every** page. In each page, the link to that page itself has `aria-current="page"`, which underlines it in the bar.

## Preview locally

Open `index.html` in a browser.

## Publishing

GitHub Pages serves this repository at `https://mariotomba.github.io/`. On a free GitHub account the repository must be public. In **Settings → Pages**, set **Source** to **Deploy from a branch**, branch `main`, folder `/ (root)`. Each push to `main` then updates the site within a minute or two.

## Files

```text
.
├── index.html
├── research.html
├── teaching.html
├── outreach.html
├── assets
│   ├── cv.pdf                    (not added yet; its link in the top bar is commented out)
│   ├── headshot.jpg              (photo on the home page)
│   ├── kakeya-construction.png   (logo next to the name)
│   ├── main.js                   (fills in the year and last-updated date in the footer)
│   └── styles.css
└── README.md
```
