import React from "react";
import { useNavigate } from "react-router-dom";

const Contacts = () => {
  const nav = useNavigate();

  return (
    <div>
      <h4>Contacts Page</h4>
      <pre>
        Shubham Sonar <br /> Mobile No- 8888888888 <br />
        EmailId-{" "}
        <a href="mailto:sonar.shubham@gmail.com">sonar.shubham@gmail.com</a>
      </pre>
      <button
        onClick={() => {
          nav("/");
        }}
      >
        Root
      </button>
    </div>
  );
};

export default Contacts;
