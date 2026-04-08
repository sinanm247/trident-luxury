import HomeHero from "../Components/HomePage/HomeHero/HomeHero";
import AboutUs from "../Components/HomePage/AboutUs/AboutUs";
import HomeStats from "../Components/HomePage/HomeStats/HomeStats";
import FeaturedPortfolio from "../Components/HomePage/FeaturedPortfolio/FeaturedPortfolio";
import HomeCta from "../Components/HomePage/HomeCta/HomeCta";
import HomeProcess from "../Components/HomePage/HomeProcess/HomeProcess";
import HomeClients from "../Components/HomePage/HomeClients/HomeClients";
import HomeContact from "../Components/HomePage/HomeContact/HomeContact";

export default function HomePage() {
    return (
        <div className="home-page">
            <HomeHero />
            <AboutUs />
            <HomeStats />
            <FeaturedPortfolio />
            <HomeClients />
            <HomeCta />
            <HomeProcess />
            <HomeContact />
        </div>
    )
}