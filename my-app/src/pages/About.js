import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About Us - Ecommerce App"}>
      <div className="container">
        <div className="row contactus align-items-center">

          {/* IMAGE */}
          <div className="col-md-6">
            <img
              src="/images/about.jpeg"
              alt="About us"
              style={{ width: "100%" }}
            />
          </div>

          {/* CONTENT */}
          <div className="col-md-6">
            <p className="text-justify mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              officiis obcaecati esse tempore unde ratione, eveniet mollitia,
              perferendis eius temporibus dicta blanditiis doloremque explicabo
              quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
              accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
              commodi illum quidem neque tempora nam.
            </p>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default About;