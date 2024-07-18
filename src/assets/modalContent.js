import DropDown from "../components/DropDown/DropDown.js";
import { FaStarOfLife } from "react-icons/fa";
import MediaUpload from "../components/MediaUpload/MediaUpload.js";
import "./modalContent.css";

const modalComponents = [
  {
    emailVerify: (
      <div className="emailVerify-div">
        <label className="emailVerify-label">
          Enter your email to receive an update
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your Email"
          className="emailVerify-input"
        />
      </div>
    ),
  },
  {
    suggestionTextareaHead: (
      <div className="textareaHead-div">
        Describe the suggestion in detail
        <FaStarOfLife className="red-star-icon" size={8} />
      </div>
    ),
  },
  {
    issueTextareaHead: (
      <div className="textareaHead-div">
        Describe the issue in detail
        <FaStarOfLife className="red-star-icon" size={8} />
      </div>
    ),
  },
  {
    contactTextareaHead: (
      <div className="textareaHead-div">
        What would you like to ask?
        <FaStarOfLife className="red-star-icon" size={8} />
      </div>
    ),
  },
  {
    attachment: (
      <div className="attachment-div">
        <MediaUpload />
      </div>
    ),
  },
];

const modalsContent = [
  {
    header: (
      <div>
        Let us know about the <strong className="strong-text">Issue</strong> you
        are facing right now!
      </div>
    ),
    dropdown: <DropDown />,
    textareaHead: modalComponents.issueTextareaHead,
    attachment: modalComponents.attachment,
  },
  {
    header: (
      <div>
        Let us know your <strong className="strong-text">Feedback</strong> about
        us!
      </div>
    ),
    checkbox: (
      <div className="checkbox-div">
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          className="checkbox-input"
        />
        <label>Send feedback anonymously</label>
      </div>
    ),
    attachment: modalComponents.attachment,
  },

  {
    header: (
      <div>
        Share your <strong className="strong-text">Suggestions</strong> with us
        for a chance to earn rewards!
      </div>
    ),

    dropdown: <DropDown />,
    textareaHead: modalComponents.suggestionTextareaHead,
    attachment: modalComponents.attachment,
  },
  {
    header: (
      <div>
        Get in <strong className="strong-text">Contact</strong> with us for your
        queries!
      </div>
    ),
    name: (
      <div className="name-div">
        <label>Your Name </label>
        <input
          type="text"
          placeholder="Enter your Name"
          className="name-input"
        />
      </div>
    ),
    textareaHead: modalComponents.contactTextareaHead,
  },
  {
    header: (
      <div>
        Let us know about the <strong className="strong-text">Issue</strong> you
        are facing right now!
      </div>
    ),
    dropdown: <DropDown />,
    textareaHead: modalComponents.issueTextareaHead,
    emailVerify: modalComponents.emailVerify,
    attachment: modalComponents.attachment,
  },
  {
    header: (
      <div>
        Let us know your <strong className="strong-text">Feedback</strong> about
        us!
      </div>
    ),
    emailVerify: (
      <div className="emailVerify-div">
        <label className="emailVerify-label starlabel">
          Enter your email to receive an update{" "}
          <FaStarOfLife className="red-star-icon" size={8} />
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your Email"
          className="emailVerify-input"
        />
      </div>
    ),
    attachment: modalComponents.attachment,
  },

  {
    header: (
      <div>
        Share your <strong className="strong-text">Suggestions</strong> with us
        for a chance to earn rewards!
      </div>
    ),

    dropdown: <DropDown />,
    textareaHead: modalComponents.suggestionTextareaHead,
    emailVerify: modalComponents.emailVerify,
    attachment: modalComponents.attachment,
  },
  {
    header: (
      <div>
        Get in <strong className="strong-text">Contact</strong> with us for your
        queries!
      </div>
    ),
    name: (
      <div className="name-email-mobile-div">
        <label className="starlabel">
          Your Name <FaStarOfLife className="red-star-icon" size={8} />
        </label>
        <input
          type="text"
          placeholder="Enter your Name"
          className="name-email-input"
        />
      </div>
    ),
    email: (
      <div className="name-email-mobile-div">
        <label className="starlabel">
          Your Email <FaStarOfLife className="red-star-icon" size={8} />
        </label>
        <input
          type="email"
          placeholder="Enter your Email"
          className="name-email-input"
        />
      </div>
    ),
    mobile: (
      <div className="name-email-mobile-div">
        <label className="starlabel">
          Your Mobile number <FaStarOfLife className="red-star-icon" size={8} />
        </label>
        <input
          type="number"
          placeholder="Enter your number"
          className="name-email-mobile-input"
        />
      </div>
    ),
    textareaHead: modalComponents.contactTextareaHead,
  },
];

export default modalsContent;
