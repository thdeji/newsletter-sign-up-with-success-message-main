import { useState } from "react";
import content from "./assets/content";
import iconList from "./assets/images/icon-list.svg";
import "./left-component.css";
import RightComponent from "./right-component";
import iconSuccess from "./assets/images/icon-success.svg";

function LeftComponent() {
  const [isValid, setIsValid] = useState(true);
  const [userEmail, setUserEmail] = useState("");
  const [successful, setSuccessful] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSuccessful(true);
  }
  function handleChange(e) {
    const emailInput = e.target.value;
    setUserEmail(emailInput);
    userEmail.includes("@") ? setIsValid(true) : setIsValid(false);
  }

  if (successful) {
    return (
      <div
        className="success-page-container"
      >
        <img src={iconSuccess} alt="" />
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to <span>{userEmail}</span>. Please open it and
          click the button inside to confirm your subscription.
        </p>
        <button
        className="dismiss-button"
          onClick={() => {
            window.location.reload();
          }}
        >
          Dismiss message
        </button>
      </div>
    );
  }

    return (
      <div className="main">
        <div>
          <h1 className="header">{content.header}</h1>
          <p className="content-ptag">{content.pTag}</p>
          <ul>
            <li>
              <img src={iconList} alt="" />
              {content.list1}
            </li>
            <li>
              <img src={iconList} alt="" />
              {content.list2}
            </li>
            <li>
              <img src={iconList} alt="" />
              {content.list3}
            </li>
          </ul>
          <form onSubmit={handleSubmit} >
            <label htmlFor="email">
              Email address
              {isValid ? (
                null
              ) : (
                <p style={{ color: "red" }}>Valid E-mail Required</p>
              )}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@email.com"
              onChange={handleChange}
              style={{
                border: "solid 1px",
                outline: "none",
                borderColor: isValid ? "black" : "red",
                background: isValid ? "none" : "rgba(255, 0, 0, 0.123)",
                padding: ".5rem",
              }}
              required
            />
            <button type="submit" className="subscribe-button">
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
        <RightComponent />
      </div>
    );
  }

export default LeftComponent;
