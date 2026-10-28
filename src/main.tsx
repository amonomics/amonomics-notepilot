:root {
  color-scheme: dark;
  --bg: #051620;
  --bg-2: #0c1f2f;
  --panel: rgba(10, 20, 31, 0.78);
  --panel-border: rgba(162, 193, 255, 0.14);
  --primary: #7bdcff;
  --secondary: #8fa8ff;
  --accent: #72f3c1;
  --text: #ebf5ff;
  --muted: #9eb9d2;
  --shadow: rgba(2, 9, 17, 0.45);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Inter, 'Segoe UI', sans-serif;
  background:
    radial-gradient(circle at top left, rgba(96, 135, 255, 0.14), transparent 18%),
    radial-gradient(circle at bottom right, rgba(92, 225, 204, 0.1), transparent 20%),
    linear-gradient(180deg, var(--bg) 0%, #071b2d 100%);
  color: var(--text);
}

img {
  max-width: 100%;
  display: block;
}

button,
a {
  font: inherit;
}

button {
  cursor: pointer;
}

.page-shell {
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px 24px 64px;
}

.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 16px 0 20px;
  border-bottom: 1px solid rgba(180, 204, 232, 0.12);
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: #031822;
  font-weight: 800;
}

.brand-name {
  font-size: 1.1rem;
  letter-spacing: -0.02em;
  font-weight: 700;
}

.top-nav {
  display: flex;
  align-items: center;
  gap: 22px;
}

.top-nav a {
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s ease;
}

.top-nav a:hover {
  color: var(--text);
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: 12px 18px;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.button:hover {
  transform: translateY(-1px);
}

.button-primary {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: #041c2d;
  box-shadow: 0 12px 28px rgba(106, 177, 255, 0.25);
}

.button-secondary {
  background: rgba(143, 168, 255, 0.1);
  border: 1px solid rgba(143, 168, 255, 0.18);
  color: var(--text);
}

.hero {
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  gap: 42px;
  padding: 60px 0 30px;
  align-items: center;
}

.eyebrow {
  font-size: 0.74rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #9fe8ff;
  margin-bottom: 14px;
}

.hero-copy h1 {
  margin: 0;
  font-size: clamp(2.7rem, 4vw, 4.5rem);
  line-height: 1.02;
  letter-spacing: -0.06em;
}

.hero-copy p {
  color: var(--muted);
  max-width: 680px;
  font-size: 1.12rem;
  line-height: 1.7;
  margin: 22px 0 0;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
}

.social-proof {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 26px;
}

.social-proof > div {
  flex: 1 1 220px;
  background: var(--panel);
  border: 1px solid var(--panel-border);
  border-radius: 16px;
  padding: 16px 18px;
  box-shadow: 0 18px 30px var(--shadow);
}

.social-proof strong {
  display: block;
  margin-bottom: 4px;
}

.social-proof span {
  color: var(--muted);
  font-size: 0.9rem;
}

.hero-card {
  background: rgba(8, 19, 30, 0.88);
  border: 1px solid var(--panel-border);
  border-radius: 24px;
  padding: 22px;
  box-shadow: 0 24px 40px rgba(2, 10, 18, 0.5);
}

.dashboard-label {
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #9dd7ff;
  margin-bottom: 16px;
}

.stat-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.stat-card {
  background: rgba(18, 35, 51, 0.9);
  border: 1px solid rgba(151, 180, 225, 0.1);
  border-radius: 16px;
  padding: 16px;
}

.stat-card span {
  display: block;
  color: var(--muted);
  font-size: 0.75rem;
}

.stat-card strong {
  display: block;
  font-size: 2rem;
  margin: 8px 0 4px;
  letter-spacing: -0.05em;
}

.stat-card em {
  font-style: normal;
  color: #8beac2;
  font-size: 0.82rem;
}

.mini-panel {
  margin-top: 18px;
  background: rgba(19, 35, 47, 0.9);
  border: 1px solid rgba(149, 178, 233, 0.12);
  border-radius: 16px;
  padding: 16px 18px;
}

.mini-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 12px;
  font-weight: 600;
}

