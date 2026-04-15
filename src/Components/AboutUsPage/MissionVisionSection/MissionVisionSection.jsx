import "./MissionVisionSection.scss";

const values = [
  {
    title: "Mission",
    description:
      "To guide investors and homebuyers with tailored strategies, transparent advisory, and market-led insights that create sustainable long-term value.",
  },
  {
    title: "Vision",
    description:
      "To become the most trusted luxury real estate advisory in Dubai by delivering bespoke service, legal precision, and consistent excellence in every transaction.",
  },
];

export default function MissionVisionSection() {
  return (
    <section className="mission-vision section-container" aria-label="Mission and vision">
      <p className="mission-vision__label">Our Foundation</p>
      <h2 className="global-title mission-vision__title">Mission & Vision</h2>

      <div className="mission-vision__grid">
        {values.map((item) => (
          <article className="mission-vision__card" key={item.title}>
            <h3 className="global-title">{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
