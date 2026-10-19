/**
 * Sundar Pichai Showcase - Interactive Application Logic
 * Data-driven architecture for Milestones, Ventures, Impact, and Quotes
 */

// ==========================================
// 1. STRUCTURED DATA ARRAYS
// ==========================================

const milestonesData = [
  {
    id: "m1",
    year: "1993 – 2002",
    title: "Academic Excellence & Material Science Foundation",
    role: "Scholar & Emerging Strategist",
    category: "education",
    era: "Foundations",
    badge: "Academic Roots",
    summary: "Earned a B.Tech from IIT Kharagpur, an M.S. from Stanford University, and an MBA from Wharton as a Palmer Scholar.",
    details: "Born in Madurai and raised in Chennai, Pichai demonstrated exceptional analytical aptitude early on. At IIT Kharagpur, he received the Institute Silver Medal in Metallurgical Engineering. He moved to the United States on a Stanford scholarship to pursue semiconductor materials science, later earning an MBA at Wharton before working as an engineer at Applied Materials and consultant at McKinsey & Co.",
    impact: "Built a rare dual foundation in rigorous deep engineering hardware and global business strategy.",
    quote: "Wear your failure as a badge of honor. It is important to follow your dreams and do something which you're excited by."
  },
  {
    id: "m2",
    year: "2004",
    title: "Joining Google & Safeguarding Search",
    role: "Head of Product Management",
    category: "product",
    era: "Google Inception",
    badge: "Strategic Turning Point",
    summary: "Joined Google on April 1, 2004 (the day Gmail launched), taking charge of Google Toolbar and client desktop software.",
    details: "Pichai recognized that Microsoft could replace Google Search with MSN/Bing as the default engine on Internet Explorer, threatening Google's primary revenue artery. He led the rapid engineering and deployment of the Google Toolbar, preserving Google's search gateway and proving his strategic acumen to founders Larry Page and Sergey Brin.",
    impact: "Protected Google's core revenue channel and laid the operational groundwork for building independent browser software.",
    quote: "A person who is happy is not because everything is right in his life, he is happy because his attitude towards everything in his life is right."
  },
  {
    id: "m3",
    year: "2008",
    title: "Conceiving & Launching Google Chrome",
    role: "VP of Product Development",
    category: "product",
    era: "Web Revolution",
    badge: "Platform Genesis",
    summary: "Championed the development of a lightweight, ultra-fast web browser, overcoming internal executive skepticism.",
    details: "Google's then-CEO Eric Schmidt initially opposed building a web browser due to the brutal memory of the 1990s browser wars. Pichai quietly orchestrated a prototype with engineers showing how multiprocess sandboxing and the V8 JavaScript engine could transform the web into an application platform. Launched in September 2008, Chrome became the dominant web browser worldwide.",
    impact: "Turned Chrome into the gateway for 3+ billion users, claiming >65% global market share and enabling cloud apps.",
    quote: "The web is only as good as the speed and safety of the browser that opens it."
  },
  {
    id: "m4",
    year: "2013",
    title: "Unifying Android, Chrome & Google Apps",
    role: "SVP, Android, Chrome & Apps",
    category: "product",
    era: "Ecosystem Unification",
    badge: "Mobile Transformation",
    summary: "Succeeded Android creator Andy Rubin to integrate Google's fragmented mobile and cloud computing pillars.",
    details: "When Larry Page appointed Pichai to head Android in addition to Chrome and Google Apps (Drive, Docs, Gmail), many viewed it as a test of diplomacy. Pichai harmonized relationships with phone manufacturers like Samsung, launched the 'Android One' initiative for affordable smartphones, and established standard developer APIs across all Google mobile platforms.",
    impact: "Scaled Android beyond 1 billion daily active devices while preserving open-source developer accessibility.",
    quote: "Good companies are built around products that solve real friction for real humans."
  },
  {
    id: "m5",
    year: "2015",
    title: "Appointed CEO of Google",
    role: "Chief Executive Officer, Google",
    category: "executive",
    era: "Corporate Leadership",
    badge: "Executive Leadership",
    summary: "Selected by Larry Page and Sergey Brin to run Google during the historic corporate restructuring into Alphabet Inc.",
    details: "In August 2015, Google restructured into a holding parent company called Alphabet. Pichai was named CEO of Google, running its most profitable operations: Search, YouTube, Maps, Android, Cloud, and Ads. In 2016 at Google I/O, he announced the monumental strategic pivot: Google would transition from a 'mobile-first' to an 'AI-first' company.",
    impact: "Steered Google's market capitalization past $1 trillion while funding long-term machine learning infrastructure (TPUs).",
    quote: "Computing is shifting again: from a mobile-first world to an AI-first world."
  },
  {
    id: "m6",
    year: "2019 – Present",
    title: "CEO of Alphabet & The Generative AI Era",
    role: "CEO of Alphabet Inc. & Google",
    category: "executive",
    era: "Frontier Intelligence",
    badge: "Global Chief",
    summary: "Assumed complete executive helm of Alphabet Inc. and unified Google Brain and DeepMind to build Gemini.",
    details: "In December 2019, Larry Page and Sergey Brin stepped down from active management, appointing Pichai as CEO of Alphabet. Pichai has overseen Alphabet's expansion through global antitrust scrutiny, remote work transitions, and the AI revolution. In 2023, he merged Google Brain with DeepMind under Demis Hassabis, orchestrating the rollout of Gemini across Workspace, Search, and Cloud.",
    impact: "Leads an empire of over 180,000 employees with revenues exceeding $300 billion annually.",
    quote: "AI is probably the most important thing humanity has ever worked on. I think of it as something more profound than electricity or fire."
  }
];

