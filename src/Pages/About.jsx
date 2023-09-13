import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import enhancedPP from "../Images/enhancedPP.jpg";

import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      id="about"
      className="about section"
      width="90%"
      style={{ marginTop: "150px", marginBottom: "150px" }}
    >
      <Flex
        justifyContent={"space-evenly"}
        alignItems={{
          base: "center",
          sm: "center",
          md: "flex-end",
          lg: "flex-end",
          xl: "flex-end",
        }}
        gap={"20px"}
        width="90%"
        m="auto"
        mt={"20px"}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
        }}
      >
        <Box
          w={{
            base: "200px",
            sm: "200px",
            md: " 200px",
            lg: "280px",
            xl: "300px",
          }}
          borderRadius={"130px 130px 0px 0px"}
          data-aos="fade-right"
        >
          <Image
            src={enhancedPP}
            alt="Profile"
            w="100%"
            backgroundColor={"#CDFFE9"}
            borderRadius={"130px 130px 0px 0px"}
            transform={"scaleX(-1)"}
            className="home-img"
          />
        </Box>

        <VStack textAlign={"justify"} spacing={"20px"} data-aos="zoom-in-up">
          <Heading
            color="#FC4D3C"
            fontSize={{
              base: "35px",
              sm: "35px",
              md: "40px",
              lg: "40px",
              xl: "40px",
            }}
          >
            About Me
          </Heading>
          {/* <Container> */}
          <Text
            color="white"
            w={{
              base: "300px",
              sm: "300px",
              md: "400px",
              lg: "450px",
              xl: "480px",
            }}
            fontSize={{
              base: "15px",
              sm: "15px",
              md: "15px",
              lg: "20px",
              xl: "20px",
            }}
            id="user-detail-intro"
            backgroundColor={"whiteAlpha.200"}
            p="20px"
            borderRadius={"15px"}
            // fontFamily={"sans"}
          >
            I am a highly motivated Full Stack Web Developer with expertise in
            the MERN stack. I successfully completed an intensive 1200+ hour web
            development program at Masai School, mastering both frontend and
            backend development. I excel at implementing creative solutions and
            thrive in collaborative team environments. My meticulous attention
            to detail and unwavering passion for problem-solving set me apart in
            the field.
          </Text>
          {/* </Container> */}
        </VStack>
      </Flex>
    </div>
  );
}

export default About;
