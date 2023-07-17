import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";


const Statistics = () => {

  // const currentYear = new Date().getFullYear();
  // const startDate = new Date(currentYear, 1, 1); // January 1st of the current year
  // const endDate = new Date(currentYear, 11, 31); // December 31st of the current year
  return (
    <Box margin={'auto'} mt="50px">
      <Heading fontSize={"25px"} textAlign={"center"} color="white" mb="30px">My Github Contributions</Heading>
      <Box display={"flex"} justifyContent="center" className="react-activity-calendar">

      <GitHubCalendar colorScheme="light"   username="mohnish201" year={"2023"} responsive={true}/>
      </Box>
    </Box>
  );
};

export default Statistics;
