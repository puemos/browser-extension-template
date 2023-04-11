import {
  Heading,
  Stack,
  StatArrow,
  StatGroup,
  StatHelpText,
} from "@chakra-ui/react";
import React from "react";

import {
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";

const HomeView = () => {
  return (
    <Stack spacing="1rem" p="1rem" pr="0rem">
      <Heading fontSize="lg" fontWeight="semibold">
        Home, sweet home
      </Heading>
      <SimpleGrid columns={2} spacing={5}>
        <Stat bgColor={"gray.800"} p={"1rem"}>
          <StatLabel>Sent</StatLabel>
          <StatNumber>345,670</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>

        <Stat bgColor={"gray.800"} p={"1rem"}>
          <StatLabel>Clicked</StatLabel>
          <StatNumber>45</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            9.05%
          </StatHelpText>
        </Stat>

        <Stat bgColor={"gray.800"} p={"1rem"}>
          <StatLabel>Viewed</StatLabel>
          <StatNumber>500,670</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            2.1%
          </StatHelpText>
        </Stat>

        <Stat bgColor={"gray.800"} p={"1rem"}>
          <StatLabel>Sold</StatLabel>
          <StatNumber>125</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            40%
          </StatHelpText>
        </Stat>
      </SimpleGrid>
    </Stack>
  );
};

export default HomeView;
