import CommonHero from "../Components/Common/CommonHero/CommonHero";
import CommonCta from "../Components/Common/CommonCta/CommonCta";
import ServicesSection from "../Components/ServicesPage/ServicesSection/ServicesSection";
import serviceHeroImage from "../assets/Banner/Image-10.png";

export default function ServicesPage() {
  return (
    <div className="services-page">
      <CommonHero
        backgroundImage={serviceHeroImage}
        title="Our Services"
        description="From strategic advisory to legal support, we deliver end-to-end real estate services designed for confident decisions and stronger returns."
        buttons={[
          { label: "Explore Services", href: "#services" },
          { label: "Book Consultation", href: "/contact-us", variant: "secondary" },
        ]}
      />
      <ServicesSection />
      <CommonCta />
    </div>
  );
}
