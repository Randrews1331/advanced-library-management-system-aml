import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Navbar from '../Components/Navbar';
import '../CSS/support.css';

const Support = () => {
  const [formData, setFormData] = useState({
    from_name: '', // Sender's name
    message: '', // Message content
    email: '', // Sender's email
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log form data to the console for debugging purposes
    console.log("Form Data Submitted:", formData);

    emailjs
      .send(
        'service_fehfykt', // Service ID
        'template_wk3jz8m', // Template ID
        {
          from_name: formData.from_name, // Sender's name
          message: formData.message, // Message content
          email: formData.email, // Sender's email (if you decide to use it)
        },
        'hD8pRTXUu_AXwtp6-' // Public Key
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully!');
          setFormData({ from_name: '', message: '', email: '' }); // Reset form
        },
        (error) => {
          console.error('FAILED...', error);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <div>
      <Navbar />
      <div className="support-container">
        <h1>Contact Support</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="from_name">Your Name</label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Support;
