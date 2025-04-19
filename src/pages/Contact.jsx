import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact";
  }, []);

  return (
    <div>
      <p>Contact Samson</p>
    </div>
  );
};

export default Contact;
