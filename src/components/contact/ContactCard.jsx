import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const ContactCard = () => {
  return (
    <section style={{ padding: "9rem 0 5rem 0", color: "#1eb2a6", background: "white" }}>
      <div style={{ backgroundColor: "#1eb2a6", padding: "1rem 0" }}>
        <h1 style={{ color: "white", textAlign: "center" }}>Get in Touch</h1>
      </div>

      <div style={{ marginTop: "3rem", textAlign: "center" }}>
        <div style={{ marginTop: "2.5rem", display: "flex", justifyContent: "center" }}>
          <div style={{ maxWidth: "60%", margin: "auto" }}>
            <form action="#" method="POST" style={{ margin: "auto" }}>
              <div style={{ display: "flex", gap: "2%" }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  autoComplete="off"
                  required
                  style={ {height: "40px"} }
                />

                <input
                  type="email"
                  name="Email"
                  placeholder="Email"
                  autoComplete="off"
                  required
                  style={ {height: "40px"} }
                />
              </div>

              <textarea
                name="message"
                cols="30"
                rows="6"
                autoComplete="off"
                placeholder="Message"
                required
                style={{ marginTop: "18px", width: "800px", textAlign: "center"}}
              ></textarea>

              <input
                type="submit"
                value="Send"
                style={{ marginTop: "2rem", marginBottom: "3.5rem", cursor: "pointer", transition: "all 0.2s", backgroundColor: "#1eb2a6", color: "white", padding: "1rem 2rem", border: "none", borderRadius: "4px" }}
              />
            </form>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#1eb2a6", padding: "1rem 0" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "6rem" }}>
          <div>
            <h2 style={{ color: "white", textAlign: "center" }}><FaEnvelope /> EMAIL US</h2>
            <p style={{ color: "white", textAlign: "center" }}>oggntech@gmail.com</p>
          </div>
          <div>
            <h2 style={{ color: "white", textAlign: "center" }}><FaPhone /> Call Us</h2>
            <p style={{ color: "white", textAlign: "center" }}>+91 7039922863 | +91 9821157634</p>
          </div>
        </div>
      </div>

      <h1 style={{ backgroundColor: "white", padding: "1rem 0", marginTop: "2rem", color: "#1eb2a6", textAlign: "center", fontSize: "40px" }}><FaMapMarkerAlt /> Reach us Here</h1>

      <div style={{ margin: "0.2rem", display: "flex", justifyContent: "center" }}>
        <iframe
        title="Hello"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15092.261454200794!2d73.028075!3d18.9727205!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa23e35a8a4d00a2d%3A0x43c5b4c6549e2380!2soggntech!5e0!3m2!1sen!2sin!4v1686807602588!5m2!1sen!2sin"
          width="80%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          align="center"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactCard;
