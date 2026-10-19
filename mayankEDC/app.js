/**
 * Steve Jobs: Interactive Entrepreneur Showcase
 * Second-Year Academic Project (100 Marks Evaluation)
 * Application Logic & Dynamic Presentation Engine
 */

(function () {
  'use strict';

  // Ensure structured data is available
  if (typeof window.showcaseData === 'undefined') {
    console.error('Showcase data not found. Please ensure data.js is loaded.');
    return;
  }

  const data = window.showcaseData;

  /* --------------------------------------------------------------------------
     DOM Element References
     -------------------------------------------------------------------------- */
  const elements = {
    progressBar: document.getElementById('readingProgressBar'),
    siteHeader: document.getElementById('siteHeader'),
    navLinks: document.querySelectorAll('.nav-link'),
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    themeIconSun: document.getElementById('themeIconSun'),
    themeIconMoon: document.getElementById('themeIconMoon'),
    metricsGrid: document.getElementById('metricsGrid'),
    timelineContainer: document.getElementById('timelineContainer'),
    eraFilterContainer: document.getElementById('eraFilterContainer'),
    timelineSearch: document.getElementById('timelineSearch'),
    venturesGrid: document.getElementById('venturesGrid'),
    synergyNodesGrid: document.getElementById('synergyNodesGrid'),
    synergyConnectionsList: document.getElementById('synergyConnectionsList'),
    dilemmaTabs: document.getElementById('dilemmaTabs'),
    dilemmaBody: document.getElementById('dilemmaBody'),
    dilemmaOptionsGrid: document.getElementById('dilemmaOptionsGrid'),
    impactCardsStack: document.getElementById('impactCardsStack'),
    takeawaysCardsStack: document.getElementById('takeawaysCardsStack'),
    sourcesGrid: document.getElementById('sourcesGrid'),
    
    // Quotes & Soundbite
    playQuoteBtn: document.getElementById('playQuoteBtn'),
    playIcon: document.getElementById('playIcon'),
    pauseIcon: document.getElementById('pauseIcon'),
    soundWaves: document.getElementById('soundWaves'),
    activeQuoteText: document.getElementById('activeQuoteText'),
    quoteDisplayText: document.getElementById('quoteDisplayText'),
    quoteDisplayContext: document.getElementById('quoteDisplayContext'),
    nextQuoteBtn: document.getElementById('nextQuoteBtn'),
    speakQuoteBtn: document.getElementById('speakQuoteBtn'),

    // Modals
    ventureModal: document.getElementById('ventureModal'),
    closeVentureModalBtn: document.getElementById('closeVentureModalBtn'),
    modalVentureCategory: document.getElementById('modalVentureCategory'),
    modalVentureTitle: document.getElementById('modalVentureTitle'),
    modalVentureRole: document.getElementById('modalVentureRole'),
    modalVentureConnection: document.getElementById('modalVentureConnection'),
    modalSpecsTable: document.getElementById('modalSpecsTable'),
    modalBreakthroughsList: document.getElementById('modalBreakthroughsList'),
    modalOfficialPortalBtn: document.getElementById('modalOfficialPortalBtn'),

    rubricModal: document.getElementById('rubricModal'),
    openRubricBtn: document.getElementById('openRubricBtn'),
    closeRubricModalBtn: document.getElementById('closeRubricModalBtn'),
    rubricTableBody: document.getElementById('rubricTableBody'),

    backToTopBtn: document.getElementById('backToTopBtn')
  };

  /* --------------------------------------------------------------------------
     State Management
     -------------------------------------------------------------------------- */
  const state = {
    currentEra: 'all',
    searchQuery: '',
    activeDilemmaIndex: 0,
    activeQuoteIndex: 0,
    isSpeaking: false,
    speechSynthUtterance: null
  };

  /* --------------------------------------------------------------------------
     1. Theme Management (Cupertino Light / Obsidian Dark)
     -------------------------------------------------------------------------- */
  function initTheme() {
    const savedTheme = localStorage.getItem('steve_jobs_theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'dark'); // Default to obsidian dark

    applyTheme(initialTheme);

    if (elements.themeToggleBtn) {
      elements.themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('steve_jobs_theme', newTheme);
      });
    }

    // Keyboard shortcut 'T'
    window.addEventListener('keydown', (e) => {
      if ((e.key === 't' || e.key === 'T') && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        if (elements.themeToggleBtn) {
          elements.themeToggleBtn.click();
        }
      }
    });
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (elements.themeIconSun && elements.themeIconMoon) {
      if (theme === 'light') {
        elements.themeIconSun.style.display = 'block';
        elements.themeIconMoon.style.display = 'none';
        if (elements.themeToggleBtn) elements.themeToggleBtn.setAttribute('title', 'Switch to Obsidian Dark Mode (Key: T)');
      } else {
        elements.themeIconSun.style.display = 'none';
        elements.themeIconMoon.style.display = 'block';
        if (elements.themeToggleBtn) elements.themeToggleBtn.setAttribute('title', 'Switch to Cupertino Light Mode (Key: T)');
      }
    }
  }

  /* --------------------------------------------------------------------------
     2. Metrics Telemetry Render
     -------------------------------------------------------------------------- */
  function renderMetrics() {
    if (!elements.metricsGrid) return;
    elements.metricsGrid.innerHTML = data.metrics.map(m => `
      <div class="metric-card">
        <div class="metric-value">${m.value}</div>
        <div class="metric-label">${m.label}</div>
        <div class="metric-caption">${m.caption}</div>
      </div>
    `).join('');
  }

  /* --------------------------------------------------------------------------
     3. Milestones Timeline Engine (Filtering, Search & Accordions)
     -------------------------------------------------------------------------- */
  function renderMilestones() {
    if (!elements.timelineContainer) return;

    const filtered = (data.milestones || []).filter(m => {
      const matchesEra = state.currentEra === 'all' || m.era === state.currentEra;
      const query = state.searchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        String(m.title || '').toLowerCase().includes(query) ||
        String(m.summary || '').toLowerCase().includes(query) ||
        String(m.breakthrough || '').toLowerCase().includes(query) ||
        String(m.role || '').toLowerCase().includes(query) ||
        String(m.year || '').includes(query);
      return matchesEra && matchesSearch;
    });

    if (filtered.length === 0) {
      elements.timelineContainer.innerHTML = `
        <div style="text-align: center; padding: 48px; background: var(--bg-surface); border-radius:22px ; border: 1px solid var(--border-glass);">
          <p style="font-size: 1.1rem; color: var(--text-main); margin-bottom: 8px;">No milestones found matching "<strong>${escapeHtml(state.searchQuery)}</strong>"</p>
          <p style="font-size: 0.9rem; color: var(--text-muted);">Try a different term like <em>Macintosh</em>, <em>iPhone</em>, <em>Pixar</em>, or clear filters.</p>
        </div>
      `;
      return;
    }

    elements.timelineContainer.innerHTML = filtered.map((m, index) => `
      <article class="timeline-item" data-id="${m.id}" style="animation: fadeIn 0.3s ease ${index * 0.05}s both;">
        <div class="timeline-node" aria-hidden="true">
          <div class="timeline-node-inner"></div>
        </div>

        <div class="milestone-card">
          <div class="milestone-header">
            <span class="milestone-year-badge">${m.year}</span>
            <span class="milestone-badge">${m.badge}</span>
          </div>

          <h3 class="milestone-title">${m.title}</h3>
          
          <div class="milestone-meta">
            <span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              ${m.location}
            </span>
            <span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              ${m.role}
            </span>
            <span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/></svg>
              ${m.eraLabel}
            </span>
          </div>

          <p class="milestone-summary">${m.summary}</p>

          <button class="milestone-drawer-toggle" aria-expanded="false" aria-controls="drawer-${m.id}" data-target="drawer-${m.id}">
            <span>Inspect Historical Record &amp; Anecdote</span>
            <svg viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
          </button>

          <div class="milestone-drawer" id="drawer-${m.id}" role="region">
            <div class="drawer-grid">
              <div class="drawer-block">
                <div class="drawer-block-title">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  Technological &amp; Business Breakthrough
                </div>
                <div class="drawer-block-text">${m.breakthrough}</div>
              </div>

              <div class="drawer-block">
                <div class="drawer-block-title">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                  Inside Silicon Valley Anecdote
                </div>
                <div class="drawer-block-text">${m.anecdote}</div>
              </div>
            </div>

            <div class="drawer-source-box">
              <a href="${m.sourceUrl}" target="_blank" rel="noopener" class="drawer-source-link">
                <span>Verified Primary Source: ${m.source}</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </article>
    `).join('');

    // Attach drawer toggles
    elements.timelineContainer.querySelectorAll('.milestone-drawer-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const drawer = document.getElementById(targetId);
        const isExpanded = btn.classList.contains('expanded');

        if (isExpanded) {
          btn.classList.remove('expanded');
          btn.setAttribute('aria-expanded', 'false');
          drawer.classList.remove('open');
        } else {
          btn.classList.add('expanded');
          btn.setAttribute('aria-expanded', 'true');
          drawer.classList.add('open');
        }
      });
    });
  }

  function initTimelineControls() {
    // Era Filter Buttons
    if (elements.eraFilterContainer) {
      elements.eraFilterContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.era-btn');
        if (!btn) return;

        elements.eraFilterContainer.querySelectorAll('.era-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.currentEra = btn.getAttribute('data-era');
        renderMilestones();
      });
    }

    // Live Search with Debounce
    if (elements.timelineSearch) {
      let timeout = null;
      elements.timelineSearch.addEventListener('input', (e) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          state.searchQuery = e.target.value;
          renderMilestones();
        }, 150);
      });

      // Keyboard shortcut '/' to search
      window.addEventListener('keydown', (e) => {
        if (e.key === '/' && document.activeElement !== elements.timelineSearch) {
          e.preventDefault();
          elements.timelineSearch.focus();
        }
      });
    }
  }

  /* --------------------------------------------------------------------------
     4. Companies & Ventures Engine (Click-to-Modal Inspector)
     -------------------------------------------------------------------------- */
  function renderVentures() {
    if (!elements.venturesGrid) return;

    elements.venturesGrid.innerHTML = data.ventures.map(v => {
      let logoMarkup = '';
      if (v.id === 'venture-apple') {
        logoMarkup = `<img src="assets/apple-logo.svg" alt="Apple Logo" style="width: 32px; height: 32px;">`;
      } else if (v.id === 'venture-next') {
        logoMarkup = `<img src="assets/next-logo.svg" alt="NeXT Logo" style="width: 38px; height: 38px;">`;
      } else if (v.id === 'venture-pixar') {
        logoMarkup = `<img src="assets/pixar-logo.svg" alt="Pixar Logo" style="width: 48px; height: auto;">`;
      } else {
        logoMarkup = `<svg viewBox="0 0 24 24" style="width: 32px; height: 32px; fill: var(--color-primary);"><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"/></svg>`;
      }

      return `
        <article class="venture-card" data-venture-id="${v.id}" tabindex="0" role="button" aria-haspopup="dialog" aria-label="Inspect ${v.name}">
          <div class="venture-card-glow" style="background: ${v.color};"></div>

          <div>
            <div class="venture-header">
              <div class="venture-logo-box">
                ${logoMarkup}
              </div>
              <span class="venture-category-tag">${v.category}</span>
            </div>

            <h3 class="venture-name">${v.name}</h3>
            <div class="venture-period-role">${v.role} • ${v.period}</div>
            <p class="venture-connection">${v.connection}</p>

            <ul class="venture-breakthroughs-list">
              ${v.breakthroughs.slice(0, 3).map(b => `<li>${b}</li>`).join('')}
            </ul>
          </div>

          <div class="venture-footer">
            <span class="venture-status">${v.status}</span>
            <span class="venture-inspect-cta">
              <span>Deep Dive</span>
              <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
            </span>
          </div>
        </article>
      `;
    }).join('');

    // Attach card click handlers for Modal Dialog
    elements.venturesGrid.querySelectorAll('.venture-card').forEach(card => {
      const handleOpen = () => {
        const ventureId = card.getAttribute('data-venture-id');
        openVentureModal(ventureId);
      };

      card.addEventListener('click', handleOpen);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleOpen();
        }
      });
    });
  }

  function openVentureModal(ventureId) {
    const venture = data.ventures.find(v => v.id === ventureId);
    if (!venture || !elements.ventureModal) return;

    elements.modalVentureCategory.textContent = venture.category;
    elements.modalVentureTitle.textContent = venture.name;
    elements.modalVentureRole.textContent = `${venture.role} • ${venture.period}`;
    elements.modalVentureConnection.textContent = venture.connection;

    // Specs table
    elements.modalSpecsTable.innerHTML = Object.entries(venture.specs).map(([key, val]) => `
      <tr>
        <th>${formatCamelCase(key)}</th>
        <td>${val}</td>
      </tr>
    `).join('');

    // Breakthroughs list
    elements.modalBreakthroughsList.innerHTML = venture.breakthroughs.map(b => `
      <li>${b}</li>
    `).join('');

    // Official Portal Link
    elements.modalOfficialPortalBtn.setAttribute('href', venture.officialUrl);
    elements.modalOfficialPortalBtn.setAttribute('aria-label', `Visit ${venture.name} Official Portal`);

    elements.ventureModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeVentureModal() {
    if (!elements.ventureModal) return;
    elements.ventureModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  /* --------------------------------------------------------------------------
     5. Bonus: Company Connection / Synergy Map
     -------------------------------------------------------------------------- */
  function renderSynergy() {
    if (!elements.synergyNodesGrid || !elements.synergyConnectionsList) return;

    elements.synergyNodesGrid.innerHTML = data.synergy.nodes.map(node => `
      <div class="synergy-node-card">
        <h4 class="synergy-node-name">${node.label}</h4>
        <p class="synergy-node-desc">${node.desc}</p>
      </div>
    `).join('');

    elements.synergyConnectionsList.innerHTML = data.synergy.connections.map(c => `
      <div class="synergy-item">
        <span class="synergy-arrow-pill">${c.from} ➔ ${c.to}</span>
        <div class="synergy-text-block">
          <div class="synergy-title">${c.synergy}</div>
          <div class="synergy-detail">${c.detail}</div>
        </div>
      </div>
    `).join('');
  }

  /* --------------------------------------------------------------------------
     6. "Think Different" Innovation Decision Lab
     -------------------------------------------------------------------------- */
  function renderDecisionLab() {
    if (!elements.dilemmaTabs || !elements.dilemmaBody || !elements.dilemmaOptionsGrid) return;

    // Tabs
    elements.dilemmaTabs.innerHTML = data.dilemmas.map((d, index) => `
      <button class="dilemma-tab-btn ${index === state.activeDilemmaIndex ? 'active' : ''}" data-index="${index}">
        ${d.year}: ${d.title.split(':')[0]}
      </button>
    `).join('');

    // Attach Tab Clicks
    elements.dilemmaTabs.querySelectorAll('.dilemma-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const index = parseInt(btn.getAttribute('data-index'), 10);
        state.activeDilemmaIndex = index;
        renderDecisionLab();
      });
    });

    const activeDilemma = data.dilemmas[state.activeDilemmaIndex];

    // Body
    elements.dilemmaBody.innerHTML = `
      <div class="dilemma-year-pill">Historical Challenge • Year ${activeDilemma.year}</div>
      <h3 class="dilemma-title">${activeDilemma.title}</h3>
      <p class="dilemma-context">${activeDilemma.context}</p>
    `;

    // Comparison Options
    elements.dilemmaOptionsGrid.innerHTML = `
      <div class="option-card conventional">
        <div class="option-header">
          <span class="option-badge">Standard Industry Consensus</span>
          <h4 class="option-title">${activeDilemma.conventionalChoice.title}</h4>
          <p class="option-desc">${activeDilemma.conventionalChoice.desc}</p>
        </div>
        <div class="option-result">
          <strong>Outcome:</strong> ${activeDilemma.conventionalChoice.result}
        </div>
      </div>

      <div class="option-card jobs-choice">
        <div class="option-header">
          <span class="option-badge">Steve Jobs's Radical Decision</span>
          <h4 class="option-title">${activeDilemma.jobsChoice.title}</h4>
          <p class="option-desc">${activeDilemma.jobsChoice.desc}</p>
        </div>
        <div class="option-result">
          <strong>Historical Triumph:</strong> ${activeDilemma.jobsChoice.result}
        </div>
      </div>
    `;
  }

  /* --------------------------------------------------------------------------
     7. Impact & Takeaways Engine
     -------------------------------------------------------------------------- */
  function renderImpactAndTakeaways() {
    if (elements.impactCardsStack) {
      elements.impactCardsStack.innerHTML = data.achievements.map(a => `
        <div class="impact-card">
          <div class="impact-card-top">
            <h4 class="impact-title">${a.title}</h4>
            <span class="impact-metric-pill">${a.metric}</span>
          </div>
          <p class="impact-desc">${a.description}</p>
          <div class="impact-consequence">➔ Global Impact: ${a.impact}</div>
        </div>
      `).join('');
    }

    if (elements.takeawaysCardsStack) {
      elements.takeawaysCardsStack.innerHTML = data.takeaways.map(t => `
        <div class="takeaway-card">
          <h4 class="takeaway-principle">${t.principle}</h4>
          <div class="takeaway-quote-box">"${t.quote}"</div>
          <div class="takeaway-application">
            <strong>Application for Builders:</strong> ${t.application}
          </div>
        </div>
      `).join('');
    }
  }

  /* --------------------------------------------------------------------------
     8. Quote Randomizer & Web Speech API Soundbite Player
     -------------------------------------------------------------------------- */
  function initQuotesAndSpeech() {
    // Hero Soundbite Card Trigger
    if (elements.playQuoteBtn) {
      elements.playQuoteBtn.addEventListener('click', () => {
        toggleSpeech(data.profile.signatureQuote);
      });
    }

    // Quote Randomizer
    if (elements.nextQuoteBtn) {
      elements.nextQuoteBtn.addEventListener('click', () => {
        state.activeQuoteIndex = (state.activeQuoteIndex + 1) % data.quotes.length;
        displayActiveQuote();
      });
    }

    // Speak Randomizer Quote
    if (elements.speakQuoteBtn) {
      elements.speakQuoteBtn.addEventListener('click', () => {
        const q = data.quotes[state.activeQuoteIndex];
        toggleSpeech(q.text);
      });
    }
  }

  function displayActiveQuote() {
    const q = data.quotes[state.activeQuoteIndex];
    if (elements.quoteDisplayText) elements.quoteDisplayText.textContent = `"${q.text}"`;
    if (elements.quoteDisplayContext) elements.quoteDisplayContext.textContent = `${q.context} • ${q.topic}`;
  }

  function toggleSpeech(text) {
    if (!('speechSynthesis' in window)) {
      alert('Speech synthesis is not supported on this browser.');
      return;
    }

    if (state.isSpeaking) {
      window.speechSynthesis.cancel();
      stopSpeechUI();
    } else {
      window.speechSynthesis.cancel(); // Stop any pending speech
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95; // Steady, deliberate keynote pace
      utterance.pitch = 0.95;

      // Select natural English voice if available
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Daniel') || v.name.includes('Samantha')));
      if (preferredVoice) utterance.voice = preferredVoice;

      utterance.onstart = () => {
        startSpeechUI();
      };

      utterance.onend = () => {
        stopSpeechUI();
      };

      utterance.onerror = () => {
        stopSpeechUI();
      };

      state.speechSynthUtterance = utterance;
      window.speechSynthesis.speak(utterance);
    }
  }

  function startSpeechUI() {
    state.isSpeaking = true;
    if (elements.playIcon) elements.playIcon.style.display = 'none';
    if (elements.pauseIcon) elements.pauseIcon.style.display = 'block';
    if (elements.soundWaves) elements.soundWaves.classList.add('playing');
  }

  function stopSpeechUI() {
    state.isSpeaking = false;
    if (elements.playIcon) elements.playIcon.style.display = 'block';
    if (elements.pauseIcon) elements.pauseIcon.style.display = 'none';
    if (elements.soundWaves) elements.soundWaves.classList.remove('playing');
  }

  /* --------------------------------------------------------------------------
     9. Academic Sources & Verified Bibliography Render
     -------------------------------------------------------------------------- */
  function renderSources() {
    if (!elements.sourcesGrid) return;

    elements.sourcesGrid.innerHTML = data.sources.map(s => `
      <div class="source-card">
        <div>
          <span class="source-type-pill">${s.type}</span>
          <h4 class="source-title">${s.title}</h4>
          <div class="source-author-pub">${s.author} (${s.year}) • ${s.publisher}</div>
          <p class="source-notes">${s.notes}</p>
        </div>
        <div style="margin-top: 14px;">
          <a href="${s.url}" target="_blank" rel="noopener" class="source-external-link">
            <span>Primary Reference Portal</span>
            <svg viewBox="0 0 24 24"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
          </a>
        </div>
      </div>
    `).join('');
  }

  /* --------------------------------------------------------------------------
     10. Academic Rubric Evaluator Modal (100 Marks Breakdown)
     -------------------------------------------------------------------------- */
  function initRubricModal() {
    if (elements.rubricTableBody) {
      elements.rubricTableBody.innerHTML = data.rubric.map(r => `
        <tr>
          <td><strong>${r.criterion}</strong></td>
          <td style="font-family: var(--font-mono); font-weight: 700; color: var(--color-primary);">${r.marks}</td>
          <td>${r.summary}</td>
        </tr>
      `).join('');
    }

    if (elements.openRubricBtn && elements.rubricModal) {
      elements.openRubricBtn.addEventListener('click', () => {
        elements.rubricModal.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    }

    if (elements.closeRubricModalBtn && elements.rubricModal) {
      elements.closeRubricModalBtn.addEventListener('click', () => {
        elements.rubricModal.classList.remove('open');
        document.body.style.overflow = '';
      });
    }
  }

  /* --------------------------------------------------------------------------
     11. Global Modal Backdrop & Keyboard Event Handlers
     -------------------------------------------------------------------------- */
  function initModalDismissals() {
    // Close button for venture modal
    if (elements.closeVentureModalBtn) {
      elements.closeVentureModalBtn.addEventListener('click', closeVentureModal);
    }

    // Dismiss on backdrop click
    [elements.ventureModal, elements.rubricModal].forEach(modal => {
      if (!modal) return;
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('open');
          document.body.style.overflow = '';
          if (state.isSpeaking) window.speechSynthesis.cancel();
        }
      });
    });

    // Dismiss on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (elements.ventureModal) elements.ventureModal.classList.remove('open');
        if (elements.rubricModal) elements.rubricModal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  /* --------------------------------------------------------------------------
     12. Scroll Progress & Scroll-Spy Active Nav
     -------------------------------------------------------------------------- */
  function initScrollTracking() {
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
      // Reading Progress Bar
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      if (elements.progressBar) {
        elements.progressBar.style.width = scrolled + '%';
        elements.progressBar.setAttribute('aria-valuenow', Math.round(scrolled));
      }

      // Scroll Spy
      let currentSection = '';
      const scrollPos = window.scrollY + 140;

      sections.forEach(sec => {
        const top = sec.offsetTop;
        const h = sec.offsetHeight;
        if (scrollPos >= top && scrollPos < top + h) {
          currentSection = sec.getAttribute('id');
        }
      });

      elements.navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    }, { passive: true });

    // Back to Top Button
    if (elements.backToTopBtn) {
      elements.backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  /* --------------------------------------------------------------------------
     Utility Helpers
     -------------------------------------------------------------------------- */
  function formatCamelCase(str) {
    return str
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, s => s.toUpperCase());
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  /* --------------------------------------------------------------------------
     Application Initialization
     -------------------------------------------------------------------------- */
  function initializeApp() {
    initTheme();
    renderMetrics();
    renderMilestones();
    initTimelineControls();
    renderVentures();
    renderSynergy();
    renderDecisionLab();
    renderImpactAndTakeaways();
    initQuotesAndSpeech();
    renderSources();
    initRubricModal();
    initModalDismissals();
    initScrollTracking();

    console.log('Steve Jobs Interactive Showcase successfully initialized (100 Marks Evaluation Ready).');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
  } else {
    initializeApp();
  }

})();
