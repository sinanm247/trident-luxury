import "./AboutIntroSection.scss";

export default function AboutIntroSection() {
  return (
    <section className="about-intro section-container" aria-label="About Trident Luxury">
      <div className="about-intro__media" />

      <div className="about-intro__content">
        <p className="about-intro__label">Who We Are</p>
        <h2 className="global-title">Luxury Real Estate Advisory Built on Precision and Trust</h2>
        <p>
          Trident Luxury Real Estate is a Dubai-based brokerage focused on high-value residential and
          investment opportunities. Our team combines market expertise with legal and transaction depth to
          deliver smooth, compliant, and results-driven property journeys.
        </p>
        <p>
          From first consultation to final handover, we craft tailored advisory strategies aligned to your
          financial goals, timeline, and risk profile so every decision is clear and confident.
        </p>
      </div>
    </section>
  );
}
