import "./ContactMapSection.scss";

export default function ContactMapSection() {
  return (
    <section className="contact-map" aria-label="Headquarters location">
      <div className="contact-map__layout">
        <div className="contact-map__details">
          <p className="contact-map__label">Headquarters</p>
          <span className="contact-map__divider" />
          <p className="contact-map__text">
            TRIDENT LUXURY REAL ESTATE
            <br />
            CRYSTAL TOWER,
            <br />
            BUSINESS BAY DUBAI
          </p>
          <a href="tel:+971585203693" className="contact-map__link">
            +971 58 520 3693
          </a>
          <a href="mailto:info@tridentluxury.ae" className="contact-map__link">
            INFO@TRIDENTLUXURY.AE
          </a>
        </div>

        <div className="contact-map__frame-wrap">
          <iframe
            title="Trident Luxury Real Estate map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2228.246273088269!2d55.28868269338402!3d25.19430768402011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6823cb19cfc7%3A0x2bc0386a76611149!2sA4%20-%20Al%20Asayel%20St%20-%20Business%20Bay%20-%20Dubai!5e1!3m2!1sen!2sae!4v1777620332577!5m2!1sen!2sae"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            className="contact-map__button"
            href="https://maps.yango.com/-/CPv6nRMp"
            target="_blank"
            rel="noreferrer"
          >
            Open Location
          </a>
        </div>
      </div>
    </section>
  );
}
