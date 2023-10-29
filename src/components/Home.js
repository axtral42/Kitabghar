import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import CourseCard from "./CourseCard";
import HomePageCourses from "./HomePageCourses";
import CoursePage from "./CoursePage";

const Home = () => {
  return (
    <>
      <NavBar />
      <HomePageCourses />
    </>
  );
};

export default Home;
