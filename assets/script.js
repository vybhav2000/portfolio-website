const sections = document.querySelectorAll(".reveal");
const navLinks = document.querySelectorAll(".nav a[href^='#']");
const metrics = document.querySelectorAll("[data-count]");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.18 }
);

sections.forEach((section) => revealObserver.observe(section));

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle(
          "is-active",
          link.getAttribute("href") === `#${entry.target.id}`
        );
      });
    });
  },
  { rootMargin: "-35% 0px -50% 0px", threshold: 0.1 }
);

document.querySelectorAll("main section[id]").forEach((section) => {
  navObserver.observe(section);
});

const animateMetric = (element) => {
  const rawValue = element.dataset.count || "";
  const target = Number.parseInt(rawValue, 10);
  if (Number.isNaN(target)) return;

  const suffix = element.textContent.replace(/[0-9]/g, "");
  const duration = 1100;
  const start = performance.now();

  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const value = Math.floor(progress * target);
    element.textContent = `${value}${suffix}`;
    if (progress < 1) {
      requestAnimationFrame(step);
      return;
    }
    element.textContent = `${rawValue}${suffix}`;
  };

  requestAnimationFrame(step);
};

const metricObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      animateMetric(entry.target);
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.7 }
);

metrics.forEach((metric) => metricObserver.observe(metric));

const projectTabs = Array.from(document.querySelectorAll("[data-project-target]"));
const projectPanels = Array.from(document.querySelectorAll("[data-project-panel]"));
const prevProjectButton = document.querySelector("[data-project-prev]");
const nextProjectButton = document.querySelector("[data-project-next]");
const projectGroupTabs = Array.from(
  document.querySelectorAll("[data-project-group]")
);
const projectTabsets = Array.from(
  document.querySelectorAll("[data-project-tabset]")
);

if (projectTabs.length && projectPanels.length) {
  let activeGroup = "work";
  const getTabsForGroup = (group) =>
    projectTabs.filter((tab) => tab.closest("[data-project-tabset]")?.dataset.projectTabset === group);

  let activeIndex = 0;

  const setProject = (index) => {
    const scopedTabs = getTabsForGroup(activeGroup);
    if (!scopedTabs.length) return;

    activeIndex = (index + scopedTabs.length) % scopedTabs.length;
    const target = scopedTabs[activeIndex].dataset.projectTarget;

    projectTabs.forEach((tab) => {
      const isActive = tab.dataset.projectTarget === target;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
    });

    projectPanels.forEach((panel) => {
      panel.classList.toggle(
        "is-active",
        panel.dataset.projectPanel === target
      );
    });
  };

  const setGroup = (group) => {
    activeGroup = group;
    projectGroupTabs.forEach((tab) => {
      const isActive = tab.dataset.projectGroup === group;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
    });

    projectTabsets.forEach((tabset) => {
      tabset.classList.toggle("is-active", tabset.dataset.projectTabset === group);
    });

    activeIndex = 0;
    setProject(0);
  };

  projectTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      const scopedTabs = getTabsForGroup(activeGroup);
      const scopedIndex = scopedTabs.findIndex(
        (candidate) => candidate.dataset.projectTarget === tab.dataset.projectTarget
      );
      if (scopedIndex >= 0) {
        setProject(scopedIndex);
      }
    });
  });

  projectGroupTabs.forEach((tab) => {
    tab.addEventListener("click", () => setGroup(tab.dataset.projectGroup));
  });

  prevProjectButton?.addEventListener("click", () => setProject(activeIndex - 1));
  nextProjectButton?.addEventListener("click", () => setProject(activeIndex + 1));
  setGroup(activeGroup);
}
