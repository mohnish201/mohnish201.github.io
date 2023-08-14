import {
  Box,
  HStack,
  Heading,
  Image,
  Text,
  Grid,
  GridItem,
  Center,
  Button,
  Link,
  AspectRatio,
} from "@chakra-ui/react";
import React from "react";
// import { Carousel } from "react-responsive-carousel";
import medwise from "../Images/medwise.png";
import finacia from "../Images/finacia.png";
import godecor from "../Images/godecor.png";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-carousel3";
import { BsGithub } from "react-icons/bs";
import { SiNetlify } from "react-icons/si";
import medwise_mockup_video from "../Images/mediwse_mockup_video.mp4";
import financia_mockup_video from "../Images/financia_mockup_video.mp4";
import godecor_mockup_video from "../Images/godecor_mockup_video.mp4";
import Money_Mentor_mockup_video from "../Images/Money_Mentor_mockup_video.mp4";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

function Projects() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Box m={"auto"} id="projects" mt="200px">
      <Heading
        textAlign={"center"}
        color={"#FC4D3C"}
        data-aos="zoom-in-up"
        fontSize={"40px"}
        mb="20px"
      >
        Projects
      </Heading>
      <Center>
        <Grid
          w="90%"
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
            xl: "repeat(2, 1fr)",
          }}
          rowGap={"40px"}
          placeItems="center"
        >
          <GridItem
            w={{
              base: "300px",
              sm: "300px",
              md: "600px",
              lg: "400px",
              xl: "600px",
            }}
            padding={"20px"}
            className="project-card"
            data-aos="zoom-in-up"
            
          >
            {/* <Image src={medwise} alt="medwise" borderRadius="20px" pb="10px" /> */}

            <video autoPlay loop muted style={{borderRadius:"25px"}}>
              <source src={medwise_mockup_video} type="video/mp4" />
            </video>

            <Heading
              size={"md"}
              textAlign="center"
              color={"orangered"}
              pb="10px"
              className="project-title"
            >
              Medwise
            </Heading>
            <Text
              pb="10px"
              color={"white"}
              className="project-description"
              textAlign={"justify"}
            >
              Medwise provide Health Care Services which allows you to find
              Doctors and schedule virtual appointments with experienced doctors
              across various specialties.
            </Text>

            <HStack justifyContent={"center"} pb="20px" spacing="20px">
              <Link
                href="https://github.com/mohnish201/blushing-harmony-5466"
                target={"_blank"}
              >
                <Button
                  colorScheme={"red"}
                  size="sm"
                  leftIcon={<BsGithub color="white" />}
                  className="project-github-link"
                >
                  Github
                </Button>
              </Link>

              <Link href="https://medwise.netlify.app/" target={"_blank"}>
                <Button
                  colorScheme={"cyan"}
                  size="sm"
                  leftIcon={<SiNetlify color="white" />}
                  className="project-deployed-link"
                >
                  Netlify
                </Button>
              </Link>
            </HStack>
            <Heading size={"sm"} color="white" textAlign={"center"} pb="10px">
              Tech Stacks
            </Heading>
            <HStack
              justifyContent={"center"}
              className="project-tech-stack"
              flexWrap="wrap"
            >
              <Image
                src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                borderRadius={"30px"}
              />
              <Image
                src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                borderRadius={"30px"}
              />

              <Image
                src="	https://img.shields.io/badge/Chakra--UI-319795?style=for-the-badge&logo=chakra-ui&logoColor=white"
                borderRadius={"30px"}
              />
            </HStack>
          </GridItem>

          <GridItem
            w={{
              base: "300px",
              sm: "300px",
              md: "600px",
              lg: "400px",
              xl: "600px",
            }}
            padding={"20px"}
            className="project-card"
            data-aos="zoom-in-up"
          >
            {/* <Image src={godecor} alt="godecor" borderRadius="20px" pb="10px" /> */}
            <video autoPlay loop muted style={{borderRadius:"25px"}}>
              <source src={godecor_mockup_video} type="video/mp4" />
            </video>
            <Heading
              size={"md"}
              textAlign="center"
              color={"orangered"}
              pb="10px"
              className="project-title"
            >
              Go Decor
            </Heading>
            <Text
              color={"white"}
              pb="10px"
              className="project-description"
              textAlign={"justify"}
            >
              Go Decor is a popular retail store in the United States that
              offers a wide range of products for the home, including bedding,
              kitchen appliances, home decor, and more.
            </Text>

            <HStack justifyContent={"center"} pb="20px" spacing="20px">
              <Link
                href="https://github.com/mohnish201/-jumbled-silk-6637"
                target={"_blank"}
              >
                <Button
                  colorScheme={"red"}
                  size="sm"
                  leftIcon={<BsGithub color="white" />}
                  className="project-github-link"
                >
                  Github
                </Button>
              </Link>
              <Link
                href="https://dainty-faloodeh-a781a1.netlify.app/"
                target={"_blank"}
              >
                <Button
                  href=""
                  target={"_blank"}
                  colorScheme={"cyan"}
                  size="sm"
                  leftIcon={<SiNetlify color="white" />}
                  className="project-deployed-link"
                >
                  Netlify
                </Button>
              </Link>
            </HStack>
            <Heading size={"sm"} color="white" textAlign={"center"} pb="10px">
              Tech Stacks
            </Heading>
            <HStack
              justifyContent={"center"}
              className="project-tech-stack"
              flexWrap="wrap"
            >
              <Image
                src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                borderRadius={"30px"}
              />
              <Image
                src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                borderRadius={"30px"}
              />
              <Image
                src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
                borderRadius={"30px"}
              />
            </HStack>
          </GridItem>

          <GridItem
            w={{
              base: "300px",
              sm: "300px",
              md: "600px",
              lg: "400px",
              xl: "600px",
            }}
            padding={"20px"}
            className="project-card"
            data-aos="zoom-in-up"
          >
            {/* <Image src={finacia} alt="financia" borderRadius="20px" pb="10px" /> */}
            <video autoPlay loop muted style={{borderRadius:"25px"}}>
              <source src={financia_mockup_video} type="video/mp4" />
            </video>
            <Heading
              size={"md"}
              textAlign="center"
              color={"orangered"}
              pb="10px"
              className="project-title"
            >
              Financia
            </Heading>
            <Text
              pb="10px"
              color={"white"}
              className="project-description"
              textAlign={"justify"}
            >
              Our financial website is a comprehensive platform that offers a
              wide range of financial services to users. Whether you're looking
              to make payments, or manage your finances, our website has you
              covered.
            </Text>

            <HStack justifyContent={"center"} pb="20px" spacing="20px">
              <Link
                href="https://github.com/mohnish201/sole-friction-3146"
                target={"_blank"}
              >
                <Button
                  colorScheme={"red"}
                  size="sm"
                  leftIcon={<BsGithub color="white" />}
                  className="project-github-link"
                >
                  Github
                </Button>
              </Link>
              <Link
                href="https://aquamarine-alfajores-b85955.netlify.app/"
                target="_blank"
              >
                <Button
                  colorScheme={"cyan"}
                  size="sm"
                  leftIcon={<SiNetlify color="white" />}
                  className="project-deployed-link"
                >
                  Netlify
                </Button>
              </Link>
            </HStack>
            <Heading size={"sm"} color="white" textAlign={"center"} pb="10px">
              Tech Stacks
            </Heading>
            <HStack
              justifyContent={"center"}
              className="project-tech-stack"
              flexWrap="wrap"
            >
              <Image
                src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                borderRadius={"30px"}
              />
              <Image
                src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                borderRadius={"30px"}
              />
              <Image
                src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
                borderRadius={"30px"}
              />
            </HStack>
          </GridItem>

          <GridItem
            w={{
              base: "300px",
              sm: "300px",
              md: "600px",
              lg: "400px",
              xl: "600px",
            }}
            padding={"20px"}
            className="project-card"
            data-aos="zoom-in-up"
          >
            {/* <Image src={finacia} alt="financia" borderRadius="20px" pb="10px" /> */}
            <video autoPlay loop muted style={{borderRadius:"25px"}}>
              <source src={Money_Mentor_mockup_video} type="video/mp4" />
            </video>
            <Heading
              size={"md"}
              textAlign="center"
              color={"orangered"}
              pb="10px"
              className="project-title"
            >
              Money Mentor
            </Heading>
            <Text
              color={"white"}
              pb="10px"
              className="project-description"
              textAlign={"justify"}
            >
              Our website is a comprehensive platform that caters to diverse
              financial needs, offering expertly crafted solutions from personal
              loans to business funding. Start your journey towards financial
              stability.
            </Text>

            <HStack justifyContent={"center"} pb="20px" spacing="20px">
              <Link
                href="https://github.com/mohnish201/vogue-pocket-8479"
                target="_blank"
              >
                <Button
                  colorScheme={"red"}
                  size="sm"
                  leftIcon={<BsGithub color="white" />}
                  className="project-github-link"
                >
                  Github
                </Button>
              </Link>
              <Link href="https://money-mentor.netlify.app/" target="_blank">
                <Button
                  colorScheme={"cyan"}
                  size="sm"
                  leftIcon={<SiNetlify color="white" />}
                  className="project-deployed-link"
                >
                  Netlify
                </Button>
              </Link>
            </HStack>
            <Heading size={"sm"} color="white" textAlign={"center"} pb="10px">
              Tech Stacks
            </Heading>
            <HStack
              justifyContent={"center"}
              className="project-tech-stack"
              flexWrap="wrap"
            >
              <Image
                src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                borderRadius={"30px"}
              />
              <Image
                src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                borderRadius={"30px"}
              />

              <Image
                src="	https://img.shields.io/badge/Chakra--UI-319795?style=for-the-badge&logo=chakra-ui&logoColor=white"
                borderRadius={"30px"}
              />

              <Image
                src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white"
                borderRadius={"30px"}
              />
            </HStack>
          </GridItem>
        </Grid>
      </Center>
    </Box>
  );
}

export default Projects;
