import { useState } from "react";
import axios from "axios";
import { Form, Button, Toast, ToastContainer } from "react-bootstrap";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";


const NotifyForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVariant, setToastVariant] = useState("info");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const normalizedEmail = email.trim().toLowerCase();

    try {
      const res = await axios.post(`${API_URL}/api/v1/subscribers`, {
        subscriber: { email: normalizedEmail },
      });

      if (res.status === 201 || res.status === 200) {
        setStatus("success");
        setToastVariant("info");
        setToastMessage("Thanks! We'll notify you.");
        setEmail(""); // clear input on success
      }
    } catch (err) {
      if (err.response?.status === 422) {
        setStatus("duplicate");
        setToastVariant("warning");
        setToastMessage("You've already subscribed.");
      } else {
        setStatus("error");
        setToastVariant("danger");
        setToastMessage("Something went wrong.");
      }
    } finally {
      setShowToast(true);
      setLoading(false);
    }
  };

  const isDisabled = loading || status === "success" || status === "duplicate";

  return (
    <>
      <Form onSubmit={handleSubmit} className="email-form w-100">
        <Form.Group className="d-flex flex-column flex-sm-row w-100">
          <Form.Control
            type="email"
            placeholder="Enter your email to stay updated"
            className="email-input mb-2 mb-sm-0"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isDisabled}
          />
          <Button
            variant={isDisabled ? "secondary" : "primary"}
            type="submit"
            className="notify-button ms-sm-2"
            size="sm"
            disabled={isDisabled}
          >
            {isDisabled ? "Subscribed" : "Notify Me"}
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
