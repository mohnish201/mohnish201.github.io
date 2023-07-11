import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import {NavLink} from 'react-router-dom'
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
} from "@chakra-ui/react";
import Mohclickslogowhite from "../Images/Mohclickslogowhite.png";
import { GrLinkedin, GrGithub, GrInstagram } from "react-icons/gr";
import { SiGithub } from "react-icons/si";
import { HamburgerIcon } from "@chakra-ui/icons";

import { Link } from "react-scroll";
import { Link as ReachLink } from "@chakra-ui/react";

const Links = [
  { title: "Home", path: "home", class: "nav-link home" },
  { title: "Skills", path: "skills", class: "nav-link skills" },
  { title: "About", path: "about", class: "nav-link about" },
  { title: "Projects", path: "projects", class: "nav-link projects" },
  { title: "Contact", path: "contact", class: "nav-link contact" },
];

const nonActive = {
  textDecoration: "none",
  color: "white",
  cursor: "pointer",
  transition: "color 0.2s",
  _hover: {
    color: "#FF602C",
  },
};

const active = {
  color: "#ff4500",
  textDecoration: "none",
  cursor: "pointer",
  transition: "color 0.2s",
  _hover: {
    color: "#ff4500",
  },
};
function Navbar() {
  const [activeLink, setActiveLink] = useState(null);
  const [shouldElevate, setShouldElevate] = useState(false);

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

  const handleSetActiveLink = (path) => {
    setActiveLink(path);
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
      bgColor={"#100C08"}
      py={0}
      px={0}
      position="sticky"
      top={0}
      zIndex="sticky"
      transition="box-shadow 0.2s"
      boxShadow={shouldElevate ? "md" : "none"}
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
        border={"2px solid black"}
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
            offset={-80}
            className={el.class}
            style={nonActive}
            activeStyle={active}
          >
            {el.title}
          </Link>
        ))}
      </HStack>

      <HStack color="white" spacing={"20px"} cursor={"pointer"}>
        <ReachLink>
          <GrLinkedin />
        </ReachLink>
        <ReachLink>
          <SiGithub />
        </ReachLink>
        <ReachLink>
          <GrInstagram />
        </ReachLink>
      </HStack>

      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon color="white" backgroundColor={"black"}/>}
          variant="outline"
          display={{
            base: "block",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
          }}
        />

        <MenuList bgColor={"orangeRed"} color={"white"}>
          <Link to="home">
            <MenuItem bgColor={"orangeRed"} color={"white"}>Home</MenuItem>
          </Link>

          <Link to="skills">
            <MenuItem bgColor={"orangeRed"} color={"white"}>Skills</MenuItem>
          </Link>

          <Link to="about">
            <MenuItem bgColor={"orangeRed"} color={"white"}>About</MenuItem>
          </Link>

          <Link to="projects">
            <MenuItem bgColor={"orangeRed"} color={"white"}>Projects</MenuItem>
          </Link>

          <Link to="contact">
            <MenuItem bgColor={"orangeRed"} color={"white"}>Contact</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default Navbar;
