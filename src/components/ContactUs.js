import React, { Fragment } from "react";

function ContactUs() {
  return (
    <Fragment>
      <div className="rts-contact-wrapper-form-area rts-section-gapBottom">
        <div className="container">
          <div className="row g-24">
            <div className="col-lg-7 col-md-12 col-sm-12 col-12">
              <div className="form--area">
                <div className="title-area-left">
                  <p className="pre">
                    <span>Feel Free</span> To Contact Us
                  </p>
                  <p>
                    Talk To Us – We’re Here To Help Along With A Free Quote Dial
                    8123410101 to talk to us or fill in the form Our Solar
                    experts are here to help with anything related to Solar
                    energy
                  </p>
                </div>
                <div id="form-messages"></div>
                <form
                  id="contact-form"
                  action="https://html.themewant.com/solari/mailer.php"
                  method="post"
                  className="contact-page-form mt--30"
                >
                  <div className="name-email-wraper">
                    <input
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      required=""
                    />
                    <input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      required=""
                    />
                  </div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Select Subject"
                  />
                  <textarea
                    name="message"
                    placeholder="Type Your Message"
                    required=""
                  ></textarea>
                  <button className="rts-btn btn-primary">Send Message</button>
                </form>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
              <div className="map-area-wrapper">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.536637777085!2d77.57433827492004!3d13.065139687258856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae18197832a69f%3A0x8a289da7afb5ffb1!2sEcoSoch%20Solar!5e0!3m2!1sen!2sin!4v1707388245767!5m2!1sen!2sin"
                  width="700"
                  height="750"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ContactUs;