const venturesData = [
  {
    id: "v1",
    name: "Google Chrome & ChromeOS",
    category: "browser",
    yearStarted: "2008",
    pichaiRole: "Visionary & Lead Product Executive",
    tag: "Web Infrastructure",
    connection: "Conceived the project from scratch, assembled the engineering squad, and persuaded leadership to take on Microsoft's monopoly.",
    stats: [
      { label: "Market Share", value: "65%+" },
      { label: "Active Users", value: "3.2B+" },
      { label: "First Release", value: "Sept 2008" }
    ],
    description: "A fast, secure, minimalist open-source web engine that redefined how the world accesses the modern internet.",
    fullNarrative: "In 2006, when Google was dependent on third-party browsers for search traffic, Sundar Pichai championed creating an independent browser. He envisioned a multi-process architecture where each tab was sandboxed, ensuring that one crashing page wouldn't bring down the entire browser. Pichai also oversaw the birth of ChromeOS, creating lightweight Chromebooks that conquered K-12 education and lightweight enterprise computing.",
    officialUrl: "https://www.google.com/chrome/",
    linkText: "Visit Google Chrome Official"
  },
  {
    id: "v2",
    name: "Android Platform & Mobile Ecosystem",
    category: "mobile",
    yearStarted: "2013 (Leadership)",
    pichaiRole: "Senior Vice President of Android",
    tag: "Mobile OS",
    connection: "Took the reins from Andy Rubin in 2013, bridging hardware OEM alliances, security, and developer unification.",
    stats: [
      { label: "Active Devices", value: "3.0B+" },
      { label: "Global Share", value: "~71%" },
      { label: "App Ecosystem", value: "Play Store" }
    ],
    description: "The world's most widely adopted mobile operating system, bringing smartphone computing to every continent.",
    fullNarrative: "Taking over Android at a delicate moment of OEM tensions and platform fragmentation, Pichai adopted a collaborative, diplomatic approach. He smoothed relations with Samsung, launched Android One to produce high-quality $100 smartphones for emerging markets in Asia and Africa, and paved the way for Google's own Pixel consumer hardware division.",
    officialUrl: "https://www.android.com/",
    linkText: "Explore Android Official"
  },
  {
    id: "v3",
    name: "Alphabet Inc. & Google DeepMind",
    category: "corporate",
    yearStarted: "2019 (Alphabet CEO)",
    pichaiRole: "Chief Executive Officer of Alphabet",
    tag: "Parent Holding & AI",
    connection: "Oversees the entire parent conglomerate (Google, DeepMind, Waymo, Verily) and unified Brain + DeepMind for Gemini.",
    stats: [
      { label: "Annual Revenue", value: "$300B+" },
      { label: "Workforce", value: "180,000+" },
      { label: "Core Frontier", value: "Gemini AI" }
    ],
    description: "The multinational holding conglomerate powering global search, autonomous driving, frontier artificial intelligence, and life sciences.",
    fullNarrative: "As Alphabet CEO, Pichai guides capital allocation across moonshots like Waymo (autonomous ride-hailing) and Verily (precision health), while keeping Google's profit engines razor-sharp. In 2023, he orchestrated the merger of Google Brain and DeepMind, accelerating generative AI breakthroughs and embedding Gemini models into search, smartphones, and enterprise cloud systems.",
    officialUrl: "https://abc.xyz/",
    linkText: "Alphabet Official Portal"
  },
  {
    id: "v4",
    name: "Google Cloud & Workspace",
    category: "enterprise",
    yearStarted: "2015 (As CEO)",
    pichaiRole: "Executive Sponsor & Board Director",
    tag: "Cloud & Productivity",
    connection: "Pivoted Google's consumer productivity apps into enterprise-grade Google Workspace and invested billions in hyperscale cloud.",
    stats: [
      { label: "Cloud Run-Rate", value: "$36B+" },
      { label: "Workspace Users", value: "3B+" },
      { label: "Infrastructure", value: "Global TPUs" }
    ],
    description: "Enterprise infrastructure, data warehousing, AI accelerators, and collaborative cloud tools like Docs, Drive, and Meet.",
    fullNarrative: "Recognizing that enterprise computing was the next major battleground, Pichai recruited enterprise veteran Thomas Kurian to lead Google Cloud, backed massive capital expenditures for undersea fiber cables and custom AI Tensor Processing Units (TPUs), and guided Google Workspace to become the primary collaboration suite for remote and hybrid teams worldwide.",
    officialUrl: "https://cloud.google.com/",
    linkText: "Google Cloud Official"
  }
];

