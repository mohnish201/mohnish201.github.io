import { Box } from "@chakra-ui/react";
import React from "react";

function About() {
  return (
    <div id="about" class="about section">
      About
       <Box w={{base: "700px", sm: "800px", md: "1000", lg:"1200", xl: "1200px" }} h="700px" backgroundColor="orangered" m="auto"></Box>     
    </div>
  );
}

export default About;
