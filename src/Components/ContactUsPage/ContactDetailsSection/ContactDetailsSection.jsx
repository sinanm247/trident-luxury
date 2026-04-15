import "./ContactDetailsSection.scss";
import { FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";

const contactItems = [
  { label: "Phone", value: "+971585203693", href: "tel:+971585203693", icon: FiPhoneCall },
  { label: "Email", value: "info@tridentluxury.ae", href: "mailto:info@tridentluxury.ae", icon: FiMail },
  { label: "Office", value: "Crystal Tower,\nBusiness Bay Dubai", icon: FiMapPin },
];

export default function ContactDetailsSection() {
  return (
    <section className="contact-details section-container" aria-label="Contact details">
      <p className="contact-details__label">Let's Connect</p>
      <h2 className="global-title contact-details__title">TRIDENT LUXURY REAL ESTATE</h2>

      <div className="contact-details__grid">
        {contactItems.map((item) => (
          <article className="contact-details__card" key={item.label}>
            <div className="contact-details__card-icon" aria-hidden="true">
              <item.icon />
            </div>
            <p className="contact-details__card-label">{item.label}</p>
            {item.href ? (
              <a href={item.href}>{item.value}</a>
            ) : (
              <p className="contact-details__text">
                {item.value.split("\n").map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
