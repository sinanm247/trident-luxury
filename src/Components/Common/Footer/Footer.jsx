import "./Footer.scss";
import logoWhite from "../../../assets/Logo/Logo-White-2.png";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Real Estate Advisory",
  "Buying & Selling Assistance",
  "Leasing Solutions",
  "Investment Consulting",
  "Legal & Financial Support",
  "Golden Visa Assistance",
  "Tenant Screening & Property Management",
];

export default function Footer() {
  return (
    <footer className="home-footer section-container" aria-label="Website footer">
      <div className="home-footer__grid">
        <div className="home-footer__brand">
          <a href="#home" aria-label="Trident Luxury home">
            <img src={logoWhite} alt="Trident Luxury Real Estate" />
          </a>
          <p>
            Trident Luxury Real Estate offers tailored advisory, legal clarity, and
            market-led strategies for buyers, sellers, and investors across Dubai.
          </p>
        </div>

        <div className="home-footer__links">
          <h3>Quick Links</h3>
          <ul>
            {quickLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="home-footer__services">
          <h3>Services</h3>
          <ul>
            {services.map((item) => (
              <li key={item}>
                <h4>{item}</h4>
              </li>
            ))}
          </ul>
        </div>

        <div className="home-footer__office" id="office">
          <h3>Office & Contact</h3>
          <p>Trident Luxury Real Estate</p>
          <p>Crystal Tower,</p>
          <p>Business Bay Dubai</p>
          <a href="tel:+971585203693">+971585203693</a>
          <a href="mailto:info@tridentluxury.ae">info@tridentluxury.ae</a>
        </div>
      </div>

      <div className="home-footer__bottom">
        <div className="home-footer__bottom-row">
          <ul className="home-footer__legal-links" aria-label="Legal links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
          <p>© {new Date().getFullYear()} Trident Luxury Real Estate. All rights reserved.</p>
        </div>

        {/* <p className="home-footer__made-with-love">
          Crafted by{" "}
          <a href="https://media247.digital/" target="_blank" rel="noreferrer">
            MEDIA247 Digital
          </a>
        </p> */}
      </div>
    </footer>
  );
}
