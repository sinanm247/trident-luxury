import "./Header.scss";
import { useEffect, useState } from "react";
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
      <a href="#home" className="brand" aria-label="Trident Luxury Home">
        <img src={logoWhite} alt="Trident Luxury Real Estate" />
      </a>

      <nav aria-label="Primary navigation">
        <ul className="nav-links">
          <li><a href="#">ABOUT US</a></li>
          <li><a href="#">OUR SERVICES</a></li>
          <li><a href="#">OUR PORTFOLIO</a></li>
          <li><a href="#">CONTACT US</a></li>
        </ul>
      </nav>
    </header>
  );
}
