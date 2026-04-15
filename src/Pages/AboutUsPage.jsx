import CommonHero from "../Components/Common/CommonHero/CommonHero";
import CommonCta from "../Components/Common/CommonCta/CommonCta";
import AboutIntroSection from "../Components/AboutUsPage/AboutIntroSection/AboutIntroSection";
import MissionVisionSection from "../Components/AboutUsPage/MissionVisionSection/MissionVisionSection";
import WhyChooseUsSection from "../Components/AboutUsPage/WhyChooseUsSection/WhyChooseUsSection";
import aboutHeroImage from "../assets/Banner/Image-11.png";

export default function AboutUsPage() {
  return (
    <div className="about-us-page">
      <CommonHero
        backgroundImage={aboutHeroImage}
        title="About Us"
        description="A luxury-focused advisory team delivering strategic real estate guidance with legal clarity and market intelligence."
        buttons={[
          { label: "Discover Our Story", href: "#about-intro" },
          { label: "Get In Touch", href: "/contact-us", variant: "secondary" },
        ]}
      />
      <div id="about-intro">
        <AboutIntroSection />
      </div>
      <MissionVisionSection />
      <WhyChooseUsSection />
      <CommonCta />
    </div>
  );
}
