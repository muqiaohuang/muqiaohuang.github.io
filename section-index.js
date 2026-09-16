(() => {
  const links = [...document.querySelectorAll("[data-index-for]")];
  const sections = links.map((link) => document.getElementById(link.dataset.indexFor));

  const updateIndex = () => {
    const threshold = window.innerHeight * 0.38;
    let current = sections[0];

    for (const section of sections) {
      if (section.getBoundingClientRect().top <= threshold) current = section;
    }

    for (const link of links) {
      const active = link.dataset.indexFor === current.id;
      link.classList.toggle("is-active", active);
      link.setAttribute("aria-current", active ? "location" : "false");
    }
  };

  window.addEventListener("scroll", updateIndex, { passive: true });
  window.addEventListener("resize", updateIndex);
  updateIndex();
})();
