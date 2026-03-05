import React from "react";
import { Button } from "react-bootstrap";
import TypeOnScroll from "../../components/TypeOnScroll";

export default function HomeownersHowItWorksSection() {
  return (
    <section id="how-it-works" className="container py-5">
      <div className="mt-4">
        {/* Title */}
        <h2 className="mb-3">How It Works</h2>

        {/* Intro text (full container width) */}
        <div className="mb-5">
          <p className="mb-3">
            Most people already recommend good contractors to their friends,
            neighbors, or coworkers. It’s normal. When someone asks, <em> “Do you know
            a good glass installer?” </em> — you simply share the name of someone you
            trust. With the <strong class="fw-bold"> MyGlassStyle Referral Bonus </strong>, those everyday
            recommendations can now come with a <strong class="fw-bold"> small thank-you reward. </strong>
          </p>

          <p className="mb-0">
            👉 If someone you know is planning a tempered glass project (shower
            installation, glass railing, mirrors, shelving, or other custom glass
            work) you can simply <strong class="fw-bold"> send us their contact information. </strong>
          </p>
        </div>
      </div>

      {/* Steps (3 columns like your code) */}
      <div className="row g-4">
        {/* Step 1 */}
        <div className="col-12 col-lg-4">
          <div className="p-4 border h-100 shadow-sm">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h3 className="h5 mb-0">Step 1 - Submit a Referral</h3>
              <span className="badge text-bg-light border">takes ~30 sec</span>
            </div>

            <p className="mb-3">
              Click{" "}
              <Button
                href="https://forms.gle/Msag9tCogpx8JuSu5"
                target="_blank"
                rel="noopener noreferrer"
                variant="dark"
                className="bounce-anim py-1 px-3 btn-sm mx-2"
                style={{ borderRadius: 0 }}
              >
                Submit a Referral
              </Button>{" "}
              and fill out a short form.
            </p>

            <p className="mb-2">We only ask for:</p>
            <ul className="mb-3">
              <li>Your full name</li>
              <li>Your contact information</li>
              <li>Your referral’s full name</li>
              <li>Your referral’s contact information</li>
            </ul>
              <hr className="w-75"></hr>
            <figure>
              <blockquote class="blockquote-custom">
                <p>Texting is the preferred way to connect (WhatsApp, email, or
                messaging), because it’s a convenient way to discuss
                measurements, send project photos, and keep a record of the
                conversation.</p>
              </blockquote>
              <figcaption class="blockquote-footer text-end mt-1">
                Founder’s Recommendation, <br/> Kseniia Markiv
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Step 2 */}
        <div className="col-12 col-lg-4">
          <div className="p-4 border h-100 shadow-sm">
            <h3 className="h5 mb-4">Step 2 - We Take Care of Everything</h3>

            <p className="mb-3">
              After receiving the referral, our team contacts both you and your
              referral. From there we handle the entire process:
            </p>

            <ul className="mb-0">
              <li>Consultation</li>
              <li>Measurements</li>
              <li>Glass supply</li>
              <li>Professional installation</li>
            </ul>

            <p className="mt-3 mb-0">You don’t need to manage anything.</p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="col-12 col-lg-4">
          <div className="p-4 border h-100 shadow-sm">
            <h3 className="h5 mb-3">Step 3 - Receive Your Thank-You Reward</h3>

            <p className="mb-0">
              When the project is completed and fully paid, you receive a
              referral reward as a thank-you for connecting us. A recommendation
              that used to be just friendly advice can now become a pleasant
              bonus.
            </p>
          </div>
        </div>
      </div>

      <div className="my-4 font-monospace text-primary">
        <TypeOnScroll
          text={`That’s it.
      The whole process takes less than a minute.`}
          speed={25}
        />
      </div>

      {/* Full-width block under steps */}
      <div className="mt-4 p-4 border shadow-sm">
        <h3 className="h5 mb-3">Want to see how rewards are calculated?</h3>
        <p className="mb-0">
          👉 Click{" "}
          <Button
            href="#home-ref-details"
            variant="dark"
            className="bounce-anim py-1 px-3 mx-2"
            style={{ borderRadius: 0 }}
          >
            More Details
          </Button>{" "}
          - there you’ll find reward percentages, project examples, and earning
          scenarios.
        </p>
      </div>
    </section>
  );
}