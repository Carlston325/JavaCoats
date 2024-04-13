import { useState } from "react";
import MailIcon from "@mui/icons-material/Mail";
import BTN from "./BTN";
import CheckIcon from "@mui/icons-material/Check";

function Enquiry(props) {
  const [userEnquiry, setUserEnquiry] = useState({
    email: "",
    subject: "",
    content: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setUserEnquiry((preValue) => {
      if (name === "email") {
        return {
          email: value,
          subject: preValue.subject,
          content: preValue.content,
        };
      } else if (name === "subject") {
        return {
          email: preValue.email,
          subject: value,
          content: preValue.content,
        };
      } else if (name === "content") {
        return {
          email: preValue.email,
          subject: preValue.subject,
          content: value,
        };
      }
    });
  }

  const [isExpanded, setIsExpanded] = useState(false);
  function expand() {
    setIsExpanded(true);
  }

  const [isSubmitted, setIsSubmitted] = useState(false);
  function submitted() {
    setIsSubmitted(true);
  }

  function inputs() {
    return (
      <>
        <input
          onChange={handleChange}
          value={userEnquiry.email}
          name="email"
          placeholder="Your email"
          required
        />
        <input
          onChange={handleChange}
          value={userEnquiry.subject}
          name="subject"
          placeholder="Subject"
          required
        />
      </>
    );
  }

  return (
    <div
      className="enquiries"
      style={{ height: isExpanded ? "416px" : "216px" }}
    >
      <h2>Ask Us Here</h2>
      <form>
        {isExpanded && inputs()}

        <textarea
          onClick={expand}
          onChange={handleChange}
          name="content"
          value={userEnquiry.content}
          placeholder="Your message..."
          rows={isExpanded ? 10 : 4}
          required
        />
        <BTN
          style={{ top: isExpanded ? "-10%" : "-24%" }}
          onClick={(e) => {
            e.preventDefault();
            submitted();
            setUserEnquiry({ email: "", subject: "", content: "" });
          }}
          variant="text"
        >
          <MailIcon />
        </BTN>
        {isSubmitted && (
          <p>
            <CheckIcon /> SUBMITTED
          </p>
        )}
      </form>
    </div>
  );
}

export default Enquiry;
