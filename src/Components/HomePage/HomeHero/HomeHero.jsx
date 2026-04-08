import "./HomeHero.scss";
import { useState, useEffect } from "react";
import banner1 from "../../../assets/Banner/Image-2.png";
import banner2 from "../../../assets/Banner/Image-5.png";
import banner3 from "../../../assets/Banner/Image-8.png";
import banner4 from "../../../assets/Banner/Image-10.png";
import banner5 from "../../../assets/Banner/Image-12.png";

const SLIDE_INTERVAL = 4000; // 4 seconds

const slides = [
  {
    image: banner1,
    title: "City Walk",
    description:
      "A premium urban district in central Dubai, City Walk blends luxury residences, boutique retail, and curated dining in a connected live-work-play destination.",
    cta: "Discover Now",
  },
  {
    image: banner2,
    title: "Dubai Design District",
    description:
      "Dubai Design District is the region's leading creative hub, shaped for design, culture, and modern city living with vibrant public spaces and waterfront connectivity.",
    cta: "Discover Now",
  },
  {
    image: banner3,
    title: "Nad Al Sheba Gardens",
    description:
      "Set minutes from Downtown, Nad Al Sheba Gardens offers private, green luxury living with seamless access to major roads, leisure landmarks, and everyday essentials.",
    cta: "Discover Now",
  },
  {
    image: banner4,
    title: "Bay Grove Residences",
    description:
      "Bay Grove Residences at Dubai Islands presents refined beachfront living, where city energy and coastal calm meet in a distinctive and contemporary address.",
    cta: "Discover Now",
  },
  {
    image: banner5,
    title: "Palm Central Private Residences",
    description:
      "A collection of contemporary resort homes on Palm Jebel Ali, designed with open layouts, natural materials, and uninterrupted island views from dawn to night.",
    cta: "Discover Now",
  },
];

export default function HomeHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="home-hero" id="home">
      <div className="overlay"></div>
      <div className="banner-container">
        {slides.map((slide, index) => (
          <img
            key={index}
            className={`banner-image ${index === currentSlide ? "active" : ""}`}
            src={slide.image}
            alt={slide.title}
          />
        ))}
      </div>
      <div className="hero-content section-container">
        <h1 className="content-title global-title">{slides[currentSlide].title}</h1>
        <p className="content-description">{slides[currentSlide].description}</p>
        <a href="#contact" className="content-button" type="button">
          {slides[currentSlide].cta}
        </a>
      </div>

      <div className="pagination-container" role="tablist" aria-label="Hero slides">
        {slides.map((slide, index) => (
          <div
            key={`pagination-${index}`}
            className={`pagination-dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            role="tab"
            aria-selected={index === currentSlide}
            aria-label={`Show slide ${index + 1}: ${slide.title}`}
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                goToSlide(index);
              }
            }}
          >
            <div className="dot-indicator"></div>
            {index === currentSlide && (
              <div key={`filling-${currentSlide}`} className="filling-line"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}