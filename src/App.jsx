import './App.css'

const pillars = [
  {
    title: 'Provenance',
    text: 'Ethically sourced from the richest Indonesian waters with transparent catch documentation.',
  },
  {
    title: 'Precision',
    text: 'Temperature-controlled mastery from port to plate through audited cold-chain checkpoints.',
  },
  {
    title: 'Partnership',
    text: 'Bespoke logistics for high-volume hospitality with responsive account coordination.',
  },
]

const catches = [
  {
    name: 'Red Snapper',
    spec: 'Firm texture · Balanced fat · Whole / Fillet',
  },
  {
    name: 'Yellowfin Tuna',
    spec: 'Silken grain · High protein · Loin / Saku / Whole',
  },
  {
    name: 'Tiger Prawns',
    spec: 'Springy bite · Sweet profile · Head-on / Peeled',
  },
  {
    name: 'Octopus',
    spec: 'Tenderized consistency · Oceanic finish · Whole / Tentacle',
  },
]

const testimonials = [
  {
    quote:
      'Seaquest does not just deliver fish; they deliver peace of mind during a Friday night rush.',
    name: 'Chef Arman Putra',
    role: 'Executive Chef, Meridian Bay Hotel',
  },
  {
    quote:
      'Our kitchen standards are uncompromising, and their cold-chain discipline mirrors ours exactly.',
    name: 'Chef Nadine S.',
    role: 'Culinary Director, Atelier Archipelago',
  },
]

function App() {
  return (
    <div className="page">
      <div className="lens" aria-hidden="true"></div>

      <header className="hero section" id="source-and-standard">
        <div className="grid-overlay" aria-hidden="true"></div>
        <div className="organic-mask" aria-hidden="true"></div>
        <p className="eyebrow">Seaquest Indonesia</p>
        <h1>From the Indonesian Deep to the Chef&apos;s Table.</h1>
        <p className="lead">
          A masterclass in seafood supply. We bridge the ocean&apos;s bounty and the world&apos;s
          most demanding kitchens with unwavering cold-chain precision.
        </p>
        <a className="scroll-indicator" href="#flow-of-freshness">
          <span className="mouse"></span>
          Scroll to Explore
        </a>
      </header>

      <section className="section philosophy" id="flow-of-freshness">
        <p className="eyebrow">The Flow of Freshness</p>
        <h2>Three Pillars. One Standard.</h2>
        <div className="pillars">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="pillar-card">
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section portfolio" id="curated-catch">
        <p className="eyebrow">The Curated Catch</p>
        <h2>Chef-Calibrated Product Portraits</h2>
        <div className="catch-rail" role="list" aria-label="Seafood catalog">
          {catches.map((item, index) => (
            <article key={item.name} className="catch-card" role="listitem">
              <div className="catch-image" data-index={index}></div>
              <div className="catch-content">
                <h3>{item.name}</h3>
                <p>{item.spec}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section operations" id="reliability-in-motion">
        <p className="eyebrow">Operational Excellence</p>
        <h2>Consistency is our Currency.</h2>
        <div className="ops-grid">
          <div className="map-panel">
            <h3>Distribution Nodes</h3>
            <p>Jakarta · Surabaya · Bali · Makassar · Medan</p>
            <div className="node-map" aria-label="Stylized map of Indonesia with route nodes">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <ul className="ops-list">
            <li>24-Hour Prime Delivery for key metro zones</li>
            <li>HACCP Certified Handling at every checkpoint</li>
            <li>Live temperature logs and chain-of-custody records</li>
          </ul>
        </div>
      </section>

      <section className="section hospitality" id="hospitality-alignment">
        <p className="eyebrow">The Behind-the-Scenes Partner</p>
        <h2>Your Reputation, Sustained.</h2>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.name}>
              <p>&ldquo;{testimonial.quote}&rdquo;</p>
              <cite>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </cite>
            </blockquote>
          ))}
        </div>
      </section>

      <footer className="section cta" id="secure-your-supply">
        <h2>The ocean is vast. Your supply shouldn&apos;t be a mystery.</h2>
        <p>Secure dependable seafood throughput before your next peak service cycle.</p>
        <div className="cta-actions">
          <button type="button">Request Wholesale Partnership</button>
          <button type="button" className="ghost">
            Download Seasonal Catalog
          </button>
        </div>
      </footer>
    </div>
  )
}

export default App
