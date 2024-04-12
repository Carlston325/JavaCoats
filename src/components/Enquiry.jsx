import { useState } from "react";
import MailIcon from "@mui/icons-material/Mail";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";

function Enquiry(props) {
  const [userEnquiry, setUserEnquiry] = useState({
    subject: "",
    content: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setUserEnquiry((preValue) => {
      if (name === "subject") {
        return {
          subject: value,
          content: preValue.content,
        };
      } else {
        return preValue;
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

  return (
    <div className="enquiries">
      <h2>Ask Us Here</h2>
      <form>
        {isExpanded && (
          <input
            onChange={handleChange}
            value={userEnquiry.subject}
            name="subject"
            placeholder="Subject"
            required
          />
        )}

        <textarea
          onClick={expand}
          onChange={handleChange}
          name="content"
          value={userEnquiry.content}
          placeholder="Tell us..."
          rows={isExpanded ? 6 : 1}
          required
        />
        <Button
          onClick={(e) => {
            e.preventDefault();
            submitted();
            setUserEnquiry({ subject: "", content: "" });
          }}
          variant="text"
          className="btn"
        >
          <MailIcon />
        </Button>
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
