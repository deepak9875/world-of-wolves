import React from "react";
import Logo from "../../assets/img/Logo_Icon 1.png";
import { Navbar, Container, Nav } from "react-bootstrap";
import Magic from "../../assets/img/magic.png";
import { DiscordIcon, TwitterIcon } from "./Icons";
const Header = () => {
  return (
    <header className="py-1 text-white">
      <Navbar bg="transparent" expand="xl">
        <Container>
          <Navbar.Brand href="#home">
            <img width="90px" src={Logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-start align-items-xl-center">
              <Nav.Link
                className="mx-2 my-1 my-xl-0"
                target="_blank"
                href="https://docs.worldofwolves.xyz/introduction/world-of-wolves"
              >
                Whitepaper
              </Nav.Link>
              <Nav.Link
                className="mx-2 my-1 my-xl-0"
                target="_blank"
                href="https://staking.worldofwolves.xyz/"
              >
                Staking
              </Nav.Link>
              <Nav.Link className="mx-2 my-1 my-xl-0" href="#team">
                Team
              </Nav.Link>

              <Nav.Link
                target="_blank"
                className="mx-2 my-2 my-xl-0 btn-transparent px-4 py-2"
                href="https://twitter.com/alpha_wolvesnft"
              >
                <TwitterIcon />
                <span className="d-inline-block px-2">Twitter</span>
              </Nav.Link>
              <Nav.Link
                target="_blank"
                className="mx-2 my-2 my-xl-0 discord-btn px-4 py-2"
                href="https://discord.com/invite/alphawolves"
              >
                <DiscordIcon />
                <span className="d-inline-block px-2">Discord</span>
              </Nav.Link>
              <Nav.Link
                target="_blank"
                className="mx-2 my-2 my-xl-0 btn-transparent px-4 py-2"
                href="https://www.magiceden.io/marketplace/alpha_wolves"
              >
                <img src={Magic} className="ms-2" alt="magic" />
                <span className="d-inline-block px-2">Magic Eden</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
