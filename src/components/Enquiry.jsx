import { useState, useEffect } from "react";
import BTN from "./BTN";
import axios from "axios";

import MailIcon from "@mui/icons-material/Mail";

function Enquiry() {
  let enquiryFail = false;
  const sendEmail = async () => {
    try {
      await axios.post("/emails", {
        fromEmail: userEnquiry.fromEmail,
        toEmail: userEnquiry.toEmail,
        subject: userEnquiry.subject,
        content: userEnquiry.content,
      });
    } catch (err) {
      console.log(`Failed to make request ${err.message}`);
      enquiryFail = err.message;
    }
  };

  const [userEnquiry, setUserEnquiry] = useState({
    fromEmail: "",
    toEmail: "notslrac@gmail.com",
    subject: "",
    content: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setUserEnquiry((preValue) => {
      if (name === "fromEmail") {
        return {
          fromEmail: value,
          toEmail: "notslrac@gmail.com",
          subject: preValue.subject,
          content: preValue.content,
        };
      } else if (name === "subject") {
        return {
          fromEmail: preValue.fromEmail,
          toEmail: "notslrac@gmail.com",
          subject: value,
          content: preValue.content,
        };
      } else if (name === "content") {
        return {
          fromEmail: preValue.fromEmail,
          toEmail: "notslrac@gmail.com",
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
    setTimeout(() => {
      setIsSubmitted(false);
    }, 1500);
  }

  function inputs() {
    return (
      <>
        <input
          onChange={handleChange}
          value={userEnquiry.fromEmail}
          name="fromEmail"
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
      id="askUs"
      className="enquiries"
      style={{ height: isExpanded ? "416px" : "216px" }}
    >
      <h2>Ask Us Here</h2>
      {isSubmitted && <p>{enquiryFail ? "❌" + enquiryFail : "✅Submitted"}</p>}
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
          type="submit"
          style={{ top: isExpanded ? "-10%" : "-24%" }}
          onClick={(e) => {
            console.log("SUBMITTED");
            sendEmail();
            submitted();
            setUserEnquiry({
              fromEmail: "",
              toEmail: "notslrac@gmail.com",
              subject: "",
              content: "",
            });
            e.preventDefault();
          }}
        >
          <MailIcon />
        </BTN>
      </form>
    </div>
  );
}

export default Enquiry;
