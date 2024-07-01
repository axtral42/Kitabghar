// NavBar.js
import React, { useState } from "react";
import styled from "styled-components";
import SidePanel from "./SidePanel"; // Import the SidePanel component
import { Link } from "react-router-dom";
const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #333;
  color: #fff;
`;

const NavbarSections = styled.div`
  display: flex;
  gap: 20px;
`;

const NavItem = styled.div`
  cursor: pointer;
  position: relative;

  &:after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: #fff;
    transition: width 0.3s;
  }

  &:hover:after,
  &.active:after {
    width: 100%;
  }
`;

const SearchBar = styled.input`
  border: none;
  background: transparent;
  outline: none;
  color: #fff;
  font-size: 16px;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.3s;

  &:focus {
    border-bottom: 2px solid #fff;
  }
`;

const NavBar = () => {
  const [activeItem, setActiveItem] = useState("home");
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleItemClick = (item) => {
    setActiveItem(item);
    closePanel();
  };

  const openPanel = () => {
    setIsPanelOpen(true);
  };

  const closePanel = () => {
    setIsPanelOpen(false);
  };

  return (
    <NavbarContainer>
      <div onClick={openPanel}>Open Panel</div>
      <SidePanel isOpen={isPanelOpen} closePanel={closePanel} />
      <SearchBar placeholder="Search..." />
      <NavbarSections>
          <Link to="/HomePage">
          <NavItem
          onClick={() => handleItemClick("home")}
          className={activeItem === "home" ? "active" : ""}>
          Home
        </NavItem>
        </Link>
        <Link to="/VideoPlayer">
        <NavItem
          onClick={() => handleItemClick("video")}
          className={activeItem === "video" ? "active" : ""}
        >
          Video Library
        </NavItem>
        </Link>

        <Link to="/PdfDownload">
        <NavItem
          onClick={() => handleItemClick("pdf")}
          className={activeItem === "pdf" ? "active" : ""}
        >
          PDF Library
        </NavItem>
        </Link>
        <NavItem
          onClick={() => handleItemClick("kitaab")}
          className={activeItem === "kitaab" ? "active" : ""}
        >
          Kitaab Ghar
        </NavItem>
      </NavbarSections>
    </NavbarContainer>
  );
};

export default NavBar;
