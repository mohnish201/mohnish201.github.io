import React from "react";
import enhacedPhoto from "../Images/enhancedPhoto.png";
import { Box } from "@chakra-ui/react";

function HomePage() {
  return (
    <div id="home">
      HomePage
      <Box w={{base: "700px", sm: "800px", md: "1000", lg:"1200", xl: "1200px" }} h="700px" backgroundColor="green" m="auto"></Box>
    </div>
  );
}

export default HomePage;
