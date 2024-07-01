// CourseCard.js
import React from "react";
import { Link } from "react-router-dom";
const CourseCard = ({ course, to }) => {
  return (
    <Link to={to} style={cardStyle}>
      <img src={course.image} alt={course.title} style={imageStyle} />
      <div style={titleStyle}>{course.title}</div>
    </Link>
  );
};

const cardStyle = {
  width: "30vw",
  border: "1px solid #ccc",
  margin: "10px",
  textDecoration: "none",
  color: "black",
  display: "block",
  textAlign: "center",
};

const imageStyle = {
  width: "100%",
  height: "auto",
};

const titleStyle = {
  padding: "10px",
  background: "#f3f3f3",
  borderBottomLeftRadius: "5px",
  borderBottomRightRadius: "5px",
};

export default CourseCard;
