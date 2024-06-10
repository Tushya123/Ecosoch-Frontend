import React, { Fragment } from "react";

function ReferralCont() {
  return (
    <Fragment>
      <div className="referral-content">
        <div className="row ptb--50">
          <div className="col-6">
            <h1 className="title">OBJECTIVE</h1>
            <p className="disc">
              At EcoSoch Solar, we highly value our esteemed customers and
              believe in rewarding them when they refer our services to others.
              The objective of this referral policy is to encourage and reward
              our existing customers for referring new residential customers who
              purchase and install solar rooftop systems ranging from 1kWp to
              20kWp. Thus, we aim to harness the power of word-of-mouth
              marketing and incentivize our customers to become advocates for
              our company. This policy outlines the terms and conditions of our
              referral program to ensure transparency and fairness for all
              participants.
            </p>
          </div>
          <div className="col-6 text-center mt--50">
            <img
              src="assets\images\refer-a-friend-nz.jpg"
              alt=""
              width={"100%"}
            />
          </div>
        </div>

        <div className="title-new">
          <h1 className="title-tag">Eligibility</h1>
        </div>
        <p className="disc">
          <ol>
            <li>
              Only existing customers who have purchased and installed a solar
              rooftop system from our company are eligible to participate in the
              referral program.
            </li>
            <li>
              The referral program is applicable only for residential customers
              looking to install solar rooftop systems typically ranging from
              1kWp to 20kWp.
            </li>
            <li>
              Residential customers do not include Apartment Associations. It is
              only for individual households.
            </li>
            <li>
              For other sectors like Commercial, Industrial, Institutional,
              RWAs, etc., we have a separate referral policy, and you can
              contact us directly to understand about it.
            </li>
          </ol>
        </p>
        <div className="title-new">
          <h1 className="title-tag">Referral Process</h1>
        </div>
        <p className="disc">
          Existing customers who wish to participate in the referral program
          must provide full details (name, contact details, and address) of the
          potential new customer to any of our employees or representatives.
        </p>
        <p className="disc">
          The referral must be submitted before the potential new customer
          contacts our company directly or before they make any inquiries
          related to the solar rooftop installation.
        </p>
        <p className="disc">
          The existing customer would be kept in the loop when we are dealing
          with the potential new customer.
        </p>
        <div className="reward mt--100">
          <span className="stok-bg images-r">Rewards</span>
          <div className="title-new">
            <h1 className="title-tag">Reward Structure</h1>
          </div>
          <br />
          <br />
          <h6>Option 1 :</h6>
          <p className="disc">
            For each successful referral that results in the purchase and
            installation of a solar rooftop system, the referring customer will
            receive a referral fee of <b>Rs 5000</b>, by default.
          </p>
          <p className="disc">
            Referral fee will be paid to the referrers within 30 days of the
            referred customer’s solar rooftop system installation completion and
            after full payment is received by EcoSoch Solar.
          </p>
          <h6>Option 2 :</h6>
          <p className="disc">
            The referring customer also has the option to choose certain
            maintenance services offered by EcoSoch if they do not prefer a
            referral fee. For example, cleaning of their solar panels once a
            month for a period of 3 months, inspection of their solar system
            once in a quarter for a year, etc.
          </p>
          <p className="disc">
            This will depend on the present solar system capacity of the
            referring customer. Please contact us directly so that we can
            provide you with a customised maintenance service based on your
            needs and our budget.
          </p>
        </div>
        <div className="tnc mt--100">
          <div className="row">
            <div className="col-lg-12">
              <div className="solari-title-area-three text-center">
                <span className="pre-title">Terms and Conditions</span>
              </div>
            </div>
          </div>
          <ol>
            <li>
              The referral fee would be credited to the bank account of the
              referring customer after deducting the mandatory taxes (TDS).
              Hence, the referring customer should provide the full details (PAN
              card, Bank account, etc.) to us for transferring the fee.
            </li>
            <li>
              EcoSoch reserves the right to modify or terminate the referral
              program at any time without prior notice. In the event of program
              termination, referral rewards for successful referrals made prior
              to the termination date will still be honoured and paid according
              to the terms outlined in this policy.
            </li>
            <li>
              Referral fees are non-transferable and cannot be exchanged for
              cash.
            </li>
            <li>
              In the case of multiple referrals for a single customer, the
              referring customer will receive separate rewards for each
              successful referral.
            </li>
            <li>
              Referring customers are responsible for ensuring that their
              referrals have given consent to share their contact information
              with our company.
            </li>
            <li>
              Our company reserves the right to verify the validity of the
              referral and reject any referral deemed fraudulent or not meeting
              the eligibility criteria.
            </li>
            <li>
              Our company reserves the right to provide the referral fee (Option
              1) in lieu of the maintenance service (Option 2) to the referring
              customer.
            </li>
            <li>
              In the event of any dispute regarding a referral’s validity or the
              referral fee amount, the decision of EcoSoch Solar will be final.
            </li>
          </ol>
        </div>
        <div className="promotion mt--100">
          <div className="row">
            <div className="col-lg-12">
              <div className="solari-title-area-three text-center">
                <span className="pre-title">Communication and Promotion</span>
              </div>
            </div>
          </div>
          <ol>
            <li>
              The referral program will be communicated to our existing
              customers through various channels, including email newsletters,
              social media platforms, and our company’s website.
            </li>
            <li>
              Existing customers will be provided with referral program details
              through these communication channels.
            </li>
            <li>
              Our company will track and update referring customers on the
              status of their referrals and inform them about their referral
              rewards once the installation process is successfully completed.
            </li>
          </ol>
          <p className="disc">
            By participating in the referral program, the referrer agrees to
            comply with the terms and conditions set forth in this policy. By
            implementing this referral policy, we aim to enhance customer
            satisfaction, generate new leads, and expand our residential
            customer base for solar rooftop installations in India.
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default ReferralCont;
