import "./WhyChooseUsSection.scss";

const highlights = [
  {
    title: "Transparency",
    description:
      "Clear communication at every step, so you always know where you stand.",
  },
  {
    title: "Reliability",
    description:
      "Your goals are our priority, count on us long after the deal is closed.",
  },
  {
    title: "Legal Precision",
    description:
      "We deliver peace of mind through meticulous legal oversight and a seamless, secure process.",
  },
  {
    title: "Client Commitment",
    description:
      "Your vision drives our approach. We prioritize your objectives with unwavering dedication and tailored service.",
  },
  {
    title: "Market Expertise",
    description:
      "Powered by data and insight, our strategies are guided by in-depth research and real-time market intelligence.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="why-choose-us section-container" aria-label="Why choose us">
      <p className="why-choose-us__label">Why Choose Us</p>
      <h2 className="global-title why-choose-us__title">Built Around Trust, Clarity, and Results</h2>
      <div className="why-choose-us__grid">
        {highlights.map((item) => (
          <article className="why-choose-us__card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
