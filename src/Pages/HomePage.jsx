import React from "react";
import enhacedPhoto from "../Images/enhancedPhoto.png";
import developer_male from "../Images/developer_male.png";
import wave_hand from "../Images/wave _hand.gif";
import homepage_image from "../Images/homepage_image.png";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  VStack,
} from "@chakra-ui/react";
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
                width: "70x",
                height: "75px",
                verticalAlign: "middle",
              }}
              src={wave_hand}
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
          <Typewriter
            options={{
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Web Developer")
                .pauseFor(1000)
                .deleteAll()
                .start();
            }}
            id="user-detail-intro"
          />

          <Link
            href="https://drive.google.com/uc?export=download&id=1Aol7eZHlJGh7Gdc9LwK7xYEftkXLxyj4"
            target="_blank"
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
            src={homepage_image}
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
