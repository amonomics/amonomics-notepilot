import { useMemo, useState } from 'react'

type Metric = {
  label: string
  value: string
  delta: string
  tone: 'positive' | 'neutral' | 'alert'
}

type Meeting = {
  title: string
  team: string
  time: string
  summary: string
  confidence: number
  actionItems: number
  status: 'Synced' | 'Pending review' | 'Escalated'
}

type TaskItem = {
  title: string
  owner: string
  due: string
  status: 'On track' | 'At risk' | 'Completed'
}

const metrics: Metric[] = [
  { label: 'Live meetings captured', value: '148', delta: '+32% QoQ', tone: 'positive' },
  { label: 'Action items extracted', value: '422', delta: '+19% this week', tone: 'positive' },
  { label: 'Follow-ups due today', value: '17', delta: '4 need approval', tone: 'neutral' },
  { label: 'Policy flags', value: '3', delta: '2 resolved', tone: 'alert' }
]

const meetings: Meeting[] = [
  {
    title: 'Q3 Revenue Planning',
    team: 'Finance / Sales',
    time: '09:30 AM · Today',
    summary: 'Budget alignment approved for enterprise upsell motion and expansion into EMEA.',
    confidence: 96,
    actionItems: 5,
    status: 'Synced'
  },
  {
    title: 'Customer Retention Review',
    team: 'Success / CX',
    time: 'Yesterday 4:15 PM',
    summary: 'Key renewal blockers identified for three enterprise accounts and assigned owners.',
    confidence: 92,
    actionItems: 4,
    status: 'Pending review'
  },
  {
    title: 'Product Launch Readiness',
    team: 'Product / GTM',
    time: 'Mon 1:00 PM',
    summary: 'Launch risks narrowed to analytics milestone and customer training dependencies.',
    confidence: 89,
    actionItems: 8,
    status: 'Escalated'
  }
]

const tasks: TaskItem[] = [
  { title: 'Finalize Q3 executive brief', owner: 'Maya Chen', due: 'Today', status: 'On track' },
  { title: 'Customer security review sign-off', owner: 'Luis Ortega', due: 'Tomorrow', status: 'At risk' },
  { title: 'Regional rollout notes approved', owner: 'Nina Shah', due: 'Completed', status: 'Completed' }
]

const knowledgeAlerts = [
  'AI detected 6 cross-functional dependencies across product, sales, and finance.',
  'Customer risk score increased for Northwind Labs after two missed milestones.',
  'Board-ready summary exported to leadership workspace with compliance tags applied.',
  'New action item assigned to sales ops: update renewal playbook references.'
]

const integrations = [
  'Microsoft 365',
  'Google Workspace',
  'Slack',
  'Jira',
  'Salesforce',
  'Notion',
  'HubSpot',
  'Zoom',
  'Teams',
  'Asana'
]

const noteDraft = `Customer summary:
- Northwind Labs is at risk of churn due to delayed implementation milestones.
- Decision made to move executive check-in to Friday.
- Open actions: stakeholder alignment, rollout communication, and security sign-off.`

