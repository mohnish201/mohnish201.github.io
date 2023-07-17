import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import enhancedPhoto from "../Images/enhancedPhoto.png";

import 'aos/dist/aos.css';
import { useEffect } from "react";
import Aos from "aos";

function About() {

  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <div
      id="about"
      className="about section"
      width="90%"
      style={{ marginTop: "100px" }}
    >
      <Flex
        justifyContent={"space-evenly"}
        alignItems={"center"}
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
            src={enhancedPhoto}
            alt="Profile"
            w="100%"
            backgroundColor={"#CDFFE9"}
            borderRadius={"130px 130px 0px 0px"}
            transform={"scaleX(-1)"}
            className="home-img"
          />
        </Box>

        <VStack textAlign={"center"} spacing={"20px"} data-aos="zoom-in-up">
          <Heading color="orangered">About Me</Heading>
          <Text
            color="white"
            w={{
              base: "280px",
              sm: "280px",
              md: "320px",
              lg: "350px",
              xl: "350px",
            }}
            fontSize={{
              base: "18px",
              sm: "18px",
              md: "18px",
              lg: "20px",
              xl: "20px",
            }}
            textAlign={{
              base: "center",
              sm: "center",
              md: "center",
              lg: "center",
              xl: "center",
            }}
            id="user-detail-intro"
          >
            I am a skilled full-stack developer with expertise in both front-end
            and back-end development. I love creating efficient and
            user-friendly web applications.
          </Text>
        </VStack>
      </Flex>
    </div>
  );
}

export default About;
