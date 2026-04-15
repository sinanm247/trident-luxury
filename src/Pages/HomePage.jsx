import HomeHero from "../Components/HomePage/HomeHero/HomeHero";
import AboutUs from "../Components/HomePage/AboutUs/AboutUs";
import HomeStats from "../Components/HomePage/HomeStats/HomeStats";
import FeaturedPortfolio from "../Components/HomePage/FeaturedPortfolio/FeaturedPortfolio";
import CommonCta from "../Components/Common/CommonCta/CommonCta";
import HomeProcess from "../Components/HomePage/HomeProcess/HomeProcess";
import HomeClients from "../Components/HomePage/HomeClients/HomeClients";
import ContactSection from "../Components/Common/ContactSection/ContactSection";

export default function HomePage() {
    return (
        <div className="home-page">
            <HomeHero />
            <AboutUs />
            <HomeStats />
            <FeaturedPortfolio />
            <HomeClients />
            <CommonCta />
            <HomeProcess />
            <ContactSection />
        </div>
    )
}