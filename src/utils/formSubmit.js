const formEndpoint =
  "https://formspree.io/f/xzzpggjp";

export const submitFormData = async (formData) => {
  try {
    const response = await fetch(formEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    return result.status;
  } catch (err) {
    console.error("Form submission error:", err);
    return "error";
  }
};
