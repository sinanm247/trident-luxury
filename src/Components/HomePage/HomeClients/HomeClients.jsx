import "./HomeClients.scss";

const logoModules = import.meta.glob("../../../assets/Clients/*.png", {
  eager: true,
  import: "default",
});

const clientLogos = Object.values(logoModules);
const scrollingLogos = [...clientLogos, ...clientLogos];

export default function HomeClients() {
  return (
    <section className="home-clients section-container" aria-label="Our clients">
      <div className="home-clients__header">
        <p className="home-clients__label">Our Partners</p>
        <h2 className="global-title">Trusted Development Partners</h2>
      </div>

      <div className="home-clients__marquee">
        <div className="home-clients__track">
          {scrollingLogos.map((logo, index) => (
            <div className="home-clients__item" key={`${logo}-${index}`}>
              <img src={logo} alt="Client logo" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
