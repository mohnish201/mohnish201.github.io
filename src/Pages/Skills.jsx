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
import photoshop from "../Images/photoshop.png";
import postman from "../Images/postman.png";
import vscode from "../Images/vscode.png";

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
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M16 2L3 7L5 24L16 30L27 24L29 7L16 2Z"
                  fill="#DD0031"
                ></path>{" "}
                <path d="M16 2V30L27 24L29 7L16 2Z" fill="#C3002F"></path>{" "}
                <path
                  d="M15.9998 5.09375L7.87305 23.3638H10.9031L12.5368 19.2757H19.4348L21.0685 23.3638H24.0986L15.9998 5.09375ZM18.3736 16.7557H13.626L15.9998 11.0298L18.3736 16.7557Z"
                  fill="white"
                ></path>{" "}
              </g>
            </svg>
            <Text
              className="skills-card-name"
              textAlign={"center"}
              color={"white"}
              fontSize="20px"
              mt={"5px"}
            >
              Angular
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
            <svg
              fill="#ffffff"
              viewBox="0 0 24 24"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>OpenAI icon</title>
                <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"></path>
              </g>
            </svg>
            <Text
              className="skills-card-name"
              textAlign={"center"}
              color={"white"}
              fontSize="20px"
              mt={"5px"}
            >
              OpenAI
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
