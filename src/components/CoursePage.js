// CoursePage.js
import React from "react";
import styled from "styled-components";

const CoursePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 5px;
  margin: 15px;
  gap: 2px;
`;

const VideoContainer = styled.div`
  height: 60vh;
  background-color: #e1c6c1;
`;

const OtherLecturesContainer = styled.div`
  height: 60px;
  padding: 5px;
  background-color: #c1c1c1;
`;

const CoursePage = () => {
  return (
    <CoursePageContainer>
      <VideoContainer className="video"></VideoContainer>
      <OtherLecturesContainer className="other lectures"></OtherLecturesContainer>
      <OtherLecturesContainer className="other lectures"></OtherLecturesContainer>
      <OtherLecturesContainer className="other lectures"></OtherLecturesContainer>
    </CoursePageContainer>
  );
};

export default CoursePage;
