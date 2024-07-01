import React from "react";
import styled from "styled-components";
import image from "./image.jpeg";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const EmojiContainer = styled.div`
  font-size: 3rem;
`;

const HomeScreen = () => {
  return (
    <HomeContainer>
      <Title>Welcome to Kitaab Ghar!</Title>
      <img src={image}></img>
    </HomeContainer>
  );
};

export default HomeScreen;
