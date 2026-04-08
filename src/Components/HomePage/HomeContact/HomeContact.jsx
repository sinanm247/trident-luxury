import "./HomeContact.scss";

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

export default function HomeContact() {
  return (
    <section className="home-contact section-container" id="contact" aria-label="Contact us">
      <div className="home-contact__grid">
        <div className="home-contact__content">
          <p className="home-contact__label">Contact Us</p>
          <h2 className="global-title">Let's Build Your Next Real Estate Move</h2>
          <ul className="home-contact__points">
            {highlights.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <form className="home-contact__form" onSubmit={(event) => event.preventDefault()}>
          <p className="home-contact__form-label">Book a Consultation</p>

          <label>
            Full Name
            <input type="text" name="name" placeholder="Your name" />
          </label>

          <label>
            Email Address
            <input type="email" name="email" placeholder="name@email.com" />
          </label>

          <label>
            Phone Number
            <input type="tel" name="phone" placeholder="+971" />
          </label>

          <label>
            Message
            <textarea name="message" rows="4" placeholder="Tell us about your requirement" />
          </label>

          <button type="submit">Send Enquiry</button>
        </form>
      </div>
    </section>
  );
}
