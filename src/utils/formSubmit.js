const formEndpoint =
  "https://script.google.com/macros/s/AKfycbws8jIvjIe8slcEdG7gIDWbiyhb7iyW5CnwvbuTo8hb97BCLoGfZG_605yLSTDE8Lq20Q/exec";

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
