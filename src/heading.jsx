import React from "react";
function Heading() {
  const currentDate = new Date();
  const getHour = currentDate.getHours();
  let greeting;
  const colorCode = {
    color: "red"
  };
  if (getHour < 12) {
    greeting = "Good Morning";
    colorCode.color = "red";
  } else if (getHour < 18) {
    greeting = "Good Afternnoon";
    colorCode.color = "green";
  } else {
    greeting = "Good Night";
    colorCode.color = "purple";
  }

  return <h1 style={colorCode}>{greeting}</h1>;
}
export default Heading;
