/* ================================================================
   EDIT EVERYTHING IN THIS CONFIG OBJECT TO MAKE THE SITE YOURS.
   ================================================================ */
const CONFIG = {
  name: "Your Name",

  headline: "Where thoughts become actions.",
  sub: "A tech-minded operations specialist dedicated to streamlining workflows, leading high-performing teams, and turning high-volume customer interactions into reliable results.",
  heroCta: "See how I work",

  tabsEyebrow: "What I bring",
  tabsHeading: "A few different strengths, all pointed at the same result.",
  tabs: [
    {
      label: "Team leadership",
      metricValue: "10",
      metricLabel: "people on the team I led",
      title: "Leading a team through high-volume, high-stakes work",
      body: "Managed a team of 10 handling technical support across mobile, internet, TV, and landline concerns — coaching day to day and keeping quality steady even during peak volume."
    },
    {
      label: "Customer experience",
      metricValue: "60%+",
      metricLabel: "NPS / NSS, hit monthly",
      title: "Turning support interactions into loyalty",
      body: "Hit 60%+ NPS and NSS scores monthly against company-set metrics — built on consistency, not one good week."
    },
    {
      label: "Trust & accuracy",
      metricValue: "1:1",
      metricLabel: "client funds handled with care",
      title: "Handling sensitive client information carefully",
      body: "Worked directly with client funds, banking details, and digital banking concerns, where accuracy and discretion aren't optional."
    },
    {
      label: "Systems & tools",
      metricValue: "CRM",
      metricLabel: "tools used daily",
      title: "Keeping the back office as sharp as the front line",
      body: "Used CRM-style tools to manage back-office details and follow through with clients on the products they'd acquired, resolving issues end to end."
    }
  ],

  approachHeading: "How I approach the work.",
  steps: [
    { title: "Listen first", body: "Get close to the workflow and the people in it before changing anything — most problems are visible once you actually look." },
    { title: "Streamline", body: "Rebuild the process so the team can move faster without cutting corners, and make sure it's simple enough to stick." },
    { title: "Deliver, consistently", body: "Track the numbers, coach the team, and keep results steady month over month — not just in the weeks someone's watching." }
  ],

  stats: [
    { value: 10, suffix: "", label: "team members led" },
    { value: 60, suffix: "%+", label: "monthly NPS / NSS" },
    { value: 100, suffix: "%", label: "accuracy on client fund handling" }
  ],

  contactHeading: "Let's talk.",
  email: "hello@example.com",
  socials: [
    { label: "LinkedIn", url: "https://linkedin.com" },
    { label: "Resume", url: "#" }
  ]
};

/* ================================================================
   Rendering & behavior — you shouldn't need to edit below this line.
   ================================================================ */
