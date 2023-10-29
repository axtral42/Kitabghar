// SidePanel.js
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SidePanelContainer = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-250px")};
  width: 250px;
  height: 100%;
  background-color: #333;
  color: #fff;
  transition: left 0.5s;
  z-index: 1;
`;

const PanelItem = styled.div`
  padding: 15px;
  cursor: pointer;
  border-bottom: 1px solid #444;
  transition: background-color 0.3s;

  &:hover {
    background-color: #444;
  }
`;

const SidePanel = ({ isOpen, closePanel }) => {
  return (
    <SidePanelContainer isOpen={isOpen}>
      <PanelItem onClick={closePanel}>Close</PanelItem>
      <Link to="/profile">
        <PanelItem>Profile</PanelItem>
      </Link>
      <Link to="/Docupload">
        <PanelItem>Upload Books</PanelItem>
      </Link>
      <Link to="/Transact">
        <PanelItem>Sell Books</PanelItem>
      </Link>
      <Link to="/buy-supplies">
        <PanelItem>Buy Supplies</PanelItem>
      </Link>
    </SidePanelContainer>
  );
};

export default SidePanel;
