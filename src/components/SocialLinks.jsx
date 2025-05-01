import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    url: "https://github.com/markuptitan",
    display: "github.com/markuptitan",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://linkedin.com/in/bytedojo",
    display: "linkedin.com/in/bytedojo",
  },
  {
    name: "Twitter",
    icon: <FaTwitter />,
    url: "https://twitter.com/markuptitan",
    display: "twitter.com/markuptitan",
  },
  {
    name: "Email",
    icon: <FaEnvelope />,
    url: "mailto:samsonlukhele76@gmail.com",
    display: "samsonlukhele76@gmail.com",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp />,
    url: "https://wa.me/27734418978?text=Hi%20there,%20Samson.%20I%20wish%20to%20...",
    display: "Chat on WhatsApp",
  },
  {
    name: "Location",
    icon: <FaMapMarkerAlt />,
    url: "https://www.google.com/search?q=Daveyton+1520",
    display: "Daveyton, 1520",
  },
];

const SocialLinks = () => {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-xl font-semibold text-[var(--foreground)]">
        Connect with me:
      </h3>

      <ul className="space-y-4">
        {socialLinks.map(({ name, icon, url, display }) => (
          <li key={name} className="group">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-[var(--foreground)] text-lg hover:text-[var(--primary)] transition-colors duration-300 relative pb-1"
            >
              <span className="bg-[var(--foreground)] text-[var(--background)] rounded-full p-2 text-lg">
                {icon}
              </span>
              <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--primary)] group-hover:after:w-full after:transition-all after:duration-300 after:origin-right group-hover:after:origin-left">
                {display}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SocialLinks;
