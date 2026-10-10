
import { Routes, Route, Link } from 'react-router-dom'
import {
  ArrowRight,
  Wallet,
  CalendarDays,
  Target,
  BookOpen,
  ChartNoAxesColumnIncreasing,
  Leaf,
  Settings2,
  Image as ImageIcon,
} from 'lucide-react'

import Header from './components/Header.jsx'
import './App.css'

const highlights = [
  {
    icon: Wallet,
    title: "Know What's Available to Spend",
    description: 'See what you can safely do today.',
  },
  {
    icon: CalendarDays,
    title: "Prepare for What's Next",
    description: 'Keep upcoming bills and obligations in view.',
  },
  {
    icon: Target,
    title: 'Reach Your Goals',
    description: 'Turn your plans into clear, realistic steps.',
  },
  {
    icon: BookOpen,
    title: 'Learn as You Grow',
    description: 'Understand key financial concepts in plain language.',
  },
]

const capabilities = [
  {
    icon: ChartNoAxesColumnIncreasing,
    title: 'Accounts & Transactions',
    description: 'Bring your financial picture into one place.',
  },
  {
    icon: CalendarDays,
    title: 'Scheduled Obligations',
    description: 'Keep upcoming bills and income in view.',
  },
  {
    icon: Leaf,
    title: 'Forecast',
    description: 'See how your money may flow in the weeks ahead.',
  },
  {
    icon: Target,
    title: 'Goals',
    description: 'Plan for what matters to you.',
  },
  {
    icon: BookOpen,
    title: 'Education',
    description: 'Learn about key financial concepts as you go.',
  },
]

function AssetPlaceholder({ label, className = '' }) {
  return (
    <div className={`bh-asset-placeholder ${className}`}>
      <ImageIcon size={30} strokeWidth={1.2} />
      <span>{label}</span>
      <small>Original Beacon asset will be added later</small>
    </div>
  )
}

function Home() {
  return (
    <main className="beacon-home">
      {/* FULL-WIDTH PHOTO HERO */}
      <section className="bh-hero">
        <div className="bh-container bh-hero-grid">
          <div className="bh-hero-copy">
            <p className="bh-eyebrow">
              A CLEARER FINANCIAL TOMORROW
            </p>

            <h1>
              Understand today.
              <br />
              Prepare for what&apos;s next.
            </h1>

            <p className="bh-hero-description">
              Beacon helps you see where you stand today,
              what&apos;s coming next, what&apos;s already spoken
              for, and what you can safely do now — so you
              can make confident financial decisions for
              the future.
            </p>

            <div className="bh-actions">
              <Link
                to="/features"
                className="bh-button bh-button-primary"
              >
                Explore Beacon
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/how-beacon-works"
                className="bh-text-link"
              >
                See how it works
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR HIGHLIGHTS */}
      <section className="bh-highlights-section">
        <div className="bh-container">
          <div className="bh-highlights">
            {highlights.map((item) => {
              const Icon = item.icon

              return (
                <div className="bh-highlight" key={item.title}>
                  <div className="bh-highlight-icon">
                    <Icon size={26} strokeWidth={1.9} />
                  </div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAMILY STORY */}
      <section className="bh-story">
        <div className="bh-story-grid">
          <AssetPlaceholder
            className="bh-story-image"
            label="Warm Beacon family-story photography"
          />

          <div className="bh-story-content">
            <p className="bh-eyebrow">
              BUILT FOR REAL LIFE
            </p>

            <h2>It started with my own family.</h2>

            <p>
              Beacon began because I wanted something better
              for my own family — a clearer way to understand
              what was happening with our money, what was
              coming next, and what we could safely do today.
            </p>

            <p>
              What started as a personal solution has grown
              into Beacon — a financial platform designed
              to help other people and families make more
              confident decisions and build a stronger tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* FINANCIAL PHILOSOPHY */}
      <section className="bh-philosophy">
        <div className="bh-container">
          <div className="bh-philosophy-intro">
            <div>
              <p className="bh-eyebrow">
                MORE THAN A BUDGET TRACKER
              </p>

              <h2>
                A different kind of
                <br />
                financial platform
              </h2>
            </div>

            <p>
              Beacon isn&apos;t just another monthly budget app.
              It connects your current financial reality with
              what&apos;s coming next, and helps you understand
              how today&apos;s choices can affect your future.
            </p>
          </div>

          <div className="bh-capabilities">
            {capabilities.map((item) => {
              const Icon = item.icon

              return (
                <div className="bh-capability" key={item.title}>
                  <div className="bh-capability-icon">
                    <Icon size={25} strokeWidth={1.9} />
                  </div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* INDEPENDENT DEVELOPMENT */}
      <section className="bh-development">
        <div className="bh-container bh-development-grid">
          <div>
            <p className="bh-eyebrow">
              INDEPENDENT DEVELOPMENT
            </p>

            <h2>
              Always making
              <br />
              Beacon better.
            </h2>
          </div>

          <div className="bh-development-copy">
            <p>
              Beacon is being developed independently and
              is still evolving. New tools, stronger security,
              clearer education, and better ways to understand
              your finances are continually being added.
            </p>

            <Link to="/about" className="bh-inline-link">
              Learn about Beacon <ArrowRight size={16} />
            </Link>
          </div>

          <div className="bh-development-card">
            <div className="bh-development-icon">
              <Settings2 size={25} />
            </div>

            <div>
              <h3>Actively in development</h3>

              <p>
                Real-world use, real feedback, and a
                long-term commitment to making Beacon better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CALL TO ACTION */}
      <section className="bh-closing">
        <AssetPlaceholder
          className="bh-closing-image"
          label="Scenic Beacon landscape background"
        />

        <div className="bh-container bh-closing-content">
          <p className="bh-eyebrow">
            A BRIGHTER FINANCIAL TOMORROW
          </p>

          <h2>Ready to explore Beacon?</h2>

          <p>
            Take a closer look at what Beacon can do,
            how it works, and where it&apos;s headed.
          </p>

          <div className="bh-actions">
            <Link
              to="/features"
              className="bh-button bh-button-primary"
            >
              Explore Features <ArrowRight size={17} />
            </Link>

            <Link
              to="/how-beacon-works"
              className="bh-button bh-button-outline"
            >
              Learn How Beacon Works
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bh-footer">
        <div className="bh-container bh-footer-inner">
          <div className="bh-footer-brand">
            <Leaf size={20} />
            <span>Beacon</span>
          </div>

          <p>
            Independently developed. Built for real life.
          </p>

          <div className="bh-footer-links">
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/forge">Forge</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}

function ComingSoon({ title }) {
  return (
    <main className="bh-placeholder-page">
      <p className="bh-eyebrow">BEACON</p>
      <h1>{title}</h1>
      <p>This page is being developed.</p>

      <Link to="/" className="bh-inline-link">
        Return home <ArrowRight size={16} />
      </Link>
    </main>
  )
}

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<ComingSoon title="Features" />} />
        <Route path="/how-beacon-works" element={<ComingSoon title="How Beacon Works" />} />
        <Route path="/education" element={<ComingSoon title="Education" />} />
        <Route path="/downloads" element={<ComingSoon title="Downloads" />} />
        <Route path="/about" element={<ComingSoon title="About Beacon" />} />
        <Route path="/support" element={<ComingSoon title="Support Beacon" />} />
        <Route path="/contact" element={<ComingSoon title="Contact" />} />
        <Route path="/forge" element={<ComingSoon title="Forge Introduction" />} />
        <Route path="/forge/details" element={<ComingSoon title="Forge Details" />} />
      </Routes>
    </>
  )
}
