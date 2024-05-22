import { Container, Text, VStack, Heading, Button, Box, Image, Flex } from "@chakra-ui/react";
import { FaNewspaper, FaChartLine, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="2xl" textAlign="center" mt={8}>
          Welcome to Financial Times
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Stay updated with the latest financial news and market trends.
        </Text>
        <Flex direction={["column", "row"]} spacing={8} justify="center" align="center" width="100%">
          <Box textAlign="center" p={4}>
            <FaNewspaper size="3em" />
            <Heading as="h3" size="lg" mt={4}>
              Latest News
            </Heading>
            <Text mt={2}>
              Get the latest updates on financial markets, stocks, and economy.
            </Text>
          </Box>
          <Box textAlign="center" p={4}>
            <FaChartLine size="3em" />
            <Heading as="h3" size="lg" mt={4}>
              Market Trends
            </Heading>
            <Text mt={2}>
              Analyze the latest market trends and make informed decisions.
            </Text>
          </Box>
          <Box textAlign="center" p={4}>
            <FaEnvelope size="3em" />
            <Heading as="h3" size="lg" mt={4}>
              Subscribe
            </Heading>
            <Text mt={2}>
              Subscribe to our newsletter for daily updates.
            </Text>
          </Box>
        </Flex>
        <Button colorScheme="teal" size="lg" mt={8}>
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;