import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Text,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

import { MdEmail, MdLocationOn } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si";
import "aos/dist/aos.css";
import Aos from "aos";

const initState = {
  name: "",
  email: "",
  message: "",
};
function Contact() {
  const [state, handleSubmit] = useForm("xzblzbyr");
  const toast = useToast();

  const [data, setData] = useState(initState);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleFormSubmit = (event) => {
    handleSubmit(event);
    if (state.succeeded) {
      setData(initState);
    }
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Box id="contact" mt="150px" data-aos="zoom-in-up">
      <Heading color={"#FC4D3C"} mb="30px" textAlign="center" fontSize={"40px"}>
      Let's connect and turn ideas into realities!
      </Heading>
      <Flex
        justify={"space-evenly"}
        align="center"
        backgroundColor="whiteAlpha.200"
        padding={"20px"}
        borderRadius="20px"
        width="80%"
        margin={"auto"}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
        }}
      >
        <VStack align={"left"} color="white" spacing={"50px"}>
          <Box lineHeight={"30px"}>
            <HStack align={"top"} spacing="20px">
              <MdEmail size="30px" />
              <Box>
                <Heading size={"md"} color="white">
                  Have a question ?
                </Heading>
                <Text>I am here to help You</Text>
                <Text color={"orangered"}>Email me at</Text>
                <Link
                  to="mohnish201@gmail.com"
                  color={"orangered"}
                  id="contact-email"
                >
                  mohnish201@gmail.com
                </Link>
              </Box>
            </HStack>
          </Box>

          <Box lineHeight={"30px"}>
            <HStack align="top" spacing={"20px"}>
              <MdLocationOn size="35px" />
              <Box>
                <Heading size={"md"} color="white">
                  Current Loaction
                </Heading>
                <Text>Bhopal Madhya Pradesh</Text>
                <Text color={"orangered"} id="contact-phone">
                  +91-9981705365
                </Text>
              </Box>
            </HStack>
          </Box>

          <HStack spacing={"30px"} justifyContent="center" m="auto">
            <Link
              id="contact-linkedin"
              href="https://www.linkedin.com/in/mohnish-vishwakarma-172196230/"
              target={"_blank"}
            >
              <SiLinkedin size={"30px"} color="white" />
            </Link>
            <Link
              id="contact-github"
              href="https://github.com/mohnish201"
              target={"_blank"}
            >
              <VscGithub size="30px" color="white" />
            </Link>
          </HStack>
        </VStack>

        <form onSubmit={handleFormSubmit}>
          <FormControl
            w={{
              base: "200px",
              sm: "250px",
              md: "300px",
              lg: "400px",
              xl: "500px",
            }}
            margin="auto"
            padding={"20px"}
            borderRadius="20px"
            color="white"
          >
            <FormLabel>Your Name</FormLabel>
            <Input
              type={"text"}
              placeholder="Your Name"
              name="name"
              id="name"
              backgroundColor={"black"}
              color="white"
              value={data.name}
              onChange={handleChange}
            />
            <FormLabel mt={"10px"}>Your Email</FormLabel>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email Here"
              backgroundColor={"black"}
              color="white"
              value={data.email}
              onChange={handleChange}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <FormLabel mt={"10px"}>Your Message</FormLabel>
            <Textarea
              placeholder="Type Your message here"
              id="message"
              name="message"
              backgroundColor={"black"}
              color="white"
              value={data.message}
              onChange={handleChange}
            />

            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <Center mt="20px">
              <Button
                type="submit"
                colorScheme="orange"
                onClick={() =>
                  toast({
                    title: "Thankyou for Contacting me 😊.",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                  })
                }
                disabled={state.submitting}
              >
                Send Message
              </Button>
            </Center>
          </FormControl>
        </form>
      </Flex>

      <Box h="120px" bgColor={"#080808"}></Box>
    </Box>
  );
}

export default Contact;
