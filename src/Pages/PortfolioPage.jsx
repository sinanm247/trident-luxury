import CommonHero from "../Components/Common/CommonHero/CommonHero";
import CommonCta from "../Components/Common/CommonCta/CommonCta";
import PortfolioListing from "../Components/PortfolioPage/PortfolioListing/PortfolioListing";
import portfolioHeroImage from "../assets/Banner/Image-12.webp";

export default function PortfolioPage() {
  return (
    <div className="portfolio-page">
      <CommonHero
        backgroundImage={portfolioHeroImage}
        title="Our Portfolio"
        description="Explore launch-ready projects from Dubai's top developers, complete with curated visuals and campaign essentials."
        buttons={[
          { label: "Browse Projects", href: "#portfolio" },
          { label: "Contact Team", href: "/contact-us", variant: "secondary" },
        ]}
      />
      <PortfolioListing />
      <CommonCta />
    </div>
  );
}
