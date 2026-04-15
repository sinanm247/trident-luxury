import "./ServicesSection.scss";
import serviceImage1 from "../../../assets/Services/Image-1.png";
import serviceImage2 from "../../../assets/Services/Image-2.png";
import serviceImage3 from "../../../assets/Services/Image-3.png";
import serviceImage4 from "../../../assets/Services/Image-4.png";
import serviceImage5 from "../../../assets/Services/Image-5.png";
import serviceImage6 from "../../../assets/Services/Image-6.png";
import serviceImage7 from "../../../assets/Services/Image-7.png";

const services = [
  {
    title: "Real Estate Advisory",
    description: "Providing strategic insights and expert guidance for well-informed decisions.",
    image: serviceImage1,
  },
  {
    title: "Buying & Selling Assistance",
    description: "Helping clients navigate property transactions to maximize value.",
    image: serviceImage2,
  },
  {
    title: "Leasing Solutions",
    description: "Connecting landlords with reliable tenants and streamlining lease agreements.",
    image: serviceImage3,
  },
  {
    title: "Investment Consulting",
    description: "Identifying high-yield real estate investment opportunities.",
    image: serviceImage4,
  },
  {
    title: "Legal & Financial Support",
    description: "Partnering with top legal firms, banks, and conveyancing providers for seamless transactions.",
    image: serviceImage5,
  },
  {
    title: "Golden Visa Assistance",
    description: "Helping investors secure long-term residency benefits through property investment.",
    image: serviceImage6,
  },
  {
    title: "Tenant Screening & Property Management",
    description: "Ensuring stress-free property management with reliable tenant screening.",
    image: serviceImage7,
  },
];

export default function ServicesSection() {
  return (
    <section className="services-section section-container" id="services" aria-label="Our services">
      <p className="services-section__label">What We Offer</p>
      <h2 className="global-title services-section__title">Services Built Around Your Property Goals</h2>
      <div className="services-section__grid">
        {services.map((service) => (
          <article
            className="services-section__card"
            key={service.title}
            style={{ "--service-card-bg": `url(${service.image})` }}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
