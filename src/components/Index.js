// App.js
import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from "react-router-dom";

const changeBgColor = keyframes`
  0% {
    background: linear-gradient(to bottom, #ffffe0, #ffffff);
  }
  100% {
    background: linear-gradient(to bottom, #ffffff, #ffffe0);
  }
`;

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


const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FloatingEmojis = styled.span`
  animation: float 3s infinite;
`;

const float = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
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

const AppContainer = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
  background: linear-gradient(to bottom, #ffffe0, #ffffff);
`;

const Header = styled.header`
  text-align: center;
  padding: 10px 0;
  color: #333;
  animation: ${fadeIn} 2s;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderTitle = styled.h1`
  font-size: 2em;
  margin-right: 5px;
`;

const HeaderText = styled.p`
  font-size: 1em;
  opacity: 0;
  margin-right: 5px;
`;

const Nav = styled.nav`
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px;
`;

const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 8px 15px;
  transition: background-color 0.3s;
`;

const LeftPane = styled.div`
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  width: 0;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: width 0.5s;
  overflow: hidden;
  z-index: 1;
`;

const Wallet = styled.div`
  color: #fff;
`;

const Footer = styled.footer`
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
  padding: 10px 0;
  position: absolute;
  bottom: 0;
  width: 100%;
  color: #fff;
`;

const RightAligned = styled.div`
  margin-left: auto;
`;

const SidePane = styled.div`
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  width: 20%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  transition: width 0.5s;
  overflow: hidden;
  z-index: 1;
`;

const SidePaneContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
`;

const SidePaneItem = styled.div`
  color: #fff;
  padding: 10px 0;
  cursor: pointer;
`;


const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(255, 255, 224, 0.8);
  z-index: 0;
`;


function App() {
  const [isSidePaneOpen, setSidePaneOpen] = useState(false);

  const handleToggleSidePane = () => {
    setSidePaneOpen(!isSidePaneOpen);
  };

  const sidePaneRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidePaneRef.current && !sidePaneRef.current.contains(event.target)) {
        setSidePaneOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidePaneRef]);

  const closePanel = () => {
    setSidePaneOpen(false);
  };

  return (
    <AppContainer>
      <Header>
        <HeaderContent>
          <HeaderTitle>Kitaab Ghar</HeaderTitle>
          <HeaderText>Explore & Learn</HeaderText>
          <FloatingEmojis style={{ fontSize: '40px', animationDelay: '0s' }}>📚</FloatingEmojis>
          <FloatingEmojis style={{ fontSize: '40px', animationDelay: '1s' }}>✏️</FloatingEmojis>
          <FloatingEmojis style={{ fontSize: '40px', animationDelay: '2s' }}>🎓</FloatingEmojis>
        </HeaderContent>
      </Header>

      <Nav>
        <div onClick={handleToggleSidePane} style={{ cursor: 'pointer', padding: '8px' }}>
          <span>&#9776;</span>
        </div>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <NavItem href="#">Home</NavItem>
          <NavItem href="#">Video Library</NavItem>
          <NavItem href="#">PDF Library</NavItem>
        </div>
        <RightAligned>
          <Wallet>100 💰</Wallet>
        </RightAligned>
      </Nav>

      {isSidePaneOpen && (
        <>
          <Overlay onClick={handleToggleSidePane} />
          <SidePane ref={sidePaneRef}>
            <SidePaneContent>
              <PanelItem onClick={closePanel}>Close</PanelItem>
              <Link to="/profile">
                <PanelItem>Profile</PanelItem>
              </Link>
              <Link to="/upload-books">
                <PanelItem>Upload Books</PanelItem>
              </Link>
              <Link to="/sell-books">
                <PanelItem>Sell Books</PanelItem>
              </Link>
              <Link to="/buy-supplies">
                <PanelItem>Buy Supplies</PanelItem>
              </Link>
            </SidePaneContent>
          </SidePane>
        </>
      )}

      <Footer>
        <p>© 2023 Kitaab Ghar - Your Education Video Course Website</p>
      </Footer>
    </AppContainer>
  );
}

export default App;
