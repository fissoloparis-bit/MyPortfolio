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

  testimonialsHeading: "What people say.",
  testimonials: [
    {
      quote: "She kept the floor calm during our busiest quarter. NPS didn't just hold, it climbed.",
      name: "Priya N.",
      role: "Support Operations Manager"
    },
    {
      quote: "The kind of lead who fixes the process, not just the ticket in front of her.",
      name: "Marcus T.",
      role: "Team Lead, Billing"
    },
    {
      quote: "Clients trusted her with account details because she never treated it as routine.",
      name: "Elena R.",
      role: "Client Services Director"
    }
  ],

  faqHeading: "A few questions people ask.",
  faq: [
    {
      question: "What kind of teams do you work best with?",
      answer: "Support and operations teams that handle a high volume of customer contact — where consistency matters as much as speed."
    },
    {
      question: "Are you open to remote roles?",
      answer: "Yes — remote, hybrid, or on-site all work, depending on the team and the role."
    },
    {
      question: "What's your approach to underperforming metrics?",
      answer: "Start with the workflow, not the person. Most low scores trace back to a process gap that coaching alone won't fix."
    },
    {
      question: "How do you handle sensitive client data?",
      answer: "Carefully, and by the book — treating every account like it's the only one, not one of thousands."
    }
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
    document.querySelector("[data-testimonials-heading]").textContent = CONFIG.testimonialsHeading;
    document.querySelector("[data-faq-heading]").textContent = CONFIG.faqHeading;
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
      li.className = "step reveal";
      li.style.transitionDelay = `${index * 0.08}s`;
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
    CONFIG.stats.forEach((stat, index) => {
      const div = document.createElement("div");
      div.className = "reveal";
      div.style.transitionDelay = `${index * 0.1}s`;
      div.innerHTML = `
        <div class="stat__number" data-count="${stat.value}" data-suffix="${stat.suffix}">0${stat.suffix}</div>
        <div class="stat__label">${stat.label}</div>
      `;
      grid.appendChild(div);
    });
  }

  function renderTestimonials() {
    const grid = document.querySelector("[data-testimonials-grid]");
    CONFIG.testimonials.forEach((t, index) => {
      const card = document.createElement("div");
      card.className = "testimonial reveal";
      card.style.transitionDelay = `${index * 0.1}s`;
      card.innerHTML = `
        <p class="testimonial__quote">${t.quote}</p>
        <p class="testimonial__byline"><strong>${t.name}</strong> — ${t.role}</p>
      `;
      grid.appendChild(card);
    });
  }

  function renderFAQ() {
    const list = document.querySelector("[data-faq-list]");
    CONFIG.faq.forEach(item => {
      const wrap = document.createElement("div");
      wrap.className = "faq-item reveal";
      wrap.innerHTML = `
        <button type="button" class="faq-item__q" aria-expanded="false">
          <span>${item.question}</span>
          <span class="faq-item__icon" aria-hidden="true"></span>
        </button>
        <div class="faq-item__a-wrap">
          <div class="faq-item__a-inner">
            <p class="faq-item__a">${item.answer}</p>
          </div>
        </div>
      `;
      const btn = wrap.querySelector(".faq-item__q");
      btn.addEventListener("click", () => {
        const open = wrap.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", String(open));
      });
      list.appendChild(wrap);
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

  /* --- generic scroll reveal for headings, stats, steps, etc. --- */
  function wireRevealObserver() {
    const items = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    items.forEach(el => io.observe(el));
  }

  /* --- cursor-tracking glow on pill buttons + magnetic pull --- */
  function wireButtonGlow() {
    document.querySelectorAll(".btn-glow").forEach(btn => {
      btn.addEventListener("mousemove", e => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        btn.style.setProperty("--x", `${x}px`);
        btn.style.setProperty("--y", `${y}px`);

        const cx = x - rect.width / 2;
        const cy = y - rect.height / 2;
        btn.style.transform = `translate(${cx * 0.18}px, ${cy * 0.35}px)`;
      });
      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "";
      });
    });
  }

  /* --- 3D tilt on testimonial cards --- */
  function wireCardTilt() {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    document.querySelectorAll(".testimonial").forEach(card => {
      card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(700px) rotateX(${py * -8}deg) rotateY(${px * 10}deg) translateY(-4px)`;
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  }

  /* --- custom cursor that grows over interactive elements --- */
  function wireCustomCursor() {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const dot = document.createElement("div");
    dot.className = "cursor-dot";
    document.body.appendChild(dot);

    let x = window.innerWidth / 2, y = window.innerHeight / 2;
    let tx = x, ty = y;

    document.addEventListener("mousemove", e => { tx = e.clientX; ty = e.clientY; });

    function loop() {
      x += (tx - x) * 0.2;
      y += (ty - y) * 0.2;
      dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    }
    loop();

    document.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("mouseenter", () => dot.classList.add("is-active"));
      el.addEventListener("mouseleave", () => dot.classList.remove("is-active"));
    });
  }

  /* --- hero content fades and settles as you scroll past it --- */
  function wireHeroScrollFade() {
    const content = document.querySelector(".hero__content");
    const hero = document.getElementById("hero");
    function update() {
      const rect = hero.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / (rect.height * 0.8), 0), 1);
      content.style.opacity = String(1 - progress);
      content.style.transform = `scale(${1 - progress * 0.08}) translateY(${progress * -20}px)`;
    }
    document.addEventListener("scroll", update, { passive: true });
    update();
  }

  /* --- mobile menu --- */
  function wireMobileMenu() {
    const toggle = document.querySelector("[data-menu-toggle]");
    const panel = document.querySelector("[data-mobile-nav]");

    function setOpen(open) {
      panel.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      document.body.style.overflow = open ? "hidden" : "";
    }

    toggle.addEventListener("click", () => {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    panel.querySelectorAll("[data-mobile-link]").forEach(link => {
      link.addEventListener("click", () => setOpen(false));
    });

    document.addEventListener("keydown", e => {
      if (e.key === "Escape") setOpen(false);
    });

    // if the viewport is resized past the mobile breakpoint while open, close it
    const mq = window.matchMedia("(min-width: 761px)");
    mq.addEventListener("change", e => { if (e.matches) setOpen(false); });
  }

  fillStaticText();
  renderTabs();
  renderSteps();
  renderStats();
  renderTestimonials();
  renderFAQ();
  wireScrollProgress();
  wireParallax();
  wireReveals();
  wireRevealObserver();
  wireButtonGlow();
  wireCardTilt();
  wireCustomCursor();
  wireHeroScrollFade();
  wireMobileMenu();
})();
