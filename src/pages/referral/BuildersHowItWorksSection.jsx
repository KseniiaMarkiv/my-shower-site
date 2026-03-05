import React from "react";
import TypeOnScroll from "../../components/TypeOnScroll";
import { Button } from "react-bootstrap";

export default function BuildersHowItWorksSection() {
  return (
    <section id="how-it-works" className="container py-5">

      {/* Title */}
      <div className="mt-4">
        <h2 className="mb-3">How It Works</h2>

        {/* Intro */}
        <div className="mb-5">
          <p className="mb-3">
            Working with <strong>MyGlassStyle</strong> is simple for contractors,
            builders, designers, and property managers. <br></br>
          
            We specialize in <strong> tempered glass installations</strong>,
            allowing you to stay focused on your main construction work while
            we handle the glass portion of the project. <br></br>
         
            Our goal is to provide reliable coordination, clear communication,
            and professional installation so your project can move forward
            smoothly.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="row g-4">

        {/* Step 1 */}
        <div className="col-12 col-lg-4">
          <div className="p-4 border h-100 shadow-sm">

            <h3 className="h5 mb-3">Step 1 — Contact Our Team</h3>

            <p className="mb-3">
              Reach out to our team and tell us a little about your project
              or the type of work you typically handle.
            </p>

            <p className="mb-3">
              <strong class="badge-wrap rounded-pill text-bg-dark mb-2">Text messaging is usually the fastest way to connect and coordinate project details. </strong> 
              It allows us to quickly exchange photos, measurements, and key information so both sides can better understand the project scope and potential collaboration.
            </p>

            <hr className="w-75"></hr>
            <figure>
              <blockquote class="blockquote-custom">
                <p>I don’t believe in high-pressure or rushed decisions — especially during the first contact, 
                  when we’re simply reviewing the project and possible terms of cooperation. My goal is clear communication, 
                  quick estimates, and a practical path forward for both sides.</p>
              </blockquote>
              <figcaption class="blockquote-footer text-end mt-1">
                Founder, <br/> Kseniia Markiv
              </figcaption>
            </figure>

          </div>
        </div>

        {/* Step 2 */}
        <div className="col-12 col-lg-4">
          <div className="p-4 border h-100 shadow-sm">

            <h3 className="h5 mb-3">Step 2 — Project Review & Estimate</h3>

            <p className="mb-3">
              Once we receive the project information, our team reviews the
              details and evaluates the scope of work.
            </p>

            <p className="mb-2">At this stage we focus on:</p>

            <ul className="mb-3">
              <li>understanding the project requirements</li>
              <li>estimating installation costs</li>
              <li>discussing possible timelines</li>
              <li>determining the best glass solution</li>
            </ul>

            <p className="mb-0">
              This step helps contractors clearly understand pricing,
              scope, and available options before moving forward.
            </p>

          </div>
        </div>

        {/* Step 3 */}
        <div className="col-12 col-lg-4">
          <div className="p-4 border h-100 shadow-sm">

            <h3 className="h5 mb-3">Step 3 — Project Completion</h3>

            <p className="mb-3">
              After everything is confirmed, our team coordinates the
              process from start to finish.
            </p>

            <p className="mb-2">We handle:</p>

            <ul className="mb-3">
              <li>measurements</li>
              <li>glass supply</li>
              <li>professional installation</li>
            </ul>

            <p className="mb-0">
              For contractors, this means less coordination and fewer
              responsibilities while still delivering a professional
              glass installation for your client.
            </p>

          </div>
        </div>

      </div>

      <div className="mt-4 p-4 border shadow-sm">
        <h3 className="h5 mb-3">Want to see how contractor rewards and partnership benefits work?</h3>
        <p className="mb-0">
          👉 Click{" "}
          <Button
            href="#builder-more-details"
            variant="dark"
            className="bounce-anim py-1 px-3 mx-2"
            style={{ borderRadius: 0 }}
          >
            More Details
          </Button>{" "}
          - you’ll find referral percentages, partnership benefits, and project examples.
        </p>
      </div>

    </section>
  );
}