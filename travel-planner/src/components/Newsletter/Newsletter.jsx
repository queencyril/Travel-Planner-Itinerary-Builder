import React, { useState } from "react";
import './Newsletter.css'

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter a valid email!");
    alert(`Thanks for subscribing with ${email}!`);
    setEmail("");
  };

  return (
    <section className="newsletter">
      <h2>Subscribe to our Newsletter</h2>
      <p>Get the latest travel deals and updates straight to your inbox.</p>
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};

export default Newsletter;
