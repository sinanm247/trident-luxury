import "./HomeCta.scss";

export default function HomeCta() {
  return (
    <section className="home-cta section-container" aria-label="Contact call to action">
      <div className="home-cta__box">
        <p className="home-cta__label">Start Your Property Journey</p>
        <h2 className="global-title">Let Our Experts Curate Your Next Investment</h2>
        <p className="home-cta__description">
          Connect with Trident Luxury for bespoke advisory, verified opportunities, and
          smooth end-to-end support across Dubai's most in-demand communities.
        </p>
        <a className="home-cta__button" href="#contact">
          Book Consultation
        </a>
      </div>
    </section>
  );
}
