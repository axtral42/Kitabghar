import React, { useState } from "react";
import styled from "styled-components";

const VideoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding:10px 10px;
`;

const VideoCover = styled.div`
  width: 200px;
  height: 150px;
  background-color: #ddd;
  position: relative;
  transition: transform 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const VideoTitle = styled.h3`
  margin: 10px 0;
`;

const PlayButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const PlayingText = styled.p`
  color: green;
`;

const VideoPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <VideoContainer>
      <VideoCover>
        <VideoTitle>Video 1</VideoTitle>
        <PlayButton onClick={handlePlay}>Play</PlayButton>
        {isPlaying && <PlayingText>Playing</PlayingText>}
      </VideoCover>
      <VideoCover>
        <VideoTitle>Video 2</VideoTitle>
        <PlayButton onClick={handlePlay}>Play</PlayButton>
        {isPlaying && <PlayingText>Playing</PlayingText>}
      </VideoCover>
      {/* Add more video covers here */}
    </VideoContainer>
  );
};

export default VideoPage;
