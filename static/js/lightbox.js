// Full-screen view for links marked data-lightbox (e.g. posters), with zoom.
// Click the image (or "Ingrandisci") to see it at full resolution and scroll around;
// click again to fit it to the screen. On touch screens pinch zoom also works.
// Without JavaScript the link simply opens the image.
(function () {
  var links = document.querySelectorAll("a[data-lightbox]");
  if (!links.length || typeof HTMLDialogElement !== "function") return;

  var dialog = document.createElement("dialog");
  dialog.className = "lightbox";
  dialog.innerHTML =
    '<div class="lightbox-bar">' +
    '<button class="lightbox-zoom" type="button">Ingrandisci</button>' +
    '<button class="lightbox-close" type="button">Chiudi</button>' +
    '</div>' +
    '<div class="lightbox-stage"><img class="lightbox-image" alt=""></div>';
  document.body.appendChild(dialog);
  var stage = dialog.querySelector(".lightbox-stage");
  var img = dialog.querySelector("img");
  var zoomBtn = dialog.querySelector(".lightbox-zoom");

  function setZoom(on, x, y) {
    // x, y: point clicked, as a fraction of the image, to keep it in view after zooming
    dialog.classList.toggle("is-zoomed", on);
    zoomBtn.textContent = on ? "Adatta allo schermo" : "Ingrandisci";
    if (on && x !== undefined) {
      stage.scrollLeft = x * img.offsetWidth - stage.clientWidth / 2;
      stage.scrollTop = y * img.offsetHeight - stage.clientHeight / 2;
    }
  }

  function close() { dialog.close(); }
  dialog.querySelector(".lightbox-close").addEventListener("click", close);
  zoomBtn.addEventListener("click", function () {
    var on = !dialog.classList.contains("is-zoomed");
    setZoom(on, 0.5, 0.3);
  });
  img.addEventListener("click", function (e) {
    var on = !dialog.classList.contains("is-zoomed");
    var r = img.getBoundingClientRect();
    setZoom(on, (e.clientX - r.left) / r.width, (e.clientY - r.top) / r.height);
  });
  // Click on the dark area closes; Esc is handled by <dialog>.
  stage.addEventListener("click", function (e) { if (e.target === stage) close(); });
  dialog.addEventListener("close", function () { setZoom(false); img.removeAttribute("src"); });

  Array.prototype.forEach.call(links, function (a) {
    a.addEventListener("click", function (e) {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return; // let "open in new tab" work
      e.preventDefault();
      var thumb = a.querySelector("img");
      img.src = a.href;
      img.alt = thumb ? thumb.alt : "";
      setZoom(false);
      dialog.showModal();
    });
  });
})();
