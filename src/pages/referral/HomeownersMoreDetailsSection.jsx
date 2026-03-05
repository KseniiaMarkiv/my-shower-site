import { Button } from "react-bootstrap";

export default function HomeownersMoreDetailsSection() {
  return (
    <section id="home-ref-details" className="container py-5">
      <hr></hr>

      <h2 className="mb-3 mt-5">More Details</h2>

      <h3 className="mb-3">How Referral Rewards Work</h3>

      <p className="mb-4">
        Your referral reward depends on the <strong>total value of the completed project</strong>. <br></br>
        Once the installation is finished and the project is fully paid, you receive a{" "}
        <strong>percentage of the project value</strong> as a thank-you for connecting us.
      </p>

      <h4>Reward Structure</h4>

      <ul>
        <li><strong>$1,000 – $2,000 project → 3% reward</strong></li>
        <li><strong>$2,000 – $5,000 project → 5% reward</strong></li>
        <li><strong>$5,000 – $7,000 project → 7% reward</strong></li>
        <li><strong>$7,000+ project → 10% reward</strong></li>
      </ul>

      <div className="info-card mb-5 mt-4 bounce-anim">
        💡The larger the project, the higher your reward.
      </div>

      <h3>Example Referral Rewards</h3>

      <p>Here are a few examples to help you understand how rewards are calculated.</p>

      <ul>
        <li><strong>$1,500 project → $45 reward</strong></li>
        <li><strong>$2,500 project → $125 reward</strong></li>
        <li><strong>$4,000 project → $200 reward</strong></li>
        <li><strong>$6,000 project → $420 reward</strong></li>
        <li><strong>$8,000 project → $800 reward</strong></li>
      </ul>

      {/* BLUE CARD */}
      <div className="info-card mb-5 mt-4 bounce-anim">
        💡 Some projects include <strong>multiple showers, railings, mirrors, or other glass installations</strong>, 
        which can increase the total project value — and your reward.
      </div>

      <h3>What Projects Qualify?</h3>

      <p>
        Referral rewards apply to all <strong>tempered glass installations</strong>, including:
      </p>

      <ul>
        <li>custom-sized or sliding shower doors</li>
        <li>glass railings</li>
        <li>custom mirrors</li>
        <li>glass shelving</li>
        <li>glass tabletops</li>
        <li>other custom glass projects</li>
      </ul>

      <p>Both <strong>residential and commercial projects</strong> qualify.</p>

      <h3>When Do I Receive the Reward?</h3>

      <p>
        Referral rewards are sent <strong>after the project is completed and fully paid</strong>.
      </p>

      <p> You can receive your payment via:</p>

      <ul>
        <li><strong>Zelle</strong></li>
        <li><strong>PayPal</strong></li>
        <li><strong>Bank Transfer (ACH)</strong > - <em> any transfer fees are the responsibility of the recipient. </em></li>
      </ul>

      <h3>Is There a Limit?</h3>

      <p>No. <br></br>
        You can submit <strong>as many referrals as you like</strong>. <br></br>
        Many people naturally know <strong>friends, neighbors, coworkers, builders, or property owners</strong> who may need glass installation. <br></br>
        Each successful project can bring you <strong>another thank-you reward.</strong></p>

      <h3>Small Reminder</h3>

      <p>You don’t need to sell anything or manage the project.<br></br>
         Just <strong>connect us with someone who needs glass installation</strong>, and we’ll handle the rest.
      </p>

      {/* CTA CARD */}
      <div className="info-card mt-5 bounce-anim">
        👉 <strong>Know someone planning a shower or glass project?</strong>
        <div className="mt-2">
          Click{" "}
          <Button
            href="https://forms.gle/Msag9tCogpx8JuSu5"
            target="_blank"
            rel="noopener noreferrer"
            variant="dark"
            className="bounce-anim py-1 px-3 mx-1"
            style={{ borderRadius: 0 }}
          >
            Submit a Referral
          </Button>{" "}
          — it only takes <strong>30 seconds.</strong>
        </div>
      </div>

    </section>
  );
}