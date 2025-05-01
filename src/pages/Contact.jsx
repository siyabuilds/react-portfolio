import { useEffect } from "react";
import ContactForm from "../components/ContactForm";
import SocialLinks from "../components/SocialLinks";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact";
  }, []);

  return (
    <section className="min-h-screen px-4 py-12 text-[var(--foreground)]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Column: Contact Form */}
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-4 text-[var(--primary)]">
            Let’s Connect
          </h2>
          <p className="mb-6">
            Feel free to reach out about opportunities, ideas, or just to say
            hi.
          </p>
          <ContactForm />
        </div>

        {/* Right Column: Social Links */}
        <div className="w-full">
          <h3 className="text-2xl font-semibold mb-4 text-[var(--primary)]">
            Find Me Online
          </h3>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default Contact;