export default function App() {
  const [selectedTab, setSelectedTab] = useState('Overview')
  const tabs = ['Overview', 'Meetings', 'Workspaces', 'Action Items', 'Knowledge Base', 'Compliance', 'Integrations']

  const activeSummary = useMemo(() => {
    switch (selectedTab) {
      case 'Meetings':
        return 'Live transcripts are being transformed into decision logs, action items, and stakeholder follow-ups.'
      case 'Workspaces':
        return 'Cross-team workspaces are synchronized with compliance rules, retention settings, and shared notes.'
      case 'Action Items':
        return 'Priority actions are auto-classified and assigned to owners based on meeting context and business impact.'
      case 'Knowledge Base':
        return 'Institutional knowledge is indexed semantically for rapid retrieval across customer, product, and leadership context.'
      case 'Compliance':
        return 'Sensitive note excerpts are redacted and logged with retention policy tracking for audit readiness.'
      case 'Integrations':
        return 'Connected systems provide a unified view of customer health, product signals, and operational execution.'
      default:
        return 'Executive note intelligence is tracking meetings, commitments, and risks across the business in real time.'
    }
  }, [selectedTab])

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-wrap">
          <div className="brand-mark">A</div>
          <div>
            <div className="eyebrow">Enterprise Suite</div>
            <h1>amonomics notepilot</h1>
          </div>
        </div>

        <nav className="nav" aria-label="Main navigation">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`nav-item ${selectedTab === tab ? 'active' : ''}`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>

        <div className="workspace-card">
          <div className="mini-badge">Secure Workspace</div>
          <strong>Northwind Global</strong>
          <span>RBAC enabled · EU residency</span>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <div className="eyebrow muted">Operations Intelligence</div>
            <h2>Executive note dashboard</h2>
          </div>

          <div className="topbar-actions">
            <button type="button" className="ghost-button">Export brief</button>
            <button type="button" className="primary-button">Capture meeting</button>
          </div>
        </header>

        <section className="summary-banner">
          <div>
            <div className="eyebrow muted">Current focus</div>
            <h3>{selectedTab}</h3>
          </div>
          <p>{activeSummary}</p>
        </section>

        <section className="metric-grid">
          {metrics.map((metric) => (
            <article className="metric-card" key={metric.label}>
              <div className="metric-header">
                <span>{metric.label}</span>
                <span className={`delta ${metric.tone}`}>{metric.delta}</span>
              </div>
              <div className="metric-value">{metric.value}</div>
            </article>
          ))}
        </section>

        <section className="content-grid">
          <article className="panel wide">
            <div className="panel-header">
              <div>
                <div className="eyebrow muted">Meeting intelligence</div>
                <h3>Live note stream</h3>
              </div>
              <button type="button" className="ghost-button small">View all</button>
            </div>

            <div className="feed-list">
              {meetings.map((meeting) => (
                <div className="feed-item" key={meeting.title}>
                  <div className="feed-topline">
                    <strong>{meeting.title}</strong>
                    <span className={`status status-${meeting.status.toLowerCase().replace(/\s+/g, '-')}`}>
                      {meeting.status}
                    </span>
                  </div>
                  <div className="meta-row">
                    <span>{meeting.team}</span>
                    <span>{meeting.time}</span>
                  </div>
                  <p>{meeting.summary}</p>
                  <div className="feed-actions">
                    <span>Confidence {meeting.confidence}%</span>
                    <span>{meeting.actionItems} action items</span>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="panel">
            <div className="panel-header">
              <div>
                <div className="eyebrow muted">AI signals</div>
                <h3>Knowledge alerts</h3>
              </div>
            </div>

            <ul className="signal-list">
              {knowledgeAlerts.map((signal) => (
                <li key={signal}>{signal}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="bottom-grid">
          <article className="panel">
            <div className="panel-header">
              <div>
                <div className="eyebrow muted">Execution</div>
                <h3>Priority checklist</h3>
              </div>
            </div>

            <div className="checklist">
              {tasks.map((item) => (
                <div className="check-row" key={item.title}>
                  <div>
                    <strong>{item.title}</strong>
                    <div className="subline">
                      {item.owner} · {item.due}
                    </div>
                  </div>
                  <span className={`status status-${item.status.toLowerCase().replace(/\s+/g, '-')}`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </article>

          <article className="panel note-panel">
            <div className="panel-header">
              <div>
                <div className="eyebrow muted">Draft note</div>
                <h3>AI-generated summary</h3>
              </div>
              <button type="button" className="ghost-button small">Save</button>
            </div>

            <textarea value={noteDraft} readOnly aria-label="AI generated note preview" />
          </article>
        </section>

        <section className="bottom-grid lower-grid">
          <article className="panel">
            <div className="panel-header">
              <div>
                <div className="eyebrow muted">Enterprise stack</div>
                <h3>Connected systems</h3>
              </div>
            </div>

            <div className="integration-list">
              {integrations.map((integration) => (
                <span key={integration} className="pill">
                  {integration}
                </span>
              ))}
            </div>
          </article>

          <article className="panel">
            <div className="panel-header">
              <div>
                <div className="eyebrow muted">Leadership</div>
                <h3>Decision confidence</h3>
              </div>
            </div>

            <div className="confidence-box">
              <div className="confidence-ring">
                <span>91%</span>
              </div>
              <p>Organizational alignment is strong. Two key risks remain: onboarding readiness and regional rollout timing.</p>
            </div>
          </article>
        </section>
      </main>
    </div>
  )
}
