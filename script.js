(function () {
  var c = window.SITE_CONFIG, $ = function (s) { return document.querySelectorAll(s); };
  var wa = "https://wa.me/" + c.whatsappNumber;
  $("[data-wa]").forEach(function (a) {
    var p = a.getAttribute("data-wa");
    a.href = wa + (p ? "?text=" + encodeURIComponent(p + " নিতে চাই।") : "");
  });
  $("[data-wa-num]").forEach(function (e) { e.textContent = c.whatsappDisplay; });
  $("[data-bkash]").forEach(function (e) {
    e.textContent = c.bkashNumber === "BKASH_NUMBER" ? "WhatsApp-এ জেনে নিন" : c.bkashNumber;
  });
  var ok = /^https?:\/\//.test(c.communityUrl);
  $("[data-community]").forEach(function (a) {
    if (ok) a.href = c.communityUrl;
    else { a.removeAttribute("href"); a.setAttribute("aria-disabled", "true"); a.classList.add("off"); a.title = "Link শীঘ্রই যোগ হবে"; }
  });
  var img = document.getElementById("proof-img");
  img.src = c.screenshotPath;
  img.onerror = function () { img.hidden = true; document.getElementById("proof-missing").hidden = false; };
})();
