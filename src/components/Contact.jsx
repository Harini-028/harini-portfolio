import { useState } from "react";

const contactLinks = [
  {
    label: "Email",
    value: "harinirv.dev@gmail.com",
    href: "mailto:harinirv.dev@gmail.com",
    icon: "✉",
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/harini-r-v",
    icon: "in",
  },
  {
    label: "GitHub",
    value: "View my repositories",
    href: "https://github.com/HariniRV",
    icon: "◇",
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [feedback, setFeedback] = useState({ type: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setFeedback({
        type: "error",
        message: "Please complete all the fields before sending your message.",
      });
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(trimmedEmail)) {
      setFeedback({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setSending(true);
    setFeedback({ type: "", message: "" });

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong while sending your message.");
      }

      setFeedback({
        type: "success",
        message: "Your message has been sent successfully. I will get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setFeedback({
        type: "error",
        message: error.message || "Unable to send your message right now.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-intro">
          <span className="contact-label">Let&apos;s Work Together</span>
          <h2>
            Let&apos;s build something <span>meaningful</span> together.
          </h2>
          <p>
            I&apos;m open to internship opportunities, developer roles, research
            collaborations, and creative projects with teams that value clean
            engineering and thoughtful design.
          </p>

          <div className="contact-info">
            {contactLinks.map((contact) => (
              <a key={contact.label} href={contact.href} className="contact-item" target={contact.href.startsWith("http") ? "_blank" : undefined} rel={contact.href.startsWith("http") ? "noreferrer" : undefined}>
                <div className="contact-icon" aria-hidden="true">
                  {contact.icon}
                </div>
                <div>
                  <small>{contact.label}</small>
                  <strong>{contact.value}</strong>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="contact-form-wrapper">
          <div className="form-header">
            <span>Contact Form</span>
            <h3>Send me a message</h3>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell me about your project, opportunity, or collaboration..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="send-button" disabled={sending}>
              {sending ? "Sending..." : "Send Message"}
            </button>

            {feedback.type === "success" && (
              <div className="success-message">{feedback.message}</div>
            )}

            {feedback.type === "error" && (
              <div className="error-message">{feedback.message}</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;