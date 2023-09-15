import React from "react";
import enhacedPhoto from "../Images/enhancedPhoto.png";
import developer_male from "../Images/developer_male.png";
import wave_hand from "../Images/wave _hand.gif";
import homepage_image_optimized from "../Images/homepage_image_optimized.png";
import { GrLinkedin, GrGithub, GrInstagram } from "react-icons/gr";
import { SiGithub } from "react-icons/si";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link as ReachLink } from "@chakra-ui/react";

// import { HiDocumentDownload } from "react-icons/hi";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  VStack,
  HStack,
} from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import styled, { keyframes } from "styled-components";
import { HiDocumentDownload } from "react-icons/hi";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

function HomePage() {
  const handleDownload = () => {
    // window.location.href =
    //   "https://drive.google.com/file/d/1Aol7eZHlJGh7Gdc9LwK7xYEftkXLxyj4/view?usp=sharing";

    setTimeout(function () {
      window.location.href =
        "https://drive.google.com/file/d/1Aol7eZHlJGh7Gdc9LwK7xYEftkXLxyj4/view";
    }, 1000);
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div id="home" style={{ paddingTop: "40px" }}>
      <Flex
        justify={"space-around"}
        alignItems={"center"}
        w="90%"
        m="auto"
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
      >
        <VStack
          fontSize={{
            base: "30px",
            sm: "35px",
            md: "50px",
            lg: "45px",
            xl: "55px",
          }}
          color={"white"}
          fontFamily={"heading"}
          spacing={"20px"}
          alignItems={{
            base: "center",
            sm: "center",
            md: "center",
            lg: "left",
            xl: "left",
          }}
          w={{
            base: "300px",
            sm: "300px",
            md: "400px",
            lg: "500px",
            xl: "500px",
          }}
        >
          <Heading
            fontSize={{
              base: "30px",
              sm: "35px",
              md: "50px",
              lg: "45px",
              xl: "55px",
            }}
            color={"#ffffff"}
            display="inline"
          >
            Hi,
            {/* <Image
              style={{
                display: "inline",
                width: "100x",
                height: "100px",
                verticalAlign: "middle",
              }}
              src={wave_hand}
            
              border="2px solid white"
            /> */}
          </Heading>
          <Heading
            fontSize={{
              base: "30px",
              sm: "35px",
              md: "50px",
              lg: "45px",
              xl: "55px",
            }}
            id="user-detail-name"
            color={"#FC4D3C"}
          >
            I'am Mohnish,
          </Heading>

          <Heading
            fontSize={{
              base: "20px",
              sm: "20px",
              md: "30px",
              lg: "30px",
              xl: "40px",
            }}
            fontWeight="medium"
          >
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Full Stack Web Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .start();
              }}
              id="user-detail-intro"
            />
          </Heading>

          <HStack
            color="white"
            spacing={"20px"}
            cursor={"pointer"}
            fontSize="20px"
          >
            <ReachLink
              href="https://www.linkedin.com/in/mohnish-vishwakarma-172196230/"
              target="_blank"
            >
              <GrLinkedin />
            </ReachLink>
            <ReachLink href="https://github.com/mohnish201" target="_blank">
              <SiGithub />
            </ReachLink>
            <ReachLink
              href="https://www.instagram.com/mohnish201/"
              target="_blank"
            >
              <GrInstagram />
            </ReachLink>
          </HStack>

          <Link
            href="https://drive.google.com/uc?export=download&id=1Aol7eZHlJGh7Gdc9LwK7xYEftkXLxyj4"
            // to="https://drive.google.com/file/d/1Aol7eZHlJGh7Gdc9LwK7xYEftkXLxyj4/view?usp=drive_link"
            download
          >
            <Button
              colorScheme="purple"
              rightIcon={<HiDocumentDownload />}
              // onClick={handleDownload}
              className="nav-link resume"
              id="resume-button-2"
            >
              Resume
            </Button>
          </Link>
        </VStack>

        <Box
          w={{
            base: "280px",
            sm: "300px",
            md: "500px",
            lg: "650px",
            xl: "780px",
          }}
        >
          <FloatingImage
            src={homepage_image_optimized}
            alt="profile_pic"
            width={"100%"}
          />
        </Box>
      </Flex>
    </div>
  );
}

export default HomePage;

const floatingAnimation = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 20px); /* Adjust the distance and direction of the float */
  }
`;

const FloatingImage = styled.img`
  position: relative;
  animation: ${floatingAnimation} 3s infinite ease-in-out;
`;
