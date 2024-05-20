import React from "react";
import { useParams } from "react-router-dom";

const Active = () => {
  const { id } = useParams();
  console.log("This is ", id);

  const userDetails = {
    "1": { name: "Shubham Sonar", company: "Google", salary: "250K USD" },
    "2": { name: "Diksha", company: "Facebook", salary: "250K USD" },
    "3": { name: "Sunny Mali", company: "Netflix", salary: "140K USD" }
  };

  const activeUser = userDetails[id];

  //   console.log(userDetails);
  //   console.log(userDetails.id);
  //   console.log(activeUser);

  return (
    <div>
      <h4> User Details Page </h4>
      <h6> Active User Name is {activeUser.name} </h6>
      <h6> Company {activeUser.company} </h6>
      <h6> Current CTC is {activeUser.salary} </h6>
    </div>
  );
};

export default Active;
