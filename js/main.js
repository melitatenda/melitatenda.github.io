/* Melinda T. Mudzurandende — portfolio interactions */
(function () {
  "use strict";

  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Split hero headline into chars ---------- */
  document.querySelectorAll("[data-split]").forEach(function (el) {
    var text = el.textContent;
    el.textContent = "";
    var lineDelay = Array.prototype.indexOf.call(
      document.querySelectorAll("[data-split]"), el
    ) * 120;
    text.split("").forEach(function (ch, i) {
      var span = document.createElement("span");
      span.className = "char";
      span.textContent = ch === " " ? " " : ch;
      span.style.transitionDelay = (lineDelay + i * 28) + "ms";
      el.appendChild(span);
    });
  });

  /* ---------- Loader ---------- */
  window.addEventListener("load", function () {
    setTimeout(function () {
      document.body.classList.add("loaded");
    }, prefersReduced ? 0 : 600);
  });
  // Fallback in case load never fires
  setTimeout(function () { document.body.classList.add("loaded"); }, 2500);

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !prefersReduced) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var delay = parseInt(entry.target.getAttribute("data-delay") || "0", 10);
          entry.target.style.transitionDelay = delay + "ms";
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Scroll progress + nav hide/show + parallax ---------- */
  var progressFill = document.getElementById("progressFill");
  var nav = document.getElementById("nav");
  var parallaxEls = document.querySelectorAll("[data-parallax]");
  var lastY = 0;
  var ticking = false;

  function onScroll() {
    var y = window.scrollY;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    if (progressFill && max > 0) {
      progressFill.style.width = (y / max) * 100 + "%";
    }

    // Hide nav scrolling down, show scrolling up
    if (nav) {
      if (y > 160 && y > lastY) nav.classList.add("nav--hidden");
      else nav.classList.remove("nav--hidden");
    }

    if (!prefersReduced) {
      parallaxEls.forEach(function (el) {
        var speed = parseFloat(el.getAttribute("data-parallax")) || 0.3;
        el.style.transform = "translateY(" + y * speed * 0.4 + "px)" +
          (el.classList.contains("shape--bar") ? " rotate(18deg)" : "");
      });
    }

    lastY = y;
    ticking = false;
  }

  window.addEventListener("scroll", function () {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  var burger = document.getElementById("burger");
  var navLinks = document.getElementById("navLinks");
  if (burger && navLinks) {
    burger.addEventListener("click", function () {
      var open = navLinks.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    navLinks.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        navLinks.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }
})();
