// ProfilePage.js
import React from "react";
import styled from "styled-components";
import image from "./image.jpeg"

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #baa6db;
`;

const ProfilePhoto = styled.div`
  width: 300px;
  height: 300px;
  background-color: #ccc;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const Name = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const WalletAddress = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
`;

const TokensBalance = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const ProfilePage = () => {
  return (
    <ProfileContainer>
      <ProfilePhoto>
        <img src={ image } width="300px" height="300px" />
      </ProfilePhoto>
      <Name>Name</Name>
      <WalletAddress>Wallet Address</WalletAddress>
      <TokensBalance>Tokens Available: 100</TokensBalance>
    </ProfileContainer>
  );
};

export default ProfilePage;
