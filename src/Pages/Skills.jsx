import {
  Box,
  Center,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-carousel3";
import html from "../Images/html.png";
import css from "../Images/css.png";
import javascript from "../Images/javascript.png";
import mongo from "../Images/mongo.png";
import react from "../Images/react.png";
import redux from "../Images/redux.png";
import netlify from "../Images/netlify.png";
import typescript from "../Images/typescript.png";
import vercel from "../Images/vercel.png";
import express from "../Images/express.png";
import chakraui from "../Images/chakraui.png";
import nodejs from "../Images/nodejs.png";
import canva from "../Images/canva.png";
import photoshop from '../Images/photoshop.png';
import postman from '../Images/postman.png';
import vscode from '../Images/vscode.png';

import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

function Skills() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div id="skills" style={{ marginTop: "250px" }}>
      <Heading
        color={"#FC4D3C"}
        textAlign={"center"}
        fontSize={{
          base: "35px",
          sm: "35px",
          md: "40px",
          lg: "40px",
          xl: "40px",
        }}
        mb="50px"
      >
        Tech Stacks
      </Heading>
      {/* <Flex
        justifyContent={"center"}
        mt="60px"
        data-aos="zoom-in-up"
        fontSize={"25px"}
        display={{
          base: "none",
          sm: "none",
          md: "none",
          lg: "flex",
          xl: "flex",
        }}
      >
        <Carousel
          height={300}
          width={1400}
          yOrigin={50}
          yRadius={56}
          autoPlay={true}
        >
          <Box
            className="skills-card"
            key={1}
            w={{
              base: "50px",
              sm: "50px",
              md: "100px",
              lg: "120px",
              xl: "120px",
            }}
          >
            <Image className="skills-card-img" src={html} />
            <Text
              className="skills-card-name"
              textAlign={"center"}
              color={"white"}
            >
              HTML
            </Text>
          </Box>
          <Box
            className="skills-card"
            key={2}
            w={{
              base: "50px",
              sm: "50px",
              md: "100px",
              lg: "120px",
              xl: "120px",
            }}
          >
            <Image className="skills-card-img" src={css} />
            <Text
              className="skills-card-name"
              textAlign={"center"}
              color={"white"}
            >
              CSS
            </Text>
          </Box>
          <Box
            className="skills-card"
            key={3}
            w={{
              base: "50px",
              sm: "50px",
              md: "100px",
              lg: "120px",
              xl: "120px",
            }}
          >
            <Image className="skills-card-img" src={javascript} />
            <Text
              className="skills-card-name"
              textAlign={"center"}
              color={"white"}
            >
              JavaScript
            </Text>
          </Box>

          <Box
            className="skills-card"
            key={4}
            w={{
              base: "50px",
              sm: "50px",
              md: "100px",
              lg: "120px",
              xl: "120px",
            }}
          >
            <Image className="skills-card-img" src={react} />
            <Text
              className="skills-card-name"
              textAlign={"center"}
              color={"white"}
            >
              React
            </Text>
          </Box>

          <Box
            className="skills-card"
            key={5}
            w={{
              base: "50px",
              sm: "50px",
              md: "100px",
              lg: "120px",
              xl: "120px",
            }}
          >
            <Image className="skills-card-img" src={redux} />
            <Text
              className="skills-card-name"
              textAlign={"center"}
              color={"white"}
            >
              Redux
            </Text>
          </Box>

          <Box
            className="skills-card"
            key={6}
            w={{
              base: "50px",
              sm: "50px",
              md: "100px",
              lg: "120px",
              xl: "120px",
            }}
          >
            <Image className="skills-card-img" src={chakraui} />
            <Text
              className="skills-card-name"
              textAlign={"center"}
              color={"white"}
            >
              Chakra UI
            </Text>
          </Box>

          <Box
            className="skills-card"
            key={8}
            w={{
              base: "50px",
              sm: "50px",
              md: "100px",
              lg: "120px",
              xl: "120px",
            }}
          >
            <Image className="skills-card-img" src={vercel} />
            <Text
              className="skills-card-name"
              textAlign={"center"}
              color={"white"}
            >
              Vercel
            </Text>
          </Box>

          <Box
            className="skills-card"
            key={9}
            w={{
              base: "50px",
              sm: "50px",
              md: "100px",
              lg: "120px",
              xl: "120px",
            }}
          >
            <Image className="skills-card-img" src={netlify} />
            <Text
              className="skills-card-name"
              textAlign={"center"}
              color={"white"}
            >
              Netlify
            </Text>
          </Box>

          <Box
            className="skills-card"
            key={10}
            w={{
              base: "50px",
              sm: "50px",
              md: "100px",
              lg: "120px",
              xl: "120px",
            }}
          >
            <Image className="skills-card-img" src={mongo} />
            <Text
              className="skills-card-name"
              textAlign={"center"}
              color={"white"}
            >
              MongoDB
            </Text>
          </Box>

          <Box
            className="skills-card"
            key={11}
            w={{
              base: "50px",
              sm: "50px",
              md: "100px",
              lg: "120px",
              xl: "120px",
            }}
          >
            <Image className="skills-card-img" src={express} />
            <Text
              className="skills-card-name"
              textAlign={"center"}
              color={"white"}
            >
              Express JS
            </Text>
          </Box>
        </Carousel>
      </Flex> */}

      <Box
        width={{ base: "100%", sm: "100%", md: "90%", lg: "70%", xl: "70%" }}
        m="auto"
      >
        <Heading textAlign={"center"} color="white" mb="20px">
          Frontend & Backend
        </Heading>

        <Flex
          display={{
            base: "flex",
            sm: "flex",
            md: "flex",
            lg: "flex",
            xl: "flex",
          }}
          flexWrap="wrap"
          m="auto"
          gap="60px"
          justifyContent={"center"}
          p="20px"
        >
          <Box
            className="skills-card"
            key={1}
            data-aos="zoom-in-up"
            w={{
              base: "80px",
              sm: "80px",
              md: "100px",
              lg: "100px",
              xl: "100px",
            }}
          >
            <Image className="skills-card-img" src={html} />
            <Text
              className="skills-card-name"
              textAlign={"center"}
              color={"white"}
              fontSize="20px"
              mt={"5px"}
            >
              HTML 5
            </Text>
          </Box>

          <Box
            className="skills-card"
            key={2}
            data-aos="zoom-in-up"
            w={{
              base: "80px",
              sm: "80px",
              md: "100px",
              lg: "100px",
              xl: "100px",
            }}
          >
            <Image className="skills-card-img" src={css} />
            <Text
              className="skills-card-name"
              textAlign={"center"}
              color={"white"}
              fontSize="20px"
              mt={"5px"}
            >
              CSS 3
            </Text>
          </Box>

          <Box
            className="skills-card"
            key={3}
            data-aos="zoom-in-up"
            w={{
              base: "80px",
              sm: "80px",
              md: "100px",
              lg: "100px",
              xl: "100px",
            }}
          >
            <Image className="skills-card-img" src={javascript} />
            <Text
              className="skills-card-name"
              textAlign={"center"}
              color={"white"}
              fontSize="20px"
              mt={"5px"}
            >
              JavaScript
            </Text>
          </Box>

          <Box
            className="skills-card"
            key={4}
            data-aos="zoom-in-up"
            w={{
              base: "80px",
              sm: "80px",
              md: "100px",
              lg: "100px",
              xl: "100px",
            }}
          >
            <Image className="skills-card-img" src={react} />
            <Text
              className="skills-card-name"
              textAlign={"center"}
              color={"white"}
              fontSize="20px"
              mt={"5px"}
            >
              React
            </Text>
          </Box>

          <Box
            className="skills-card"
            key={5}
            data-aos="zoom-in-up"
            w={{
              base: "80px",
              sm: "80px",
              md: "100px",
              lg: "100px",
              xl: "100px",
            }}
          >
            <Image className="skills-card-img" src={redux} />
            <Text
              className="skills-card-name"
              textAlign={"center"}
              color={"white"}
              fontSize="20px"
              mt={"5px"}
            >
              Redux
            </Text>
          </Box>

          <Box
            className="skills-card"
            key={6}
            data-aos="zoom-in-up"
            w={{
              base: "80px",
              sm: "80px",
              md: "100px",
              lg: "100px",
              xl: "100px",
            }}
          >
            <Image className="skills-card-img" src={chakraui} />
            <Text
              className="skills-card-name"
              textAlign={"center"}
              color={"white"}
              fontSize="20px"
              mt={"5px"}
            >
              Chakra UI
            </Text>
          </Box>

          <Box
            className="skills-card"
            key={11}
            data-aos="zoom-in-up"
            w={{
              base: "80px",
              sm: "80px",
              md: "100px",
              lg: "100px",
              xl: "100px",
            }}
          >
            <Image className="skills-card-img" src={nodejs} />
            <Text
              className="skills-card-name"
              textAlign={"center"}
              color={"white"}
              fontSize="20px"
              mt={"5px"}
            >
              Node JS
            </Text>
          </Box>

          <Box
            className="skills-card"
            key={10}
            w={{
              base: "80px",
              sm: "80px",
              md: "100px",
              lg: "100px",
              xl: "100px",
            }}
            data-aos="zoom-in-up"
          >
            <Image className="skills-card-img" src={mongo} />
            <Text
              className="skills-card-name"
              textAlign={"center"}
              color={"white"}
              fontSize="20px"
              mt={"5px"}
            >
              MongoDB
            </Text>
          </Box>

          <Box
            className="skills-card"
            key={11}
            data-aos="zoom-in-up"
            w={{
              base: "80px",
              sm: "80px",
              md: "100px",
              lg: "100px",
              xl: "100px",
            }}
          >
            <Image className="skills-card-img" src={express} />
            <Text
              className="skills-card-name"
              textAlign={"center"}
              color={"white"}
              fontSize="20px"
              mt={"5px"}
            >
              Express JS
            </Text>
          </Box>
        </Flex>
      </Box>

      <Box
        width={{ base: "100%", sm: "100%", md: "90%", lg: "70%", xl: "70%" }}
        m="auto"
        mt="30px"
      >
        <Heading textAlign={"center"} color="white" mb="20px">
          Tech Tools
        </Heading>

        <Flex
          display={{
            base: "flex",
            sm: "flex",
            md: "flex",
            lg: "flex",
            xl: "flex",
          }}
          flexWrap="wrap"
          m="auto"
          gap="60px"
          justifyContent={"center"}
          p="20px"
        >
          <Box
            className="skills-card"
            key={8}
            data-aos="zoom-in-up"
            w={{
              base: "80px",
              sm: "80px",
              md: "100px",
              lg: "100px",
              xl: "100px",
            }}

            
          >
            <Image className="skills-card-img" src={vercel} />
            <Text
              className="skills-card-name"
              textAlign={"center"}
              color={"white"}
              fontSize="20px"
              mt={"5px"}
            >
              Vercel
            </Text>
          </Box>

          <Box
            className="skills-card"
            key={9}
            data-aos="zoom-in-up"
            w={{
              base: "80px",
              sm: "80px",
              md: "100px",
              lg: "100px",
              xl: "100px",
            }}
          >
            <Image className="skills-card-img" src={netlify} />
            <Text
              className="skills-card-name"
              textAlign={"center"}
              color={"white"}
              fontSize="20px"
              mt={"5px"}
            >
              Netlify
            </Text>
          </Box>

          <Box
            className="skills-card"
            key={9}
            data-aos="zoom-in-up"
            w={{
              base: "80px",
              sm: "80px",
              md: "100px",
              lg: "100px",
              xl: "100px",
            }}
          >
            <Image className="skills-card-img" src={vscode} />
            <Text
              className="skills-card-name"
              textAlign={"center"}
              color={"white"}
              fontSize="20px"
              mt={"5px"}
            >
              Vscode
            </Text>
          </Box>

          <Box
            className="skills-card"
            key={9}
            data-aos="zoom-in-up"
            w={{
              base: "80px",
              sm: "80px",
              md: "100px",
              lg: "100px",
              xl: "100px",
            }}
          >
            <Image className="skills-card-img" src={photoshop} />
            <Text
              className="skills-card-name"
              textAlign={"center"}
              color={"white"}
              fontSize="20px"
              mt={"5px"}
            >
              Photoshop
            </Text>
          </Box>

          <Box
            className="skills-card"
            key={9}
            data-aos="zoom-in-up"
            w={{
              base: "80px",
              sm: "80px",
              md: "100px",
              lg: "100px",
              xl: "100px",
            }}
          >
            <Image className="skills-card-img" src={postman} />
            <Text
              className="skills-card-name"
              textAlign={"center"}
              color={"white"}
              fontSize="20px"
              mt={"5px"}
            >
              Postman
            </Text>
          </Box>

          <Box
            className="skills-card"
            key={9}
            data-aos="zoom-in-up"
            w={{
              base: "80px",
              sm: "80px",
              md: "100px",
              lg: "100px",
              xl: "100px",
            }}
          >
            <Image className="skills-card-img" src={canva} />
            <Text
              className="skills-card-name"
              textAlign={"center"}
              color={"white"}
              fontSize="20px"
              mt={"5px"}
            >
              Canva
            </Text>
          </Box>
        </Flex>
      </Box>

      {/* <Flex
        display={{
          base: "flex",
          sm: "flex",
          md: "flex",
          lg: "flex",
          xl: "flex",
        }}
        flexWrap="wrap"
        m="auto"
        gap="50px"
        justifyContent={"center"}
        p="20px"
      >
        <Box className="skills-card" key={1} data-aos="zoom-in-up" w="80px">
          <Image className="skills-card-img" src={html} />
          <Text
            className="skills-card-name"
            textAlign={"center"}
            color={"white"}
          >
            HTML
          </Text>
        </Box>

        <Box className="skills-card" key={2} data-aos="zoom-in-up" w="80px">
          <Image className="skills-card-img" src={css} />
          <Text
            className="skills-card-name"
            textAlign={"center"}
            color={"white"}
          >
            CSS
          </Text>
        </Box>

        <Box className="skills-card" key={3} data-aos="zoom-in-up" w="80px">
          <Image className="skills-card-img" src={javascript} />
          <Text
            className="skills-card-name"
            textAlign={"center"}
            color={"white"}
          >
            JavaScript
          </Text>
        </Box>

        <Box className="skills-card" key={4} data-aos="zoom-in-up" w="80px">
          <Image className="skills-card-img" src={react} />
          <Text
            className="skills-card-name"
            textAlign={"center"}
            color={"white"}
          >
            React
          </Text>
        </Box>

        <Box className="skills-card" key={5} data-aos="zoom-in-up" w="80px">
          <Image className="skills-card-img" src={redux} />
          <Text
            className="skills-card-name"
            textAlign={"center"}
            color={"white"}
          >
            Redux
          </Text>
        </Box>

        <Box className="skills-card" key={6} data-aos="zoom-in-up" w="80px">
          <Image className="skills-card-img" src={chakraui} />
          <Text
            className="skills-card-name"
            textAlign={"center"}
            color={"white"}
          >
            Chakra UI
          </Text>
        </Box>

        <Box className="skills-card" key={8} data-aos="zoom-in-up" w="80px">
          <Image className="skills-card-img" src={vercel} />
          <Text
            className="skills-card-name"
            textAlign={"center"}
            color={"white"}
          >
            Vercel
          </Text>
        </Box>

        <Box className="skills-card" key={9} data-aos="zoom-in-up" w="80px">
          <Image className="skills-card-img" src={netlify} />
          <Text
            className="skills-card-name"
            textAlign={"center"}
            color={"white"}
          >
            Netlify
          </Text>
        </Box>

        <Box className="skills-card" key={10} w="80px" data-aos="zoom-in-up">
          <Image className="skills-card-img" src={mongo} />
          <Text
            className="skills-card-name"
            textAlign={"center"}
            color={"white"}
          >
            MongoDB
          </Text>
        </Box>

        <Box className="skills-card" key={11} data-aos="zoom-in-up" w="80px">
          <Image className="skills-card-img" src={express} />
          <Text
            className="skills-card-name"
            textAlign={"center"}
            color={"white"}
          >
            Express JS
          </Text>
        </Box>
      </Flex> */}
    </div>
  );
}

export default Skills;
