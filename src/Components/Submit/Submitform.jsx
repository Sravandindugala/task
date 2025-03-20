import { useState } from "react";
import "./Submitform.css";

function Submitform() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("https://admin.shopersbay.com/asapi/saveContact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data, "Test");
      if (data.status === "success") {
        setFormData({ name: "", email: "", phone: "", message: "", subject: ""});
        setStatus("Your form submitted successfully!");

      } else {
        setStatus("Error: " + data.message);
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
      console.error("Form Submission Error:", error);
    }

    setIsSubmitting(false);
  };

  return (
    <div id="submit" className="form-container">
      <h1 className="form-title">Enquiry now</h1>
      <form onSubmit={handleSubmit} className="form-body">
        <label className="form-label">Name*
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="form-input" required/>
        </label>
        <label className="form-label">Email*
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="form-input" required />
        </label>
        <label className="form-label">Phone*
          <input type="tel" name="phone" placeholder="Your Phone Number" value={formData.phone} onChange={handleChange} className="form-input" required/>
        </label>
        <label className="form-label">Message*
          <textarea name="message" placeholder="Your Message"  value={formData.message}  onChange={handleChange} className="form-textarea"  rows="4"  required></textarea>
        </label>
        <button type="submit" className="form-button" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
      {status && <p className="form-status">{status}</p>}
    </div>
  );
}

export default Submitform;