(function () {
  function fillStaticText() {
    document.title = CONFIG.name;
    document.querySelectorAll("[data-name]").forEach(el => (el.textContent = CONFIG.name));
    document.querySelectorAll("[data-footer-name]").forEach(el => (el.textContent = CONFIG.name));
    document.querySelector("[data-headline]").textContent = CONFIG.headline;
    document.querySelector("[data-sub]").textContent = CONFIG.sub;
    document.querySelector("[data-cta]").textContent = CONFIG.heroCta;

    document.querySelector("[data-tabs-eyebrow]").textContent = CONFIG.tabsEyebrow;
    document.querySelector("[data-tabs-heading]").textContent = CONFIG.tabsHeading;
    document.querySelector("[data-approach-heading]").textContent = CONFIG.approachHeading;
    document.querySelector("[data-contact-heading]").textContent = CONFIG.contactHeading;

    const emailEl = document.querySelector("[data-email]");
    emailEl.textContent = CONFIG.email;
    emailEl.href = `mailto:${CONFIG.email}`;

    document.querySelector("[data-year]").textContent = new Date().getFullYear();

    const socialsEl = document.querySelector("[data-socials]");
    CONFIG.socials.forEach(s => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = s.url;
      a.textContent = s.label;
      a.target = "_blank";
      a.rel = "noopener";
      li.appendChild(a);
      socialsEl.appendChild(li);
    });
  }

  function renderTabs() {
    const nav = document.querySelector("[data-tabs-nav]");
    const visual = document.querySelector("[data-tabs-visual]");
    const copy = document.querySelector("[data-tabs-copy]");

    function paint(index) {
      const tab = CONFIG.tabs[index];
      visual.innerHTML = `
        <div class="tabs__visual-card">
          <div class="tabs__visual-metric">${tab.metricValue}</div>
          <div>${tab.metricLabel}</div>
        </div>
      `;
      copy.innerHTML = `
        <p class="tabs__copy-title">${tab.label}</p>
        <p class="tabs__copy-body">${tab.title}</p>
        <p style="color:var(--muted); margin-top:1rem; max-width:38ch;">${tab.body}</p>
      `;
      [...nav.children].forEach((btn, i) => btn.classList.toggle("is-active", i === index));
    }

    CONFIG.tabs.forEach((tab, index) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = tab.label;
      btn.addEventListener("click", () => paint(index));
      nav.appendChild(btn);
    });

    paint(0);
  }

  function renderSteps() {
    const stepsEl = document.querySelector("[data-steps]");
    CONFIG.steps.forEach((step, index) => {
      const li = document.createElement("li");
      li.className = "step";
      li.innerHTML = `
        <span class="step__index">${index + 1}</span>
        <h3 class="step__title">${step.title}</h3>
        <p class="step__body">${step.body}</p>
      `;
      stepsEl.appendChild(li);
    });
  }

  function renderStats() {
    const grid = document.querySelector("[data-stats]");
    CONFIG.stats.forEach(stat => {
      const div = document.createElement("div");
      div.innerHTML = `
        <div class="stat__number" data-count="${stat.value}" data-suffix="${stat.suffix}">0${stat.suffix}</div>
        <div class="stat__label">${stat.label}</div>
      `;
      grid.appendChild(div);
    });
  }

  /* --- scroll progress bar --- */
  function wireScrollProgress() {
    const bar = document.querySelector("[data-scroll-progress]");
    const header = document.querySelector("[data-header]");
    function update() {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = `${(scrollTop / height) * 100}%`;
      header.classList.toggle("is-scrolled", scrollTop > 40);
    }
    document.addEventListener("scroll", update, { passive: true });
    update();
  }

  /* --- hero parallax --- */
  function wireParallax() {
    const layer = document.querySelector("[data-parallax]");
    const hero = document.getElementById("hero");
    function update() {
      const rect = hero.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / rect.height, 0), 1);
      layer.style.transform = `translateY(${progress * 40}px)`;
    }
    document.addEventListener("scroll", update, { passive: true });
    update();
  }

  /* --- animated step line + count-up stats, both scroll-triggered --- */
  function wireReveals() {
    const stepsSection = document.querySelector(".approach");
    const fill = document.querySelector("[data-steps-fill]");
    const statsSection = document.querySelector(".stats");
    let statsAnimated = false;

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;

          if (entry.target === stepsSection) {
            fill.style.height = "100%";
          }

          if (entry.target === statsSection && !statsAnimated) {
            statsAnimated = true;
            document.querySelectorAll("[data-count]").forEach(el => {
              const target = parseFloat(el.dataset.count);
              const suffix = el.dataset.suffix || "";
              const duration = 900;
              const start = performance.now();
              function tick(now) {
                const t = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - t, 3);
                el.textContent = `${Math.round(eased * target)}${suffix}`;
                if (t < 1) requestAnimationFrame(tick);
              }
              requestAnimationFrame(tick);
            });
          }
        });
      },
      { threshold: 0.4 }
    );

    io.observe(stepsSection);
    io.observe(statsSection);
  }

  fillStaticText();
  renderTabs();
  renderSteps();
  renderStats();
  wireScrollProgress();
  wireParallax();
  wireReveals();
})();
