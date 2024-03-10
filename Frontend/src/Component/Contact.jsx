import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/send", {
        name,
        email,
        subject,
        message
      }, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json"
        }
      });
      toast.success(response.data.message);
      // Reset the form
      setName(""),
      setEmail(""),
      setSubject(""),
      setMessage("")
    } catch (err) {
      toast.error("Enter the Valid Details");
    }
  };

  return (
    <div className="contact container">
      <div className="banner">
        <div className="tem">
          <h4>Address</h4>
          <p>Anywhere, Any city, 4521</p>
        </div>
        <div className="tem">
          <h4>Call Us</h4>
          <p>Call Us: +91-9565153545</p>
        </div>
        <div className="tem">
          <h4>Mail Us</h4>
          <p>zk@gmail.com</p>
        </div>
      </div>
      <div className="banner">
        <div className="item">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57929.23355645912!2d67.01519255!3d24.8441321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e70a31f45a9%3A0x25e252450977ec12!2sSaddar%20Town%2C%20Karachi%2C%20Sindh!5e0!3m2!1sen!2s!4v1709099958323!5m2!1sen!2s"
            style={{ border: 0, width: "100%", height: "450px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="item">
          <form onSubmit={handleSendMessage}>
            <h2>Contact</h2>
            <div>
              <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
              <input type="email" placeholder="E-Mail" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
            <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
            <button type='submit'>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;