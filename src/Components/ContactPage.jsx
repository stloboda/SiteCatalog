import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <section className="contact" id="contact">
      <div className="content">
        <h1>Contact Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="container">
        <div className="contact-info">
          <div className="box">
            <div className="icon">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="text">
              <h3>Adress</h3>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className="text">
              <h3>Phone</h3>
              <p>+ 380 95 4783 675</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="text">
              <h3>Email</h3>
              <p>yddieimem@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <h2>Send Message</h2>
            <div className="input-box">
              <input type="text" name="" required="required" />
              <span>Full Name</span>
            </div>
            <div className="input-box">
              <input type="text" name="" required="required" />
              <span>Email</span>
            </div>
            <div className="input-box">
              <input type="text" name="" required="required" />
              <span>Type message</span>
            </div>
            <div className="input-box">
              <input className="btn-form" type="submit" name="" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
