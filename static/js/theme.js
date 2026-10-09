// Light/dark toggle. Default follows the system; a manual choice is remembered.
// If the choice matches the system again, it is forgotten so the site keeps following the system.
(function () {
  var root = document.documentElement;
  var button = document.querySelector(".theme-toggle");
  if (!button) return;
  var media = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

  function systemTheme() { return media && media.matches ? "dark" : "light"; }
  function current() { return root.getAttribute("data-theme") || systemTheme(); }
  function label() {
    button.setAttribute("aria-label", current() === "dark" ? "Passa al tema chiaro" : "Passa al tema scuro");
    button.setAttribute("title", button.getAttribute("aria-label"));
  }

  button.addEventListener("click", function () {
    var next = current() === "dark" ? "light" : "dark";
    try {
      if (next === systemTheme()) { localStorage.removeItem("theme"); root.removeAttribute("data-theme"); }
      else { localStorage.setItem("theme", next); root.setAttribute("data-theme", next); }
    } catch (e) { root.setAttribute("data-theme", next); }
    label();
  });

  if (media && media.addEventListener) media.addEventListener("change", label);
  button.hidden = false;
  label();
})();