const quotesData = [
  {
    id: "q1",
    quote: "A person who is happy is not because everything is right in his life, he is happy because his attitude towards everything in his life is right.",
    occasion: "Speech at SRCC, New Delhi",
    year: "2015",
    theme: "Resilience & Mindset"
  },
  {
    id: "q2",
    quote: "It is always good to work with people who make you feel insecure about yourself. That way, you will constantly push your limits.",
    occasion: "Address to Students, IIT Kharagpur",
    year: "2017",
    theme: "Personal Growth"
  },
  {
    id: "q3",
    quote: "You have to work with people who are different from you. If you don't, you run the risk of creating echo chambers.",
    occasion: "Stanford Graduate School of Business Interview",
    year: "2020",
    theme: "Leadership & Diversity"
  },
  {
    id: "q4",
    quote: "At Google, we have an ambitious approach to things we do, we call it Moonshots. You aim for a 10x improvement rather than 10%.",
    occasion: "Google I/O Keynote",
    year: "2018",
    theme: "Innovation Scale"
  },
  {
    id: "q5",
    quote: "Wear your failure as a badge of honor. If you don't fail sometimes, you are not being ambitious enough.",
    occasion: "Wharton Global Alumni Forum",
    year: "2016",
    theme: "Courage & Risk"
  }
];

// ==========================================
// 2. DOM INITIALIZATION & STATE
// ==========================================

let activeMilestoneFilter = "all";
let activeVentureFilter = "all";
let currentSearchTerm = "";
let currentQuoteIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  initMilestones();
  initVentures();
  initQuotes();
  initSearch();
  initFilterButtons();
  initModalListeners();
  initNavScroll();
  initBackToTop();
});

// ==========================================
// 3. MILESTONES RENDERING (DATA ARRAY)
// ==========================================

function initMilestones() {
  renderMilestones();
}

