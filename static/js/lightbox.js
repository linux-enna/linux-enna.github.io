// Full-screen view for links marked data-lightbox (e.g. posters).
// Without JavaScript the link simply opens the image.
(function () {
  var links = document.querySelectorAll("a[data-lightbox]");
  if (!links.length || typeof HTMLDialogElement !== "function") return;

  var dialog = document.createElement("dialog");
  dialog.className = "lightbox";
  dialog.innerHTML =
    '<button class="lightbox-close" type="button" aria-label="Chiudi">Chiudi</button>' +
    '<img class="lightbox-image" alt="">';
  document.body.appendChild(dialog);
  var img = dialog.querySelector("img");

  function close() { dialog.close(); }
  dialog.querySelector(".lightbox-close").addEventListener("click", close);
  // Click anywhere outside the image closes it; Esc is handled by <dialog>.
  dialog.addEventListener("click", function (e) { if (e.target !== img) close(); });
  dialog.addEventListener("close", function () { img.removeAttribute("src"); });

  Array.prototype.forEach.call(links, function (a) {
    a.addEventListener("click", function (e) {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return; // let "open in new tab" work
      e.preventDefault();
      var thumb = a.querySelector("img");
      img.src = a.href;
      img.alt = thumb ? thumb.alt : "";
      dialog.showModal();
    });
  });
})();
