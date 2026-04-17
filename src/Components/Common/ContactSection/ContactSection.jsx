import "./ContactSection.scss";
import { useState } from "react";
import { sendContactFormEmail } from "../../../Utils/emailService";

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

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    const result = await sendContactFormEmail({
      ...formData,
      source: "Contact Form",
    });

    if (result?.success) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section className="contact-section section-container" id="contact" aria-label="Contact us">
      <div className="contact-section__grid">
        <div className="contact-section__content">
          <p className="contact-section__label">Contact Us</p>
          <h2 className="global-title">Let's Build Your Next Real Estate Move</h2>
          <ul className="contact-section__points">
            {highlights.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <form className="contact-section__form" onSubmit={handleSubmit}>
          <p className="contact-section__form-label">Book a Consultation</p>

          <label>
            Full Name
            <input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
          </label>

          <label>
            Email Address
            <input type="email" name="email" placeholder="name@email.com" value={formData.email} onChange={handleChange} required />
          </label>

          <label>
            Phone Number
            <input type="tel" name="phone" placeholder="+971" value={formData.phone} onChange={handleChange} required />
          </label>

          <label>
            Message
            <textarea
              name="message"
              rows="4"
              placeholder="Tell us about your requirement"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Enquiry"}
          </button>
        </form>
      </div>
    </section>
  );
}
