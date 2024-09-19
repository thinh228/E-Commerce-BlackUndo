import React, { useState } from "react";
import "./ContactPage.css";

const ContactPage = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setmessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank You ${name} for Contacting Us. We will Get Back to You Soon.\n\nYour Mail Id - ${email}.\nYour Message is - ${message}`
    );
    setname("");
    setEmail("");
    setmessage("");
  };

  return (
    <>
      <div className="contactSection">
        <h2>Contact Us</h2>
        <div className="contactMap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27759.540103925807!2d108.21070027106379!3d16.00215076083791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421a141e395e83%3A0xaa04b2c618d0b01f!2zMTk1IMSQw7QgxJDhu5FjIEzhu5ljLCBIb8OgIFh1w6JuLCBD4bqpbSBM4buHLCDEkMOgIE7hurVuZyA1NTAwMDAsIFZp4buHdCBOYW0!5e1!3m2!1svi!2s!4v1725819947952!5m2!1svi!2s"
            width="800"
            height="600"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="uomomap"
          ></iframe>
        </div>
        <div className="contactInfo">
          <div className="contactAddress">
            <div className="address">
              <h3>Store Address:</h3>
              <p>
                195 Đô Đốc Lộc, Hòa Xuân, Cẩm Lệ, TP Đà Nẵng
                <br /> Viet Nam 
              </p>
              <p>
                thinhtran.22082004@gmail.com
                <br />
                +84 789 855 029 🇻🇳
              </p>
            </div>
          </div>
          <div className="contactForm">
            <h3>Get In Touch</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={name}
                placeholder="Name *"
                onChange={(e) => setname(e.target.value)}
                required
              />
              <input
                type="email"
                value={email}
                placeholder="Email address *"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <textarea
                rows={10}
                cols={40}
                placeholder="Your Message"
                value={message}
                onChange={(e) => setmessage(e.target.value)}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;