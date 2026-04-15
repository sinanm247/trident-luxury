import "./PortfolioListing.scss";
import { useMemo, useState } from "react";
import { portfolioData, portfolioDeveloperFilters } from "../../../Datasets/portfolio";
import { Link } from "react-router-dom";

export default function PortfolioListing() {
  const [activeDeveloper, setActiveDeveloper] = useState("All");

  const filteredPortfolio = useMemo(
    () =>
      activeDeveloper === "All"
        ? portfolioData
        : portfolioData.filter((item) => item.developer === activeDeveloper),
    [activeDeveloper]
  );

  return (
    <section className="portfolio-listing section-container" id="portfolio" aria-label="Portfolio projects">
      <p className="portfolio-listing__label">Our Portfolio</p>
      <h2 className="global-title portfolio-listing__title">Projects Across Dubai&apos;s Leading Developers</h2>

      <div className="portfolio-listing__filter">
        {portfolioDeveloperFilters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            className={`portfolio-listing__filter-btn ${activeDeveloper === filter.value ? "is-active" : ""}`}
            onClick={() => setActiveDeveloper(filter.value)}
          >
            {filter.logoImage ? (
              <img src={filter.logoImage} alt={filter.label} />
            ) : (
              <span className="portfolio-listing__filter-text">{filter.label}</span>
            )}
          </button>
        ))}
      </div>

      <div className="portfolio-listing__grid">
        {filteredPortfolio.map((item) => (
          <article
            className="portfolio-listing-card"
            key={`${item.projectName}-${item.launchDate}`}
            style={{ "--card-bg": `url(${item.thumbnail})` }}
          >
            <div className="portfolio-listing-card__content">
              <p className="portfolio-listing-card__community">{item.masterCommunity}</p>
              <h3 className="portfolio-listing-card__title">{item.projectName}</h3>
              <p className="portfolio-listing-card__meta">
                {item.developer} | Launch Date: {item.launchDate}
              </p>
              <Link
                className="portfolio-listing-card__button"
                to={`/portfolio/${item.slug}`}
              >
                Read more
              </Link>
            </div>

            <div className="portfolio-listing-card__logo-wrap">
              <img src={item.logoImage} alt={item.logo} className="portfolio-listing-card__logo" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
