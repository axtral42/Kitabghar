// HomePageCourses.js
import React from "react";
import CourseCard from "./CourseCard";
import courseImage from "./courseImage.jpeg";
import styled from "styled-components";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const CoursesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin: 0 -10px;

  height: 100vh; /* Set the height to 100% of the viewport height */
  overflow-y: hidden;
`;

const CourseCardWrapper = styled.div`
  flex: 0 0 calc(33.33% - 20px); /* Calculate 33.33% width with spacing */
  margin: 10px; /* Add margin for spacing */
  box-sizing: border-box;
  transition: transform 0.2s; /* Add a transition for smooth scaling */

  &:hover {
    transform: scale(1.08); /* Grow by 5% when hovered */
  }
`;

const HomePageCourses = () => {
  return (
    <CoursesContainer>
      <BrowserRouter>
        <Routes>
          <Route
            path="./CoursePage"
            element={
              <CourseCard
                course={{
                  title: "Course 1",
                  image: courseImage,
                }}
                to="./CoursePage"
              />
            }
          ></Route>

          <Route
            path="./CoursePage"
            element={
              <CourseCard
                course={{
                  title: "Course 1",
                  image: courseImage,
                }}
                to="./CoursePage"
              />
            }
          ></Route>

          <Route
            path="./CoursePage"
            element={
              <CourseCard
                course={{
                  title: "Course 1",
                  image: courseImage,
                }}
                to="./CoursePage"
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </CoursesContainer>
  );
};

export default HomePageCourses;
