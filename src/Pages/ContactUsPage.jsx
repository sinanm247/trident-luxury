import CommonHero from "../Components/Common/CommonHero/CommonHero";
import ContactSection from "../Components/Common/ContactSection/ContactSection";
import ContactDetailsSection from "../Components/ContactUsPage/ContactDetailsSection/ContactDetailsSection";
import ContactMapSection from "../Components/ContactUsPage/ContactMapSection/ContactMapSection";
import contactHeroImage from "../assets/Banner/Image-10.webp";

export default function ContactUsPage() {
  return (
    <div className="contact-us-page">
      <CommonHero
        backgroundImage={contactHeroImage}
        title="Contact Us"
        description="Connect with Trident Luxury for strategic property guidance, investment support, and personalized advisory."
        buttons={[
          { label: "Let's Connect", href: "#contact" },
          { label: "Call Now", href: "tel:+971585203693", variant: "secondary" },
        ]}
      />
      {/* <ContactDetailsSection /> */}
      <ContactSection />
      <ContactMapSection />
    </div>
  );
}
