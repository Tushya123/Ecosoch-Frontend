import React, { Fragment } from "react";

function CommercialContactUs() {
  return (
    <Fragment>
      <div className="rts-contact-wrapper-form-area rts-section-gapBottom">
        <div className="container">
          <div className="row g-24">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="form--area">
                <div className="title-area-left">
                  <p className="pre">
                    <span>Feel Free</span> To COntact Us
                  </p>
                  <h2 className="title">Let’s Get in Touch</h2>
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
                      required
                    />
                    <input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      required
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
                    required
                  ></textarea>
                  <button className="rts-btn btn-primary">Get free quote</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CommercialContactUs;
