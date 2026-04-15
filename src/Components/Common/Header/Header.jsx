import "./Header.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoWhite from "../../../assets/Logo/Logo-White-2.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header section-container ${isScrolled ? "is-scrolled" : ""}`}>
      <Link to="/" className="brand" aria-label="Trident Luxury Home">
        <img src={logoWhite} alt="Trident Luxury Real Estate" />
      </Link>

      <nav aria-label="Primary navigation">
        <ul className="nav-links">
          <li><Link to="/about-us">ABOUT US</Link></li>
          <li><Link to="/services">OUR SERVICES</Link></li>
          <li><Link to="/portfolio">OUR PORTFOLIO</Link></li>
          <li><Link to="/contact-us">CONTACT US</Link></li>
        </ul>
      </nav>
    </header>
  );
}
