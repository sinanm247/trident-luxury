import "./CommonCta.scss";
import defaultBackground from "../../../assets/Banner/Image-12.webp";

export default function CommonCta({
  label = "Start Your Property Journey",
  title = "Let Our Experts Curate Your Next Investment",
  description = "Connect with Trident Luxury for bespoke advisory, verified opportunities, and smooth end-to-end support across Dubai's most in-demand communities.",
  buttonText = "Book Consultation",
  buttonHref = "#contact",
  backgroundImage = defaultBackground,
}) {
  return (
    <section className="common-cta section-container" aria-label="Contact call to action">
      <div className="common-cta__box" style={{ backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.34) 0%, rgba(0, 0, 0, 0.42) 45%, rgba(0, 0, 0, 0.7) 100%), radial-gradient(85% 120% at 100% 0%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 55%), url(${backgroundImage})` }}>
        <p className="common-cta__label">{label}</p>
        <h2 className="global-title">{title}</h2>
        <p className="common-cta__description">{description}</p>
        <a className="common-cta__button" href={buttonHref}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
