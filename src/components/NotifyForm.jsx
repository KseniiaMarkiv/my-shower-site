import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { Form, Button, Toast, ToastContainer } from 'react-bootstrap';


const NotifyForm = () => {
  const form = useRef();
  const [showToast, setShowToast] = useState(false);
  const [toastVariant, setToastVariant] = useState(null);
  const [toastMessage, setToastMessage] = useState("");


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setToastVariant("info");
          setToastMessage("Thanks! We'll notify you.");
          setShowToast(true);
          e.target.reset();
        },
        (error) => {
          setToastVariant("danger");
          setToastMessage("Something went wrong. Try again.");
          setShowToast(true);
        }
      );

  };

  return (
    <>
      <Form ref={form} onSubmit={sendEmail} className="email-form w-100">
        <Form.Group
          className="d-flex flex-column flex-sm-row w-100"
          controlId="formBasicEmail"
        >
          <Form.Control
            type="email"
            name="user_email"
            placeholder="Enter your email to stay updated"
            className="email-input mb-2 mb-sm-0"
            required
            autoComplete="email"
          />
          <Button
            variant="primary"
            type="submit"
            className="notify-button ms-sm-2"
            size="sm"
          >
            Notify Me
          </Button>
        </Form.Group>
      </Form>

      <ToastContainer position="top-end" className="p-3">
        <Toast
          bg={toastVariant}
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={4000}
          autohide
          animation
        >
          <Toast.Body className={toastVariant === "danger" ? "text-white" : ""}>
            {toastMessage}
          </Toast.Body>
        </Toast>
      </ToastContainer>

    </>
  );
};

export default NotifyForm;
