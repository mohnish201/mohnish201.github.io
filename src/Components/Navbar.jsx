import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import {
  Box,
  Flex,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  IconButton,
  color,
  Button,
  background,
  textDecoration,
} from "@chakra-ui/react";
import Mohclickslogowhite from "../Images/Mohclickslogowhite.png";
import { GrLinkedin, GrGithub, GrInstagram } from "react-icons/gr";
import { SiGithub } from "react-icons/si";
import { HamburgerIcon } from "@chakra-ui/icons";
import { HiDocumentDownload } from "react-icons/hi";
import styles from "./Navbar.module.css";

import { Link } from "react-scroll";
import { Link as ReachLink } from "@chakra-ui/react";

const Links = [
  { title: "Home", path: "home", class: "nav-link home" },
  { title: "About", path: "about", class: "nav-link about" },
  { title: "Skills", path: "skills", class: "nav-link skills" },
  { title: "Projects", path: "projects", class: "nav-link projects" },
  { title: "Statistics", path: "statistics", class: "nav-link statistics" },
  { title: "Contact", path: "contact", class: "nav-link contact" },
];

const nonActive = {
  textDecoration: "none",
  color: "white",
  cursor: "pointer",
  transition: "color 0.2s",
};

// const navlink = {
//   _hover:{color:""}
// }

const active = {
  color: "#FC4D3C",
  textDecoration: "none",
  cursor: "pointer",
  transition: "color 0.2s",
  fontWeight: "bold",
};

const hover = {
  color: "orangered", // Replace with the hover color
};
function Navbar() {
  const [shouldElevate, setShouldElevate] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setShouldElevate(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDownload = () => {
    const anchor = document.createElement("a");
    anchor.href =
      process.env.PUBLIC_URL + "/Resume/" + "Mohnish-Vishwakarma-Resume.pdf";
    anchor.download = "Mohnish-Vishwakarma-Resume.pdf";
    anchor.click();
    window.open(
      "https://drive.google.com/file/d/1VA_oa7Eb4OUAmrxpbBv2Hc9sRRIQr0IY/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <Flex
      align="center"
      id="nav-menu"
      justify={{
        base: "space-between",
        sm: "space-between",
        md: "space-evenly",
        lg: "space-evenly",
        xl: "space-evenly",
      }}
      w={"100%"}
      // bgColor={"#000000"}
      py={0}
      px={0}
      position="sticky"
      top={0}
      zIndex="sticky"
      // bgColor={shouldElevate ? "0px 0px 14px 0px #080808" : "#000000"}
      // transition="bgColor 0.2s"
      bgColor={"#000000"}
      pl="10px"
      pr="10px"
    >
      <Box
        w={{ base: "50px", sm: "50px", md: "60px", lg: "60px", xl: "60px" }}
        m="8px"
      >
        <Image src={Mohclickslogowhite} w={"100%"} alt="logo" />
      </Box>

      <HStack
        fontSize={{
          base: "15px",
          sm: "15px",
          md: "20px",
          lg: "20px",
          xl: "20px",
        }}
        mr={"60px"}
        spacing={"25px"}
        display={{
          base: "none",
          sm: "none",
          md: "flex",
          lg: "flex",
          xl: "flex",
        }}
      >
        {Links.map((el) => (
          <Link
            activeClass="active"
            to={el.path}
            spy={true}
            smooth={true}
            duration={500}
            offset={-180}
            className={el.class}
            style={nonActive}
            activeStyle={active}
            key={el.title}
          >
            {el.title}
          </Link>
        ))}
      </HStack>

      <ReachLink _hover={{textDecoration:"none"}}>
        <Button
          colorScheme="purple"
          rightIcon={<HiDocumentDownload />}
          onClick={handleDownload}
          className="nav-link resume"
          id="resume-button-1"
          size={"sm"}
          display={{
            base: "none",
            sm: "none",
            md: "inline",
            lg: "inline",
            xl: "inline",
          }}
        >
          Resume
        </Button>
      </ReachLink>

      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon color="white" backgroundColor={"black"} />}
          variant="outline"
          display={{
            base: "block",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
          }}
          border="none"
        />

        <MenuList bgColor={"black"} color="white">
          <Link to="home">
            <MenuItem bgColor={"black"} borderBottom="1px solid #FC4D3C">
              Home
            </MenuItem>
          </Link>

          <Link to="skills">
            <MenuItem bgColor={"black"} borderBottom="1px solid #FC4D3C">
              Skills
            </MenuItem>
          </Link>

          <Link to="about">
            <MenuItem bgColor={"black"} borderBottom="1px solid #FC4D3C">
              About
            </MenuItem>
          </Link>

          <Link to="projects">
            <MenuItem bgColor={"black"} borderBottom="1px solid #FC4D3C">
              Projects
            </MenuItem>
          </Link>

          <Link to="statistics">
            <MenuItem bgColor={"black"} borderBottom="1px solid #FC4D3C">
              Statistics
            </MenuItem>
          </Link>

          <Link to="contact">
            <MenuItem bgColor={"black"} borderBottom="1px solid #FC4D3C">
              Contact
            </MenuItem>
          </Link>

          <MenuItem
            onClick={handleDownload}
            id="resume-button-1"
            bgColor={"black"}
          >
            Resume
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default Navbar;