function renderMilestones() {
  const container = document.getElementById("milestones-container");
  if (!container) return;

  const filtered = milestonesData.filter(item => {
    const matchesCategory = activeMilestoneFilter === "all" || item.category === activeMilestoneFilter;
    const matchesSearch = !currentSearchTerm || 
      item.title.toLowerCase().includes(currentSearchTerm) ||
      item.role.toLowerCase().includes(currentSearchTerm) ||
      item.summary.toLowerCase().includes(currentSearchTerm) ||
      item.year.toLowerCase().includes(currentSearchTerm);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">⚲</div>
        <p class="empty-title">No milestones found</p>
        <p class="empty-desc">Try clearing your search query or selecting "All Milestones".</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((item, index) => `
    <article class="timeline-card" data-id="${item.id}" tabindex="0">
      <div class="timeline-meta">
        <span class="timeline-year">${escapeHtml(item.year)}</span>
        <span class="timeline-badge">${escapeHtml(item.badge)}</span>
      </div>
      <div class="timeline-body">
        <h3 class="timeline-title">${highlightMatch(escapeHtml(item.title), currentSearchTerm)}</h3>
        <p class="timeline-role">${highlightMatch(escapeHtml(item.role), currentSearchTerm)}</p>
        <p class="timeline-summary">${highlightMatch(escapeHtml(item.summary), currentSearchTerm)}</p>
        
        <div class="timeline-expandable" id="detail-${item.id}">
          <div class="expandable-inner">
            <div class="detail-block">
              <strong>Context & Strategy:</strong>
              <p>${escapeHtml(item.details)}</p>
            </div>
            <div class="detail-block impact-highlight">
              <strong>Core Impact:</strong>
              <p>${escapeHtml(item.impact)}</p>
            </div>
            ${item.quote ? `
              <blockquote class="detail-quote">
                “${escapeHtml(item.quote)}”
              </blockquote>
            ` : ""}
          </div>
        </div>

        <button type="button" class="btn-expand-timeline" aria-expanded="false" data-target="detail-${item.id}">
          <span class="btn-text">Read Deep-Dive</span>
          <span class="btn-icon">↓</span>
        </button>
      </div>
    </article>
  `).join("");

  attachMilestoneExpandListeners();
}

function attachMilestoneExpandListeners() {
  const expandBtns = document.querySelectorAll(".btn-expand-timeline");
  expandBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const targetId = btn.getAttribute("data-target");
      const targetEl = document.getElementById(targetId);
      const isExpanded = btn.getAttribute("aria-expanded") === "true";

      if (isExpanded) {
        targetEl.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
        btn.querySelector(".btn-text").textContent = "Read Deep-Dive";
        btn.querySelector(".btn-icon").textContent = "↓";
      } else {
        targetEl.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
        btn.querySelector(".btn-text").textContent = "Collapse View";
        btn.querySelector(".btn-icon").textContent = "↑";
      }
    });
  });
}

// ==========================================
// 4. VENTURES RENDERING (DATA ARRAY)
// ==========================================

function initVentures() {
  renderVentures();
}

