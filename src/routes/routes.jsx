import HomePage from "../Pages/HomePage";
import AboutUsPage from "../Pages/AboutUsPage";
import ServicesPage from "../Pages/ServicesPage";
import PortfolioPage from "../Pages/PortfolioPage";
import PortfolioDetailPage from "../Components/PortfolioPage/PortfolioDetailPage/PortfolioDetailPage";
import ContactUsPage from "../Pages/ContactUsPage";
import ThankYou from "../Components/ThankYou/ThankYou";
import PageNotFound from "../Components/PageNotFound/PageNotFound";

const routes = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/services',
        element: <ServicesPage />
    },
    {
        path: '/about-us',
        element: <AboutUsPage />
    },
    {
        path: '/portfolio',
        element: <PortfolioPage />
    },
    {
        path: '/portfolio/:slug',
        element: <PortfolioDetailPage />
    },
    {
        path: '/contact-us',
        element: <ContactUsPage />
    },
    {
        path: '/thank-you',
        element: <ThankYou />
    },
    {
        path: '/page-not-found',
        element: <PageNotFound />
    },
    {
        path: '*',
        element: <PageNotFound />
    },
]

export default routes;