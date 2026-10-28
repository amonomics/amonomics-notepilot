import React from 'react'

type Feature = {
  title: string
  description: string
}

type Tier = {
  name: string
  price: string
  description: string
  perks: string[]
}

const features: Feature[] = [
  {
    title: 'AI meeting notes',
    description: 'Turn calls, transcripts, conversations, and team updates into clean summaries with key decisions and action points.'
  },
  {
    title: 'Action extraction',
    description: 'Automatically identify owners, due dates, blockers, risks, and follow-up tasks without manual cleanup.'
  },
  {
    title: 'Memory for work',
    description: 'Build a searchable archive of decisions and business context so important knowledge is never lost again.'
  },
  {
    title: 'Team workspaces',
    description: 'Give teams a shared, organized view of notes, decisions, and execution context across projects.'
  },
  {
    title: 'Enterprise readiness',
    description: 'Support governance, access control, policy-based workflows, and future-ready business deployment needs.'
  },
  {
    title: 'Developer support path',
    description: 'Fund continuous product development through an honest support model for creators, teams, and early adopters.'
  }
]

const userSegments = [
  'Founders and operators',
  'Consultants and researchers',
  'Product and engineering teams',
  'Sales and customer success',
  'Leadership and executive teams',
  'Growing businesses and startups'
]

const roadmap = [
  'Meeting capture and summary workflows',
  'AI-generated action items and risk detection',
  'Searchable knowledge and team memory',
  'CRM, project, and productivity integrations',
  'Workspace governance and permissions',
  'Enterprise audit trails and deployment controls'
]

const supportTiers: Tier[] = [
  {
    name: 'Coffee supporter',
    price: '$3–$10',
    description: 'Keep the project moving and help fund the early build.',
    perks: ['Project updates', 'Community support', 'Recognition']
  },
  {
    name: 'Developer supporter',
    price: '$15–$30',
    description: 'Fund product development for creators, teams, and early adopters.',
    perks: ['Roadmap access', 'Priority feedback', 'Early feature previews']
  },
  {
    name: 'Early access sponsor',
    price: '$50–$100',
    description: 'Support the next phase of team workflows and enterprise capabilities.',
    perks: ['Beta access', 'Sponsor updates', 'Priority requests']
  },
  {
    name: 'Team sponsor',
    price: '$200+',
    description: 'Support the build of a fuller, more resilient AI productivity platform for organizations.',
    perks: ['Business support', 'Roadmap visibility', 'Growth collaboration']
  }
]

function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="brand-wrap">
          <div className="brand-mark">A</div>
          <div className="brand-name">amonomics notepilot</div>
        </div>

        <nav className="top-nav" aria-label="Main navigation">
          <a href="#features">Features</a>
          <a href="#use-cases">Use cases</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#support">Support</a>
        </nav>

        <a className="button button-primary" href="#support">
          Support the project
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow">AI note-taking, meeting intelligence, and decision memory</div>
            <h1>Turn conversations into action, structure, and memory.</h1>
            <p>
              amonomics notepilot helps individuals and teams capture what matters from meetings,
              customer conversations, product reviews, and daily work — then turn those moments into
              searchable knowledge and follow-up execution.
            </p>

            <div className="cta-row">
              <a className="button button-primary" href="#support">Support the project</a>
              <a
                className="button button-secondary"
                href="https://github.com/amonomics/amonomics-notepilot"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub
              </a>
            </div>

            <div className="social-proof">
              <div>
                <strong>Personal + team use</strong>
                <span>Built for daily work and business memory</span>
              </div>
              <div>
                <strong>Enterprise-ready pathway</strong>
                <span>Security, governance, and scaling in mind</span>
              </div>
            </div>
          </div>

          <div className="hero-card" aria-label="Dashboard preview">
            <div className="dashboard-label">Executive note dashboard</div>
            <div className="stat-grid">
              <div className="stat-card">
                <span>Meetings captured</span>
                <strong>148</strong>
                <em>+32% QoQ</em>
              </div>
              <div className="stat-card">
                <span>Action items</span>
                <strong>422</strong>
                <em>+19% this week</em>
              </div>
              <div className="stat-card">
                <span>Due today</span>
                <strong>17</strong>
                <em>4 need approval</em>
              </div>
              <div className="stat-card">
                <span>Policy flags</span>
                <strong>3</strong>
                <em>2 resolved</em>
              </div>
            </div>

            <div className="mini-panel">
              <div className="mini-head">
                <span>Priority checklist</span>
                <button type="button">View all</button>
              </div>
              <ul>
                <li>Finalize Q3 executive brief</li>
                <li>Customer security review sign-off</li>
                <li>Regional rollout notes approved</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="features">
          <div className="section-heading">
            <div className="eyebrow">Why it matters</div>
            <h2>Built for modern work and business memory.</h2>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article key={feature.title} className="feature-card">
                <div className="feature-icon">•</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="use-cases">
          <div className="section-heading">
            <div className="eyebrow">Who it helps</div>
            <h2>For people and organizations that cannot afford to lose context.</h2>
          </div>

          <div className="chip-list" aria-label="Use cases">
            {userSegments.map((segment) => (
              <span key={segment} className="chip">
                {segment}
              </span>
            ))}
          </div>
        </section>

        <section className="section supporting-panel">
          <div className="section-heading narrow">
            <div className="eyebrow">Product value</div>
            <h2>Context is the real operating asset.</h2>
          </div>

          <div className="value-grid">
            <div className="value-card">
              <h3>For individuals</h3>
              <p>
                Keep your thoughts, tasks, and outcomes in one place without retyping everything manually.
              </p>
            </div>
            <div className="value-card">
              <h3>For teams</h3>
              <p>
                Turn meetings into shared accountability, clearer decisions, and a reliable knowledge trail.
              </p>
            </div>
            <div className="value-card">
              <h3>For business</h3>
              <p>
                Scale the same idea from personal productivity into operational memory, governance, and execution.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="roadmap">
          <div className="section-heading">
            <div className="eyebrow">Roadmap</div>
            <h2>What is next for amonomics notepilot.</h2>
          </div>

          <div className="roadmap-list">
            {roadmap.map((step, index) => (
              <div key={step} className="roadmap-item">
                <div className="roadmap-index">0{index + 1}</div>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section support-section" id="support">
          <div className="section-heading">
            <div className="eyebrow">Support the build</div>
            <h2>Help fund the next phase of AI note-taking and work memory.</h2>
          </div>

          <p className="support-intro">
            This project is being built for both everyday users and teams that need better context, clearer
            decisions, and higher-quality follow-through. Your support helps fund product design, API work,
            integrations, documentation, and the roadmap ahead.
          </p>

          <div className="tier-grid">
            {supportTiers.map((tier) => (
              <article key={tier.name} className="tier-card">
                <div className="tier-name">{tier.name}</div>
                <div className="tier-price">{tier.price}</div>
                <p>{tier.description}</p>
                <ul>
                  {tier.perks.map((perk) => (
                    <li key={perk}>{perk}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="cta-banner">
            <div>
              <div className="eyebrow">Support this project</div>
              <h3>Help us build a smarter, more useful AI note-taking platform.</h3>
            </div>
            <a className="button button-primary" href="https://buymeacoffee.com" target="_blank" rel="noreferrer">
              Support the project
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