function renderVentures() {
  const container = document.getElementById("ventures-container");
  if (!container) return;

  const filtered = venturesData.filter(item => {
    const matchesCategory = activeVentureFilter === "all" || item.category === activeVentureFilter;
    const matchesSearch = !currentSearchTerm || 
      item.name.toLowerCase().includes(currentSearchTerm) ||
      item.pichaiRole.toLowerCase().includes(currentSearchTerm) ||
      item.description.toLowerCase().includes(currentSearchTerm) ||
      item.connection.toLowerCase().includes(currentSearchTerm);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">⚲</div>
        <p class="empty-title">No ventures found</p>
        <p class="empty-desc">Try clearing your search query or selecting "All Ventures".</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <article class="venture-card" data-venture-id="${item.id}" tabindex="0">
      <div class="venture-card-header">
        <span class="venture-tag">${escapeHtml(item.tag)}</span>
        <span class="venture-year">Since ${escapeHtml(item.yearStarted)}</span>
      </div>

      <h3 class="venture-title">${highlightMatch(escapeHtml(item.name), currentSearchTerm)}</h3>
      <p class="venture-role">${highlightMatch(escapeHtml(item.pichaiRole), currentSearchTerm)}</p>

      <p class="venture-desc">${highlightMatch(escapeHtml(item.description), currentSearchTerm)}</p>

      <div class="venture-connection">
        <span class="connection-label">Pichai's Connection:</span>
        <p class="connection-text">${escapeHtml(item.connection)}</p>
      </div>

      <div class="venture-stats-row">
        ${item.stats.map(s => `
          <div class="stat-pill">
            <span class="stat-val">${escapeHtml(s.value)}</span>
            <span class="stat-lbl">${escapeHtml(s.label)}</span>
          </div>
        `).join("")}
      </div>

      <div class="venture-actions">
        <button type="button" class="btn-inspect-venture" data-id="${item.id}">
          <span>Inspect Blueprint</span>
          <span class="arrow-glyph">→</span>
        </button>
        <a href="${item.officialUrl}" target="_blank" rel="noopener noreferrer" class="link-official">
          <span>Official Site</span>
          <span class="external-glyph">↗</span>
        </a>
      </div>
    </article>
  `).join("");

  attachVentureInspectListeners();
}

function attachVentureInspectListeners() {
  const inspectBtns = document.querySelectorAll(".btn-inspect-venture");
  inspectBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      openVentureModal(id);
    });
  });

  // Card click fallback
  const cards = document.querySelectorAll(".venture-card");
  cards.forEach(card => {
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        const id = card.getAttribute("data-venture-id");
        openVentureModal(id);
      }
    });
  });
}

// ==========================================
// 5. VENTURE MODAL INSPECTOR
// ==========================================

function openVentureModal(ventureId) {
  const venture = venturesData.find(v => v.id === ventureId);
  if (!venture) return;

  const modal = document.getElementById("venture-modal");
  const modalBody = document.getElementById("modal-dynamic-content");

  modalBody.innerHTML = `
    <div class="modal-venture-header">
      <div class="modal-tag-pill">${escapeHtml(venture.tag)}</div>
      <h2 class="modal-title">${escapeHtml(venture.name)}</h2>
      <p class="modal-subtitle">${escapeHtml(venture.pichaiRole)} • Since ${escapeHtml(venture.yearStarted)}</p>
    </div>

    <div class="modal-metrics-grid">
      ${venture.stats.map(s => `
        <div class="modal-metric-card">
          <div class="metric-num">${escapeHtml(s.value)}</div>
          <div class="metric-txt">${escapeHtml(s.label)}</div>
        </div>
      `).join("")}
    </div>

    <div class="modal-narrative-section">
      <h4 class="modal-section-heading">Strategic Narrative & Pichai's Footprint</h4>
      <p class="modal-paragraph">${escapeHtml(venture.fullNarrative)}</p>
    </div>

    <div class="modal-connection-box">
      <h4 class="modal-section-heading">Key Leadership Decision</h4>
      <p class="modal-paragraph">${escapeHtml(venture.connection)}</p>
    </div>

    <div class="modal-footer-cta">
      <a href="${venture.officialUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary-modal">
        <span>Open ${escapeHtml(venture.name)} Official Website</span>
        <span>↗</span>
      </a>
      <button type="button" class="btn-close-modal-inline" id="btn-close-modal-inline">Dismiss</button>
    </div>
  `;

  modal.classList.add("is-visible");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  // Rebind inline close
  document.getElementById("btn-close-modal-inline")?.addEventListener("click", closeVentureModal);
}

function closeVentureModal() {
  const modal = document.getElementById("venture-modal");
  if (!modal) return;
  modal.classList.remove("is-visible");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function initModalListeners() {
  const modal = document.getElementById("venture-modal");
  const closeBtn = document.getElementById("btn-close-modal");
  const backdrop = document.getElementById("modal-backdrop");

  closeBtn?.addEventListener("click", closeVentureModal);
  backdrop?.addEventListener("click", closeVentureModal);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal?.classList.contains("is-visible")) {
      closeVentureModal();
    }
  });
}

// ==========================================
// 6. QUOTES EXPLORER INTERACTION
// ==========================================

function initQuotes() {
  renderQuote(0);

  const prevBtn = document.getElementById("quote-prev");
  const nextBtn = document.getElementById("quote-next");
  const copyBtn = document.getElementById("quote-copy");

  prevBtn?.addEventListener("click", () => {
    currentQuoteIndex = (currentQuoteIndex - 1 + quotesData.length) % quotesData.length;
    renderQuote(currentQuoteIndex);
  });

  nextBtn?.addEventListener("click", () => {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotesData.length;
    renderQuote(currentQuoteIndex);
  });

  copyBtn?.addEventListener("click", () => {
    const q = quotesData[currentQuoteIndex];
    const textToCopy = `"${q.quote}" — Sundar Pichai (${q.year}, ${q.occasion})`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      const origText = copyBtn.innerHTML;
      copyBtn.innerHTML = `<span>Copied to Clipboard!</span>`;
      setTimeout(() => {
        copyBtn.innerHTML = origText;
      }, 2000);
    });
  });
}

function renderQuote(index) {
  const item = quotesData[index];
  if (!item) return;

  const quoteText = document.getElementById("quote-text");
  const quoteOccasion = document.getElementById("quote-occasion");
  const quoteTheme = document.getElementById("quote-theme");
  const quoteCounter = document.getElementById("quote-counter");

  if (quoteText) quoteText.textContent = `“${item.quote}”`;
  if (quoteOccasion) quoteOccasion.textContent = `${item.occasion} (${item.year})`;
  if (quoteTheme) quoteTheme.textContent = item.theme;
  if (quoteCounter) quoteCounter.textContent = `${index + 1} of ${quotesData.length}`;
}

// ==========================================
// 7. REAL-TIME SEARCH & FILTERING
// ==========================================

function initSearch() {
  const searchInput = document.getElementById("site-search");
  const clearBtn = document.getElementById("search-clear");
  const resultsCounter = document.getElementById("search-results-info");

  searchInput?.addEventListener("input", (e) => {
    currentSearchTerm = e.target.value.trim().toLowerCase();
    
    if (currentSearchTerm.length > 0) {
      clearBtn?.classList.add("is-active");
    } else {
      clearBtn?.classList.remove("is-active");
    }

    renderMilestones();
    renderVentures();
    updateSearchResultsCount(resultsCounter);
  });

  clearBtn?.addEventListener("click", () => {
    searchInput.value = "";
    currentSearchTerm = "";
    clearBtn.classList.remove("is-active");
    renderMilestones();
    renderVentures();
    if (resultsCounter) resultsCounter.textContent = "";
  });
}

function updateSearchResultsCount(counterEl) {
  if (!counterEl) return;
  if (!currentSearchTerm) {
    counterEl.textContent = "";
    return;
  }

  const matchingMilestones = milestonesData.filter(m => 
    m.title.toLowerCase().includes(currentSearchTerm) ||
    m.role.toLowerCase().includes(currentSearchTerm) ||
    m.summary.toLowerCase().includes(currentSearchTerm)
  ).length;

  const matchingVentures = venturesData.filter(v => 
    v.name.toLowerCase().includes(currentSearchTerm) ||
    v.description.toLowerCase().includes(currentSearchTerm) ||
    v.connection.toLowerCase().includes(currentSearchTerm)
  ).length;

  const total = matchingMilestones + matchingVentures;
  counterEl.textContent = `${total} matching result${total === 1 ? '' : 's'} across showcase`;
}

function initFilterButtons() {
  // Milestone filter tabs
  const milestoneButtons = document.querySelectorAll("[data-milestone-filter]");
  milestoneButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      milestoneButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeMilestoneFilter = btn.getAttribute("data-milestone-filter");
      renderMilestones();
    });
  });

  // Venture filter tabs
  const ventureButtons = document.querySelectorAll("[data-venture-filter]");
  ventureButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      ventureButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeVentureFilter = btn.getAttribute("data-venture-filter");
      renderVentures();
    });
  });
}

// ==========================================
// 8. SCROLL & NAVIGATION HELPERS
// ==========================================

function initNavScroll() {
  const links = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    let currentId = "";
    const scrollPos = window.scrollY + 200;

    sections.forEach(sec => {
      if (scrollPos >= sec.offsetTop) {
        currentId = sec.getAttribute("id");
      }
    });

    links.forEach(l => {
      if (l.getAttribute("href") === `#${currentId}`) {
        l.classList.add("is-current");
      } else {
        l.classList.remove("is-current");
      }
    });
  });
}

function initBackToTop() {
  const btn = document.getElementById("btn-back-to-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      btn.classList.add("is-visible");
    } else {
      btn.classList.remove("is-visible");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ==========================================
// 9. UTILITY FUNCTIONS
// ==========================================

function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function highlightMatch(text, term) {
  if (!term || !text) return text;
  const regex = new RegExp(`(${escapeRegex(term)})`, "gi");
  return text.replace(regex, `<mark class="search-highlight">$1</mark>`);
}

function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
