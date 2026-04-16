import "./Header.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logoWhite from "../../../assets/Logo/Logo-White-2.png";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 760) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className={`site-header section-container ${isScrolled ? "is-scrolled" : ""} ${isMobileMenuOpen ? "menu-open" : ""}`}>
        <Link to="/" className="brand" aria-label="Trident Luxury Home" onClick={closeMobileMenu}>
          <img src={logoWhite} alt="Trident Luxury Real Estate" />
        </Link>

        <nav aria-label="Primary navigation" className="desktop-nav">
          <ul className="nav-links">
            <li><Link to="/about-us">ABOUT US</Link></li>
            <li><Link to="/services">OUR SERVICES</Link></li>
            <li><Link to="/portfolio">OUR PORTFOLIO</Link></li>
            <li><Link to="/contact-us">CONTACT US</Link></li>
          </ul>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? (
            <span className="menu-icon" aria-hidden="true">
              {/* &#10005; */}
              <AiOutlineClose />
            </span>
          ) : (
            <span className="menu-icon" aria-hidden="true">
              {/* &#9776; */}
              <HiOutlineMenuAlt3 />
            </span>
          )}
        </button>
      </header>

      <nav
        id="mobile-navigation"
        className={`mobile-menu-overlay ${isMobileMenuOpen ? "show" : ""}`}
        aria-label="Mobile navigation"
      >
        <ul className="mobile-nav-links">
          <li><Link to="/about-us" onClick={closeMobileMenu}>ABOUT US</Link></li>
          <li><Link to="/services" onClick={closeMobileMenu}>OUR SERVICES</Link></li>
          <li><Link to="/portfolio" onClick={closeMobileMenu}>OUR PORTFOLIO</Link></li>
          <li><Link to="/contact-us" onClick={closeMobileMenu}>CONTACT US</Link></li>
        </ul>
      </nav>
    </>
  );
}
