import React from "react";
import Layout from "../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact Us"}>
      <div className="container">
        <div className="row contactus align-items-center">

          {/* IMAGE */}
          <div className="col-md-6">
            <img
              src="/images/contactus.jpeg"
              alt="Contact us"
              style={{ width: "100%" }}
            />
          </div>

          {/* CONTENT */}
          <div className="col-md-6">
            <h1 className="bg-dark p-2 text-white text-center">
              CONTACT US
            </h1>

            <p className="mt-3">
              Any query or information about products, feel free to call anytime.
              We are available 24×7.
            </p>

            <p className="mt-3">
              <BiMailSend /> : help@ecommerceapp.com
            </p>

            <p className="mt-3">
              <BiPhoneCall /> : 012-3456789
            </p>

            <p className="mt-3">
              <BiSupport /> : 1800-0000-0000 (Toll Free)
            </p>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default Contact;