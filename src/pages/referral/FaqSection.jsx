import React from "react";
import Accordion from "react-bootstrap/Accordion";

export default function FaqSection() {
  return (
    <section className="faq-section py-5">
      <div className="container py-5">
        <h2 className="mb-4 text-white">FAQ</h2>

        <Accordion flush className="faq-accordion">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What if my referral only asks for a quote?</Accordion.Header>
            <Accordion.Body>
              No problem. If the project moves forward and is completed, you receive the reward.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Can I refer businesses or contractors?</Accordion.Header>
            <Accordion.Body>
              Yes. Builders, contractors, designers, and property managers often bring larger projects.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Is There a Limit?</Accordion.Header>
            <Accordion.Body>
              <p>No. You can submit <strong class="badge rounded-pill text-bg-dark">as many referrals as you like</strong>.</p>
              <p className="mb-0">
                Many people naturally know <strong class="badge rounded-pill text-bg-dark">friends, neighbors, coworkers, builders, or property owners</strong>{" "}
                who may need glass installation.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>When Do I Receive the Reward and How Is It Paid?</Accordion.Header>
            <Accordion.Body>
              <p>
                Referral rewards are sent <strong class="badge rounded-pill text-bg-dark">after the project is completed and fully paid</strong>.
              </p>

              <p className="mb-2">You can receive your payment via:</p>
              <ul className="mb-0">
                <li>Zelle</li>
                <li>PayPal</li>
                <li>Bank Transfer (ACH) — any transfer fees are the responsibility of the recipient.</li>
              </ul>

              <div className="mt-2"> <span class="badge rounded-pill text-bg-dark">  You can contact us anytime</span> to ask about the project progress or status. </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>What Projects Qualify?</Accordion.Header>
            <Accordion.Body>
              <p>
                Referral rewards apply to all <strong class="badge rounded-pill text-bg-dark">tempered glass installations</strong>, including:
              </p>

              <ul>
                <li>custom-sized and sliding shower doors</li>
                <li>glass railings</li>
                <li>custom mirrors</li>
                <li>glass shelving</li>
                <li>glass tabletops</li>
                <li>other custom glass projects</li>
              </ul>

              <p className="mb-0">
                Both <strong class="badge rounded-pill text-bg-dark">residential and commercial projects qualify</strong>.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>What If My Referral Needs Multiple Glass Installations?</Accordion.Header>
            <Accordion.Body>
              <p>No problem.</p>
              <p className="mb-0">
                If the project includes <strong class="badge rounded-pill text-bg-dark">multiple showers, railings, mirrors, or other glass installations</strong>,
                the reward is calculated based on the <strong class="badge rounded-pill text-bg-dark">total project value</strong>.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6">
            <Accordion.Header>Will you pressure or spam the person I refer?</Accordion.Header>
            <Accordion.Body>
              <p>
                No. We contact your referral <strong class="badge rounded-pill text-bg-dark">only to discuss their project and answer their questions</strong>.
              </p>
              <p>
                If they decide not to move forward, there is no obligation and no follow-up pressure.
              </p>
              <span class="badge rounded-pill text-bg-light text-dark-emphasis">
                We respect people’s time and treat every referral professionally.
              </span>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="7">
            <Accordion.Header>Do I need to be a customer to refer someone?</Accordion.Header>
            <Accordion.Body>
              <p>
                No. Anyone can submit a referral — homeowners, friends, neighbors, contractors, or business contacts.
              </p>
              <p className="mb-0">
                If the project is completed, the referral reward is issued to the person who submitted the referral.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
}
