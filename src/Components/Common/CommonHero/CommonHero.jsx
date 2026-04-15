import "./CommonHero.scss";

export default function CommonHero({
  backgroundImage,
  title,
  description,
  buttons = [],
  className = "",
}) {
  const heroStyle = backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined;

  return (
    <section className={`common-hero ${className}`.trim()} style={heroStyle}>
      <div className="common-hero__overlay" />
      <div className="common-hero__content section-container">
        {title ? <h1 className="global-title common-hero__title">{title}</h1> : null}
        {description ? <p className="common-hero__description">{description}</p> : null}

        {buttons.length > 0 ? (
          <div className="common-hero__actions">
            {buttons.map((button, index) => (
              <a
                key={`${button.label}-${index}`}
                href={button.href || "#"}
                className={`common-hero__button ${button.variant === "secondary" ? "is-secondary" : ""}`.trim()}
              >
                {button.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
