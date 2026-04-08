import "./HomeProcess.scss";

const processSteps = [
  {
    title: "Consultation",
    description: "Understanding your real estate goals and expectations.",
  },
  {
    title: "Market Analysis",
    description: "Providing tailored insights and property options.",
  },
  {
    title: "Property Selection",
    description: "Identifying the best opportunities that align with your needs.",
  },
  {
    title: "Paperwork & Terms",
    description: "Ensuring a seamless transaction process.",
  },
  {
    title: "Post-Sale Support",
    description: "Offering continuous guidance beyond the purchase or sale.",
  },
];

export default function HomeProcess() {
  return (
    <section className="home-process section-container" aria-label="Our process">
      <div className="home-process__header">
        <p className="home-process__label">Our Process</p>
        <h2 className="global-title">Our Structured Approach</h2>
        <p className="home-process__intro">
          Our structured process ensures a smooth real estate experience - from understanding
          your goals and analyzing market trends to securing the best property, handling
          negotiations, and providing ongoing support even after the deal is done.
        </p>
      </div>

      <div className="home-process__steps">
        {processSteps.map((step, index) => (
          <article className="process-step" key={step.title}>
            <p className="process-step__number">{String(index + 1).padStart(2, "0")}</p>
            <h3 className="process-step__title">{step.title}</h3>
            <p className="process-step__description">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
