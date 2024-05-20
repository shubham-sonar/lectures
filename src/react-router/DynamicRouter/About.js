import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const nav = useNavigate();
  return (
    <div>
      <h4> This is the About Page </h4>

      <button onClick={() => nav(-1)}>Go Back</button>
      <button onClick={() => nav("/")}>Root</button>
      <button onClick={() => nav(+1)}>Go Next</button>
    </div>
  );
};

export default About;
