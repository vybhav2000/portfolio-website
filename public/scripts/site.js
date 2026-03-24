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
  const displayValue = element.dataset.countDisplay || element.textContent || rawValue;
  const target = Number.parseInt(rawValue, 10);
  if (Number.isNaN(target)) return;

  const suffix = displayValue.replace(/[0-9]/g, "");
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
    element.textContent = displayValue;
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

const overviewTabs = Array.from(document.querySelectorAll("[data-overview-target]"));
const overviewPanels = Array.from(document.querySelectorAll("[data-overview-panel]"));

if (overviewTabs.length && overviewPanels.length) {
  const setOverviewPanel = (target) => {
    overviewTabs.forEach((tab) => {
      const isActive = tab.dataset.overviewTarget === target;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
    });

    overviewPanels.forEach((panel) => {
      const isActive = panel.dataset.overviewPanel === target;
      panel.classList.toggle("is-active", isActive);
      panel.setAttribute("aria-hidden", String(!isActive));
    });
  };

  overviewTabs.forEach((tab) => {
    tab.addEventListener("click", () => setOverviewPanel(tab.dataset.overviewTarget));
  });

  setOverviewPanel(overviewTabs[0].dataset.overviewTarget);
}

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
    projectTabs.filter(
      (tab) => tab.closest("[data-project-tabset]")?.dataset.projectTabset === group
    );

  const getPanelById = (id) =>
    projectPanels.find((panel) => panel.dataset.projectPanel === id);

  let activeIndex = 0;

  const setProject = (index, updateHash = true) => {
    const scopedTabs = getTabsForGroup(activeGroup);
    if (!scopedTabs.length) return;

    activeIndex = (index + scopedTabs.length) % scopedTabs.length;
    const target = scopedTabs[activeIndex].dataset.projectTarget;

    projectTabs.forEach((tab) => {
      const tabGroup = tab.closest("[data-project-tabset]")?.dataset.projectTabset;
      const isActive =
        tab.dataset.projectTarget === target && tabGroup === activeGroup;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
    });

    projectPanels.forEach((panel) => {
      const isActive =
        panel.dataset.projectPanel === target &&
        panel.dataset.projectPanelGroup === activeGroup;
      panel.classList.toggle("is-active", isActive);
      panel.setAttribute("aria-hidden", String(!isActive));
    });

    if (updateHash) {
      history.replaceState(null, "", `#${target}`);
    }
  };

  const setGroup = (group, updateHash = true, targetId = null) => {
    activeGroup = group;
    projectGroupTabs.forEach((tab) => {
      const isActive = tab.dataset.projectGroup === group;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
    });

    projectTabsets.forEach((tabset) => {
      tabset.classList.toggle("is-active", tabset.dataset.projectTabset === group);
    });

    const scopedTabs = getTabsForGroup(group);
    const targetIndex = targetId
      ? scopedTabs.findIndex((tab) => tab.dataset.projectTarget === targetId)
      : 0;

    activeIndex = 0;
    setProject(targetIndex >= 0 ? targetIndex : 0, updateHash);
  };

  const setProjectById = (id, updateHash = false) => {
    const panel = getPanelById(id);
    if (!panel) {
      setGroup(activeGroup, updateHash);
      return;
    }

    const group = panel.dataset.projectPanelGroup || "work";
    setGroup(group, updateHash, id);
  };

  projectTabs.forEach((tab) => {
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

  const initialProjectId = window.location.hash.replace(/^#/, "");
  if (initialProjectId) {
    setProjectById(initialProjectId, false);
  } else {
    setGroup(activeGroup, false);
  }
}
