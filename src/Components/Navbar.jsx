import React from "react";
import {
  Button,
  Heading,
  HStack,
  Stack,
  Box,
  Image,
} from "@chakra-ui/react";
import leaves from "../Assets/leaves.png";
import logo from "../Assets/logo.png";

const Navbar = () => {
  return (
    <Box position="relative" bg="#E9FCCE" overflow="hidden">
      {/* 🍃 Leaves - Top Left */}
      <Image
        src={leaves}
        alt="Leaves Top Left"
        position="absolute"
        top={8}
        left="-32px"
        w={["100px", "150px"]}
        opacity={0.15}
        zIndex={0}
        pointerEvents="none"
      />

      {/* 🍃 Leaves - Top Right */}
      <Image
        src={leaves}
        alt="Leaves Top Right"
        position="absolute"
        top={-6}
        right={-6}
        w={["100px", "150px"]}
        opacity={0.15}
        transform="rotateY(180deg)"
        zIndex={0}
        pointerEvents="none"
      />

      {/* 🍃 Leaves - Bottom Right */}
      <Image
        src={leaves}
        alt="Leaves Bottom Right"
        position="absolute"
        bottom={-8}
        right={-8}
        w="130px"
        opacity={0.12}
        transform="rotate(120deg)"
        zIndex={0}
        pointerEvents="none"
      />

      {/* 🍃 Leaves - Behind Center */}
      <Image
        src={leaves}
        alt="Background Leaves"
        position="absolute"
        top="20%"
        left="25%"
        transform="rotate(-30deg)"
        w={["200px", "300px"]}
        opacity={0.07}
        zIndex={0}
        pointerEvents="none"
      />

      {/* Main Navbar */}
      <Stack
        maxH="15vh"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        px={[6, 10, 40]}
        py={4}
        position="relative"
        zIndex={1}
      >
        {/* Logo + Heading */}
        <HStack spacing={3} align="center">
          <Image
          position={"relative"}
          top={2}
            src={logo}
            alt="Arganicz Logo"
            boxSize={["0px", "200px", "277px"]}
            objectFit="contain"
          />
          <Heading
            fontSize={["2xl", "3xl", "4xl"]}
            color="green.700"
            fontFamily="'Raleway', sans-serif"
            fontWeight="bold"
            display={["block","none"]}
          >
            Arganicz
          </Heading>
        </HStack>

        {/* Buttons */}
        <HStack spacing={4}>
          <Button
            bg="white"
            color="green.700"
            border="2px solid"
            borderColor="green.700"
            _hover={{
              bg: "green.700",
              color: "white",
            }}
            borderRadius="25px"
            px={[2, 6]}
            fontSize="md"
            onClick={() => window.open("https://www.arganicz.com/")}
          >
            Order Now
          </Button>

          <Button
            bg="green.700"
            color="white"
            _hover={{
              bg: "white",
              color: "green.700",
              border: "2px solid",
              borderColor: "green.700",
            }}
            borderRadius="25px"
            px={[2, 6]}
            fontSize="md"
            as="a"
            href="https://forms.gle/your-form-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Form
          </Button>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Navbar;
