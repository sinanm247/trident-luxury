import "./AboutUs.scss";
import aboutImage from "../../../assets/Gallery/Image-1.png";

export default function AboutUs() {
  return (
    <section className="about-us section-container" id="about">
      <div className="about-media">
        <img src={aboutImage} alt="Trident Luxury Real Estate" />
      </div>

      <div className="about-content">
        <p className="about-label">About Trident Luxury</p>
        <h2 className="global-title">Real Estate Advisory with Clarity and Confidence</h2>
        <p>
          Trident Luxury Real Estate is a Dubai-based brokerage firm helping clients buy,
          sell, and invest with clarity and peace of mind. With legal professionals and
          real estate experts under one roof, we deliver smooth and compliant
          transactions tailored to your goals.
        </p>

        <div className="about-points">
          <article>
            <h3 className="global-title about-subtitle">Mission</h3>
            <p>
              We guide investors and homebuyers through tailored strategies, market
              insight, and exceptional service that creates long-term value.
            </p>
          </article>
          <article>
            <h3 className="global-title about-subtitle">Vision</h3>
            <p>
              To be the definitive name in luxury real estate through bespoke advisory,
              trust-led relationships, and consistently excellent outcomes.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
