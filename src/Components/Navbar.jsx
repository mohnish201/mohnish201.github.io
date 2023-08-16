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
} from "@chakra-ui/react";
import Mohclickslogowhite from "../Images/Mohclickslogowhite.png";
import { GrLinkedin, GrGithub, GrInstagram } from "react-icons/gr";
import { SiGithub } from "react-icons/si";
import { HamburgerIcon } from "@chakra-ui/icons";
import { HiDocumentDownload } from "react-icons/hi";

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
    window.open(
      "https://drive.google.com/file/d/1Aol7eZHlJGh7Gdc9LwK7xYEftkXLxyj4/view?usp=sharing"
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

      {/* <HStack color="white" spacing={"20px"} cursor={"pointer"}>
        <ReachLink>
          <GrLinkedin />
        </ReachLink>
        <ReachLink>
          <SiGithub />
        </ReachLink>
        <ReachLink>
          <GrInstagram />
        </ReachLink>
      </HStack> */}

      <ReachLink
        href="https://drive.google.com/uc?export=download&id=1Aol7eZHlJGh7Gdc9LwK7xYEftkXLxyj4"
        download
        target={"_blank"}
      >
        <Button
          colorScheme="purple"
          rightIcon={<HiDocumentDownload />}
          // onClick={handleDownload}
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

        <MenuList>
          <Link to="home" _hover={{ bgColor: "orangered" }}>
            <MenuItem>Home</MenuItem>
          </Link>

          <Link to="skills">
            <MenuItem>Skills</MenuItem>
          </Link>

          <Link to="about">
            <MenuItem>About</MenuItem>
          </Link>

          <Link to="projects">
            <MenuItem>Projects</MenuItem>
          </Link>

          <Link to="statistics">
            <MenuItem>Statistics</MenuItem>
          </Link>

          <Link to="contact">
            <MenuItem>Contact</MenuItem>
          </Link>

          <MenuItem onClick={handleDownload} id="resume-button-1">
            Resume
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default Navbar;
