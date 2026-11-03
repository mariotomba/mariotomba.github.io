const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

// GitHub Pages sends the time of the last publish as the page's Last-Modified date.
const lastUpdated = document.getElementById("last-updated");
const modified = new Date(document.lastModified);
if (lastUpdated && !Number.isNaN(modified.getTime())) {
  const formatted = modified.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  lastUpdated.textContent = ` · Last updated ${formatted}`;
}
