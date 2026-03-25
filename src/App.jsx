import { useEffect, useState } from 'react'
import './App.css'

const offerings = [
  { name: 'Arctic Salmon', cut: 'Center Fillet', price: '$34 / lb' },
  { name: 'North Sea Cod', cut: 'Skin-On Loin', price: '$29 / lb' },
  { name: 'Fjord Trout', cut: 'Whole Side', price: '$31 / lb' },
  { name: 'Atlantic Halibut', cut: 'Portion Cut', price: '$38 / lb' },
]

function App() {
  const [meridianProgress, setMeridianProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0
      setMeridianProgress(Math.min(Math.max(progress, 0), 1))
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="page-shell">
      <div className="meridian-track" aria-hidden="true">
        <div className="meridian-growth" style={{ transform: `scaleY(${meridianProgress})` }}></div>
      </div>

      <section className="section hero" id="horizon">
        <div className="hero-video-overlay"></div>
        <div className="section-content centered">
          <p className="eyebrow">The Nordic Meridian</p>
          <h1>Purity, Sustained.</h1>
          <p className="lede">
            From the deep cold of the North to your table. Quietly sourced,
            impeccably delivered.
          </p>
        </div>
      </section>

      <section className="section philosophy" id="salt-stone">
        <div className="section-content split">
          <div className="salt-image" role="img" aria-label="Macro texture of Nordic sea salt"></div>
          <article>
            <h2>The Salt &amp; The Stone</h2>
            <p>
              We believe in the discipline of restraint. Taking only what is
              prime. Leaving the rest to the tide.
            </p>
          </article>
        </div>
      </section>

      <section className="section harvest" id="vibrant-pulse">
        <div className="section-content">
          <h2>The Vibrant Pulse</h2>
          <div className="harvest-grid">
            <div className="ingredient salmon" data-tip="Temperature controlled at 2°C from source to dock.">
              <span>Salmon</span>
            </div>
            <div className="ingredient greens">
              <span>Sea-fennel &amp; Dill</span>
            </div>
            <div className="ingredient citrus">
              <span>Lemon Zest</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section craft" id="hospitality">
        <div className="section-content split-reverse">
          <article>
            <h2>Nordic Hospitality</h2>
            <blockquote>
              Quality is a quiet conversation between the sea and the chef.
            </blockquote>
            <div className="icon-row">
              <p>Carbon-Neutral Delivery</p>
              <p>Traceable Origin</p>
              <p>Hand-Selected</p>
            </div>
          </article>
          <div className="craft-image" role="img" aria-label="Hands wrapping fish in sustainable paper"></div>
        </div>
      </section>

      <section className="section selection" id="curated-catch">
        <div className="section-content">
          <h2>The Curated Catch</h2>
          <div className="gallery" role="list">
            {offerings.map((item) => (
              <article className="product-cell" role="listitem" key={item.name}>
                <h3>{item.name}</h3>
                <p>{item.cut}</p>
                <div className="product-footer">
                  <span>{item.price}</span>
                  <button type="button">Reserve</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section promise" id="anchor">
        <div className="section-content">
          <h2>The Anchor</h2>
          <p className="legacy">Our legacy is the water we leave behind.</p>
          <p>
            Transparent seasonal zones, rotating harvest windows, and audited
            dock-to-door stewardship.
          </p>
          <div className="wave-line" aria-hidden="true"></div>
        </div>
      </section>

      <footer className="section harbor" id="connection">
        <div className="section-content centered cta">
          <h2>Invite the ocean in.</h2>
          <form className="subscribe" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input id="email" type="email" placeholder="name@kitchen.com" />
            <button type="submit">Reserve updates</button>
          </form>
          <div className="anchor-dot" aria-hidden="true">⚓</div>
        </div>
      </footer>
    </div>
  )
}

export default App
