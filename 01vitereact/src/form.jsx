import React, { useState } from "react";
import "./App.css"; 

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    if (!formData.name || !formData.email || !formData.feedback) {
      setError("Please fill out all fields");
      return;
    }

    console.log("Feedback Submitted:", formData);
    alert(`Thank you for your feedback, ${formData.name}!`);


    setFormData({ name: "", email: "", feedback: "" });
    setError("");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Feedback Form</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <textarea
          name="feedback"
          placeholder="Your Feedback"
          value={formData.feedback}
          onChange={handleChange}
        ></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
