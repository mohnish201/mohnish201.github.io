import { Box, Heading, HStack, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import "aos/dist/aos.css";
import Aos from "aos";

const Statistics = () => {
  // const currentYear = new Date().getFullYear();
  // const startDate = new Date(currentYear, 1, 1); // January 1st of the current year
  // const endDate = new Date(currentYear, 11, 31); // December 31st of the current year

  const explicitTheme = {
    light: ["#f0f0f0", "#c4edde", "#7ac7c4", "#f73859", "#384259"],
    dark: ["#383838", "#4D455D", "#7DB9B6", "#F5E9CF", "#E96479"],
  };

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Box margin={"auto"} mt="150px" id="statistics">
      <Heading color="#FC4D3C" textAlign={"center"} mb="50px" fontSize={"40px"}>
        Github Statistics
      </Heading>
      <Heading fontSize={"25px"} textAlign={"center"} color="white" mb="30px">
        My Github Contributions
      </Heading>
      <Box
        display={"flex"}
        justifyContent="center"
        className="react-activity-calendar"
        width={"80%"}
        m="auto"
        data-aos="fade-up"
      >
        <GitHubCalendar
          colorScheme="light"
          blockRadius={"20px"}
          username="mohnish201"
          year={"2023"}
          responsive
          style={{ color: "white" }}
        />
      </Box>

      <HStack
        spacing={"30px"}
        justifyContent="center"
        mt="20px"
        flexWrap={"wrap"}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
      >
        <Image
          src="https://github-readme-stats.vercel.app/api?username=mohnish201&theme=highcontrast&hide_border=true&include_all_commits=true&count_private=true"
          data-aos="zoom-in-up"
          id="github-stats-card"
        />
        <Image
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=mohnish201&theme=highcontrast&hide_border=true&include_all_commits=true&count_private=true&layout=compact"
          data-aos="zoom-in-up"
          id="github-top-langs"
        />
        <Image
          src="https://github-readme-streak-stats.herokuapp.com/?user=mohnish201&theme=highcontrast&hide_border=true"
          data-aos="zoom-in-up"
          id="github-streak-stats"
        />
      </HStack>
    </Box>
  );
};

export default Statistics;
