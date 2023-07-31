import React from "react";
import enhacedPhoto from "../Images/enhancedPhoto.png";
import developer_male from "../Images/developer_male.png";
import { Box, Button, Flex, Heading, Image, Link, VStack } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import styled, { keyframes } from "styled-components";
import { HiDocumentDownload } from "react-icons/hi";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

function HomePage() {
  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1Aol7eZHlJGh7Gdc9LwK7xYEftkXLxyj4/view?usp=sharing"
    );
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
          md: "row",
          lg: "row",
          xl: "row",
        }}
      >
        <VStack
          fontSize={{
            base: "20px",
            sm: "20px",
            md: "25px",
            lg: "30px",
            xl: "30px",
          }}
          color={"white"}
          fontFamily={"heading"}
          spacing={"20px"}
          textAlign={"center"}
        >
          <Heading
            fontSize={{
              base: "25px",
              sm: "25px",
              md: "25px",
              lg: "35px",
              xl: "35px",
            }}
            color={"orangered"}
          >
            Hii there ! 👦🏻
          </Heading>
          <Heading
            fontSize={{
              base: "25px",
              sm: "25px",
              md: "25px",
              lg: "35px",
              xl: "35px",
            }}
            id="user-detail-name"
          >
            I am Mohnish Vishwakarma
          </Heading>
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

          <Button
            colorScheme="purple"
            rightIcon={<HiDocumentDownload />}
            // onClick={handleDownload}
            className="nav-link resume"
            id="resume-button-2"
          >
            <Link
              href="https://drive.google.com/file/d/1Aol7eZHlJGh7Gdc9LwK7xYEftkXLxyj4/view?usp=drive_link"
              id="resume-link-2"
              download={true}
              target={"_blank"}
            >
              Resume
            </Link>
          </Button>
        </VStack>

        <Box
          w={{
            base: "250px",
            sm: "300px",
            md: "400px",
            lg: "500px",
            xl: "600px",
          }}
        >
          <FloatingImage
            src={developer_male}
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
