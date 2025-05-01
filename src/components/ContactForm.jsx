import { useState } from "react";
import { submitFormData } from "./../utils/formSubmit";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const result = await submitFormData(formData);
      setStatus(result === "success" ? "success" : "error");
      if (result === "success") {
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-5"
    >
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium mb-1 text-[var(--foreground)]"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 bg-[var(--background)] text-[var(--foreground)] border-2 border-[var(--primary)] rounded-md focus:outline-none"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium mb-1 text-[var(--foreground)]"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 bg-[var(--background)] text-[var(--foreground)] border-2 border-[var(--primary)] rounded-md focus:outline-none"
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium mb-1 text-[var(--foreground)]"
        >
          Message
        </label>
        <textarea
          name="message"
          required
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 bg-[var(--background)] text-[var(--foreground)] border-2 border-[var(--primary)] rounded-md focus:outline-none resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-[var(--primary)] text-white py-2 px-6 rounded-lg font-medium transition hover:opacity-90 disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {/* Status Message */}
      {status !== "idle" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-sm mt-2 ${
            status === "success" ? "text-green-500" : "text-red-500"
          }`}
        >
          {status === "success"
            ? "Message sent successfully!"
            : "Something went wrong. Please try again."}
        </motion.div>
      )}
    </motion.form>
  );
};

export default ContactForm;