.mini-head button {
  background: rgba(127, 165, 255, 0.08);
  border: 1px solid rgba(127, 165, 255, 0.12);
  color: var(--text);
  border-radius: 10px;
  padding: 6px 10px;
}

.mini-panel ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: var(--muted);
}

.section {
  padding-top: 54px;
}

.section-heading {
  margin-bottom: 24px;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 3rem);
  letter-spacing: -0.05em;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.feature-card,
.value-card,
.tier-card {
  background: var(--panel);
  border: 1px solid var(--panel-border);
  border-radius: 22px;
  padding: 22px;
  box-shadow: 0 16px 24px rgba(2, 10, 18, 0.28);
}

.feature-icon {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  margin-bottom: 18px;
  background: rgba(122, 220, 255, 0.12);
  color: var(--primary);
  font-size: 1.5rem;
  font-weight: 700;
}

.feature-card h3,
.value-card h3 {
  margin: 0 0 10px;
  font-size: 1.2rem;
}

.feature-card p,
.value-card p,
.tier-card p,
.support-intro {
  color: var(--muted);
  line-height: 1.7;
}

.chip-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.chip {
  display: inline-flex;
  align-items: center;
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(145, 177, 255, 0.08);
  border: 1px solid rgba(145, 177, 255, 0.12);
  color: #e6f0ff;
}

.supporting-panel {
  background: rgba(10, 22, 34, 0.7);
  border: 1px solid rgba(164, 191, 232, 0.08);
  border-radius: 26px;
  padding: 24px 24px 8px;
}

.narrow {
  max-width: 600px;
}

.value-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.roadmap-list {
  display: grid;
  gap: 14px;
}

.roadmap-item {
  display: flex;
  align-items: center;
  gap: 16px;
  background: rgba(9, 19, 29, 0.72);
  border: 1px solid rgba(152, 170, 206, 0.1);
  border-radius: 18px;
  padding: 16px 18px;
}

.roadmap-index {
  width: 54px;
  height: 54px;
  border-radius: 14px;
  background: rgba(95, 150, 255, 0.1);
  border: 1px solid rgba(95, 150, 255, 0.16);
  display: grid;
  place-items: center;
  color: var(--primary);
  font-weight: 700;
}

.roadmap-item p {
  margin: 0;
  color: #dfeeff;
  font-size: 1rem;
}

.support-section {
  padding-bottom: 30px;
}

.tier-grid {
  margin-top: 26px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.tier-card {
  display: flex;
  flex-direction: column;
}

.tier-name {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.tier-price {
  color: var(--primary);
  font-weight: 700;
  margin-bottom: 8px;
}

.tier-card ul {
  margin: 16px 0 0;
  padding-left: 18px;
  color: var(--muted);
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.cta-banner {
  margin-top: 26px;
  background: linear-gradient(135deg, rgba(122, 225, 255, 0.12), rgba(122, 178, 255, 0.12));
  border: 1px solid rgba(155, 194, 255, 0.18);
  border-radius: 20px;
  padding: 22px 24px;
  display: flex;
  justify-content: space-between;
  gap: 18px;
  align-items: center;
}

.cta-banner h3 {
  margin: 0;
  font-size: clamp(1.3rem, 2vw, 2rem);
  letter-spacing: -0.04em;
}

@media (max-width: 980px) {
  .hero,
  .feature-grid,
  .value-grid,
  .tier-grid {
    grid-template-columns: 1fr;
  }

  .site-header {
    flex-wrap: wrap;
  }

  .top-nav {
    order: 3;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }
}

@media (max-width: 640px) {
  .page-shell {
    padding-left: 16px;
    padding-right: 16px;
  }

  .site-header {
    align-items: flex-start;
  }

  .cta-row,
  .cta-banner {
    flex-direction: column;
    align-items: stretch;
  }

  .hero-copy h1 {
    font-size: 2.5rem;
  }

  .stat-grid {
    grid-template-columns: 1fr;
  }
}
