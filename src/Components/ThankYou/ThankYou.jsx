import { Link } from "react-router-dom";
import bannerImage from "../../assets/Banner/Image-11.webp";
import "./ThankYou.scss";

export default function ThankYou() {
  return (
    <section className="thank-you-page" aria-label="Thank you page">
      <div className="thank-you-page__banner">
        <img src={bannerImage} alt="Dubai skyline" />
        <div className="thank-you-page__overlay" />
      </div>

      <div className="thank-you-page__content section-container">
        <p className="thank-you-page__label">Submission Received</p>
        <h1 className="global-title">Thank You For Reaching Out</h1>
        <p className="thank-you-page__description">
          Our team has received your enquiry and will contact you shortly with the next steps.
        </p>
        <Link className="thank-you-page__home-btn" to="/">
          Back To Home
        </Link>
      </div>
    </section>
  );
}
