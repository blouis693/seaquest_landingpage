import { useEffect, useMemo, useState } from 'react'
import './App.css'

const cityTimezoneList = [
  { label: 'Tokyo', zone: 'Asia/Tokyo' },
  { label: 'Zurich', zone: 'Europe/Zurich' },
  { label: 'Singapore', zone: 'Asia/Singapore' },
  { label: 'Aetheris', zone: 'UTC' },
]

const formatTime = (zone) =>
  new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: zone,
  }).format(new Date())

function App() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [times, setTimes] = useState(() =>
    cityTimezoneList.reduce((acc, city) => {
      acc[city.label] = formatTime(city.zone)
      return acc
    }, {}),
  )

  useEffect(() => {
    const updateTimes = () => {
      setTimes(
        cityTimezoneList.reduce((acc, city) => {
          acc[city.label] = formatTime(city.zone)
          return acc
        }, {}),
      )
    }

    const timer = setInterval(updateTimes, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const onMove = (event) => {
      setCursor({ x: event.clientX, y: event.clientY })
    }

    const onScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('pointermove', onMove)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const scrollProgress = useMemo(() => {
    const max = Math.max(document.body.scrollHeight - window.innerHeight, 1)
    return Math.min(scrollY / max, 1)
  }, [scrollY])

  return (
    <div className="aetheris">
      <div
        className="cursor-ring"
        style={{
          transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)`,
        }}
      />

      <section className="panel hero-horizon">
        <div className="hero-orb" aria-hidden="true">
          <div className="orb-core" />
        </div>
        <p className="overline">The Predictive Urban Harmony OS</p>
        <h1>THE ARCHITECTURE OF ANTICIPATION.</h1>
        <p className="lead">
          Aetheris synchronizes the heartbeat of the modern environment. Move
          from reactive management to predictive harmony.
        </p>
        <div className="scroll-hint" aria-hidden="true">
          <span />
        </div>
      </section>

      <section className="panel living-blueprint">
        <div className="blueprint-grid" aria-hidden="true" />
        <div className="copy-wrap">
          <h2>Beyond Data. Into Intuition.</h2>
          <p>
            Static infrastructure is a relic. Aetheris transforms physical space
            into a responsive entity, learning from every footfall and photon to
            optimize the next hour before it arrives.
          </p>
        </div>
      </section>

      <section className="panel flow-state">
        <div className="pulse-grid" aria-hidden="true" />
        <div className="feature-cards">
          <article className="glass-card">
            <h3>Kinetic Transit</h3>
            <p>Real-time flow optimization.</p>
            <code>Latency: 0.002ms</code>
          </article>
          <article className="glass-card">
            <h3>Luminous Energy</h3>
            <p>Predictive climate and lighting that follows the sun and soul.</p>
            <code>Efficiency: +42%</code>
          </article>
          <article className="glass-card">
            <h3>Silent Security</h3>
            <p>Invisible, frictionless safety protocols.</p>
            <code>Response: 0.09s</code>
          </article>
        </div>
      </section>

      <section className="panel human-element">
        <div
          className="sunlight"
          style={{
            transform: `translateX(${scrollProgress * 46 - 18}%)`,
          }}
          aria-hidden="true"
        />
        <div className="copy-wrap">
          <h2>Engineering Serenity.</h2>
          <p>
            We don’t just optimize systems; we reclaim human focus. By
            automating the complexities of the environment, we create the
            stillness required for invention.
          </p>
        </div>
      </section>

      <section className="panel final-threshold">
        <div className="final-core" aria-hidden="true" />
        <h2>THE FUTURE IS ALREADY ASSEMBLED.</h2>
        <button type="button" className="cta">
          INITIATE INTEGRATION
        </button>
        <footer>
          <nav>
            <a href="#">Laboratory</a>
            <a href="#">Philosophy</a>
            <a href="#">Visionaries</a>
          </nav>
          <ul>
            {cityTimezoneList.map((city) => (
              <li key={city.label}>
                <span>{city.label}</span>
                <strong>{times[city.label]}</strong>
              </li>
            ))}
          </ul>
        </footer>
      </section>
    </div>
  )
}

export default App
