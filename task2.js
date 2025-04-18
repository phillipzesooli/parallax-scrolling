window.addEventListener("scroll", () => {
    document.querySelectorAll("[data-parallax]").forEach(el => {
      const speed = parseFloat(el.getAttribute("data-parallax"));
      const yOffset = window.scrollY * speed;
      el.style.backgroundPosition = `center calc(50% + ${yOffset}px)`;
    });
  });
