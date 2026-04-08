import "./FeaturedPortfolio.scss";
import { portfolioData } from "../../../Datasets/portfolio";
import banner1 from "../../../assets/Banner/Image-2.png";
import banner2 from "../../../assets/Banner/Image-5.png";
import banner3 from "../../../assets/Banner/Image-8.png";
import banner4 from "../../../assets/Banner/Image-10.png";
import banner5 from "../../../assets/Banner/Image-12.png";
import laTiliaImage from "../../../assets/Banner/Image-15.png";

const firstBy = (predicate) => portfolioData.find(predicate);

const featuredItems = [
  {
    displayTitle: "City Walk",
    entry: firstBy((item) => item.masterCommunity === "City Walk"),
    backgroundImage: banner1,
  },
  {
    displayTitle: "Dubai Design District",
    entry: firstBy((item) => item.projectName === "D3 Masterplan"),
    backgroundImage: banner2,
  },
  {
    displayTitle: "Nad Al Sheba Gardens",
    entry: firstBy((item) => item.projectName.includes("Nad Al Sheba Gardens")),
    backgroundImage: banner3,
  },
  {
    displayTitle: "Bay Grove Residences",
    entry: firstBy((item) => item.projectName.includes("Baygrove Residences")),
    backgroundImage: banner4,
  },
  {
    displayTitle: "Palm Central Private Residences",
    entry: firstBy((item) => item.projectName === "Palm Central"),
    backgroundImage: banner5,
  },
  {
    displayTitle: "La Tilia by Villanova",
    entry: firstBy((item) => item.projectName === "La Tilia by Villanova"),
    backgroundImage: laTiliaImage,
  },
].filter((item) => item.entry);

export default function FeaturedPortfolio() {
  return (
    <section className="featured-portfolio section-container" aria-label="Featured portfolio">
      <div className="featured-portfolio__heading">
        <p className="featured-portfolio__label">Portfolio Highlights</p>
        <h2 className="global-title">Featured Portfolio</h2>
      </div>

      <div className="featured-portfolio__grid">
        {featuredItems.map(({ displayTitle, entry, backgroundImage }) => (
          <article
            className="portfolio-card"
            key={`${displayTitle}-${entry.launchDate}`}
            style={{ "--card-bg": `url(${backgroundImage})` }}
          >
            <p className="portfolio-card__community">{entry.masterCommunity}</p>
            <h3 className="portfolio-card__title">{displayTitle}</h3>
            <p className="portfolio-card__meta">
              {entry.developer} | Launch Date: {entry.launchDate}
            </p>
            <a
              className="portfolio-card__link"
              href={entry.toolkitLink}
              target="_blank"
              rel="noreferrer"
            >
              View Toolkit
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
