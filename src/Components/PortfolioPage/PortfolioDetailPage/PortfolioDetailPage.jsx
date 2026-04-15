import { useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { FiX } from "react-icons/fi";
import { getPortfolioBySlug } from "../../../Datasets/portfolio";
import "./PortfolioDetailPage.scss";

export default function PortfolioDetailPage() {
  const { slug } = useParams();
  const portfolio = getPortfolioBySlug(slug);
  const [sliderIndex, setSliderIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const galleryImages = useMemo(() => {
    if (!portfolio) return [];
    return portfolio.allImages.length ? portfolio.allImages : [portfolio.thumbnail, ...portfolio.gallery];
  }, [portfolio]);

  if (!portfolio) {
    return <Navigate to="/portfolio" replace />;
  }

  const maxSliderIndex = Math.max(galleryImages.length - 2, 0);
  const visibleImages = galleryImages.slice(sliderIndex, sliderIndex + 2);
  const isLightboxOpen = activeImageIndex !== null;

  const goSliderPrev = () => setSliderIndex((prev) => Math.max(prev - 1, 0));
  const goSliderNext = () => setSliderIndex((prev) => Math.min(prev + 1, maxSliderIndex));
  const goLightboxPrev = () =>
    setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  const goLightboxNext = () => setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);

  return (
    <div className="portfolio-detail-page">
      <section className="portfolio-detail-hero">
        <img src={portfolio.thumbnail} alt={portfolio.projectName} className="portfolio-detail-hero__image" />
        <div className="portfolio-detail-hero__overlay" />
        <div className="portfolio-detail-hero__inner section-container">
          <div className="portfolio-detail-hero__content">
            <p className="portfolio-detail-hero__community">{portfolio.masterCommunity}</p>
            <h1 className="global-title">{portfolio.projectName}</h1>
            <p className="portfolio-detail-hero__meta">
              {portfolio.developer} | Launch Date: {portfolio.launchDate}
            </p>
          </div>

          <div className="portfolio-detail-hero__brand">
            <img src={portfolio.developerLogoImage} alt={`${portfolio.developer} logo`} />
            <hr />
            <img src={portfolio.communityLogoImage} alt={portfolio.logo} />
          </div>
        </div>
      </section>

      <section className="portfolio-detail-info section-container">
        <div className="portfolio-detail-info__header">
          <p className="portfolio-detail-info__label">Project Details</p>
          <Link className="portfolio-detail-info__back" to="/portfolio">
            Back to Portfolio
          </Link>
        </div>
        <div className="portfolio-detail-info__grid">
          <article className="portfolio-detail-info__description">
            <h2>Description</h2>
            <p>{portfolio.description}</p>
          </article>
          <article>
            <h2>Developer</h2>
            <p>{portfolio.developer}</p>
          </article>
          <article>
            <h2>Master Community</h2>
            <p>{portfolio.masterCommunity}</p>
          </article>
          <article>
            <h2>Launch Date</h2>
            <p>{portfolio.launchDate}</p>
          </article>
        </div>
      </section>

      <section className="portfolio-detail-gallery section-container" aria-label="Project gallery">
        <p className="portfolio-detail-gallery__label">Gallery</p>
        <h2 className="global-title portfolio-detail-gallery__title">Project Visuals</h2>

        <div className="portfolio-detail-gallery__slider">
          <button
            type="button"
            className="portfolio-detail-gallery__nav portfolio-detail-gallery__nav--left"
            onClick={goSliderPrev}
            disabled={sliderIndex === 0}
            aria-label="Show previous gallery images"
          >
            <BsChevronCompactLeft />
          </button>

          <div className="portfolio-detail-gallery__track">
            {visibleImages.map((image, index) => {
              const realIndex = sliderIndex + index;
              return (
                <button
                  key={`${portfolio.slug}-gallery-${realIndex + 1}`}
                  type="button"
                  className="portfolio-detail-gallery__item"
                  onClick={() => setActiveImageIndex(realIndex)}
                  aria-label={`Open gallery image ${realIndex + 1}`}
                >
                  <img src={image} alt={`${portfolio.projectName} gallery ${realIndex + 1}`} />
                </button>
              );
            })}
          </div>

          <button
            type="button"
            className="portfolio-detail-gallery__nav portfolio-detail-gallery__nav--right"
            onClick={goSliderNext}
            disabled={sliderIndex >= maxSliderIndex}
            aria-label="Show next gallery images"
          >
            <BsChevronCompactRight />
          </button>
        </div>
      </section>

      {isLightboxOpen ? (
        <div
          className="portfolio-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Portfolio gallery image"
          onClick={() => setActiveImageIndex(null)}
        >
          <button
            type="button"
            className="portfolio-lightbox__close"
            aria-label="Close full screen gallery"
            onClick={() => setActiveImageIndex(null)}
          >
            <FiX />
          </button>

          <button
            type="button"
            className="portfolio-lightbox__arrow portfolio-lightbox__arrow--left"
            aria-label="Show previous full screen image"
            onClick={(event) => {
              event.stopPropagation();
              goLightboxPrev();
            }}
          >
            <BsChevronCompactLeft />
          </button>

          <div className="portfolio-lightbox__media" onClick={(event) => event.stopPropagation()}>
            <img src={galleryImages[activeImageIndex]} alt={`${portfolio.projectName} full screen`} />
          </div>

          <button
            type="button"
            className="portfolio-lightbox__arrow portfolio-lightbox__arrow--right"
            aria-label="Show next full screen image"
            onClick={(event) => {
              event.stopPropagation();
              goLightboxNext();
            }}
          >
            <BsChevronCompactRight />
          </button>
        </div>
      ) : null}
    </div>
  );
}
