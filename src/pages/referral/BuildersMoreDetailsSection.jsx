import { Button } from "react-bootstrap";

export default function BuildersMoreDetailsSection() {
  return (
    <section id="builder-more-details" className="container py-5">
      <hr></hr>

      <h2 className="mb-3 mt-5">More Details</h2>

      <h3 className="mb-3">Volume-Based Partnership Benefits</h3>

      <p className="mb-4">
        Contractors receive the <strong>same referral reward structure</strong> as individual participants, <span> </span>
        <u>with the additional benefit of potential supplier discounts </u> as project volume increases. <br></br>
        Some of our <strong>glass and hardware suppliers</strong> offer their own volume programs.
        As project volume increases, these supplier programs may allow us to receive{" "}
        <strong>better material pricing</strong> — which can further improve overall project conditions and
        partnership benefits.<br></br>
        Your reward depends on the <strong>total value of the completed project</strong>, and is paid after
        completion and full payment.
      </p>

      <h4>Current Reward Levels</h4>

      <ul>
        <li><strong>$1,000 – $2,000 project → 3% reward</strong></li>
        <li><strong>$2,000 – $5,000 project → 5% reward</strong></li>
        <li><strong>$5,000 – $7,000 project → 7% reward</strong></li>
        <li><strong>$7,000+ project → 10% reward</strong></li>
      </ul>

      <div className="info-card mb-5 mt-4 bounce-anim">
        💡 Higher project value = higher reward. <br></br>
        Commercial projects can be significantly larger, which means higher payouts.
      </div>

      <h3 className="mb-3">Higher Volume = Better Partnership Conditions</h3>

      <p className="mb-4">
        For contractors who bring <strong>consistent or higher project volume</strong>, partnership conditions
        may also be reviewed and improved.
      </p>

      <p className="mb-2">Higher volume can lead to:</p>

      <ul>
        <li>better partner pricing</li>
        <li>priority scheduling</li>
        <li>flexible project coordination</li>
        <li>volume-based discounts</li>
      </ul>

      <div className="info-card mb-5 mt-4 bounce-anim">
        💡 Partnership terms are usually reviewed individually, based on <strong>monthly volume</strong> and
        <strong> long-term cooperation</strong>.
      </div>

      <h3 className="mb-3">What Projects We Work With</h3>

      <p className="mb-3">
        Our team specializes in <strong>tempered glass installations</strong>, including:
      </p>

      <ul>
        <li>frameless shower doors</li>
        <li>glass railings</li>
        <li>custom mirrors</li>
        <li>glass shelving</li>
        <li>glass tabletops</li>
        <li>other custom glass projects</li>
      </ul>

      <p className="mb-0">
        We work with both <strong>residential and commercial projects</strong> across New Jersey.
      </p>

      {/* CTA CARD */}
      <div className="info-card mt-5 bounce-anim">
        👉 <strong>Want to discuss a project or partnership?</strong>
        <div className="mt-2">
          Click{" "}
          <Button
            href={`mailto:myglassstyle@gmail.com?subject=Partnership%20Program%20Inquiry&body=IMPORTANT:%0AIf%20you%20have%20drawings%2C%20pictures%2C%20or%20plans%2C%20please%20attach%20them%20to%20this%20email.%20It%20helps%20us%20review%20your%20request%20and%20respond%20faster.%0A%0AIf%20some%20information%20is%20not%20available%20yet%2C%20you%20can%20leave%20it%20blank.%20We%20will%20review%20your%20message%20and%20follow%20up%20if%20additional%20details%20are%20needed.%0A%0A1)%20I%20AM:%0A%5B%20%5D%20General%20contractor%0A%5B%20%5D%20Builder%0A%5B%20%5D%20Designer%0A%5B%20%5D%20Property%20manager%0A%5B%20%5D%20Other%0A%0A2)%20PROJECT%20TYPE:%0A%5B%20%5D%20Shower%0A%5B%20%5D%20Glass%20railing%0A%5B%20%5D%20Mirror%0A%5B%20%5D%20Glass%20shelving%0A%5B%20%5D%20Glass%20tabletop%0A%5B%20%5D%20Other%20custom%20glass%20project%0A%0A3)%20PROJECT%20DETAILS:%0AWidth%20(inches)%20-%0AHeight%20(inches)%20-%0ACount%20-%0AZIP%20code%20of%20the%20project%20-%0A%0A4)%20TIMELINE%20(optional):%0A%5B%20%5D%20ASAP%0A%5B%20%5D%201%E2%80%932%20weeks%0A%5B%20%5D%201%20month%0A%5B%20%5D%20Planning%20stage%0A%0A5)%20YOUR%20QUESTION%20(optional):`}
            variant="dark"
            className="bounce-anim py-1 px-3 mx-1"
            style={{ borderRadius: 0 }}
          >
            Contact Us
          </Button>{" "}
          — and send us a quick message on email with the project details.
        </div>
        <div className="mt-2 contact-alt">
          or you can text us on{" "}
          <a
            href="https://wa.me/18483528480"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link"
          >
            WhatsApp
          </a>{" "}
          or{" "}
          <a href="sms:+18483528480" className="sms-link">
            (848) 352-8480
          </a>
        </div>
      </div>
    </section>
  );
}