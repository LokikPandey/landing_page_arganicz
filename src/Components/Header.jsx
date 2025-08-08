import React from 'react';
import {
  Stack,
  Box,
  VStack,
  Heading,
  Text,
  Button,
  Image,
} from '@chakra-ui/react';
import cup from '../Assets/new_cup.png';
import leaves from '../Assets/leaves.png'; // Decorative element

function Header() {
  return (
    <Box position="relative" overflow="hidden" bg="#E9FCCE">
      {/* 🌿 Large Center Background Leaf */}
      <Image
        src={leaves}
        alt="Background Leaves"
        position="absolute"
        top="30%"
        left="20%"
        transform="rotate(-30deg)"
        w={['300px', '500px', '600px']}
        opacity={0.07}
        zIndex={0}
        pointerEvents="none"
      />

      {/* 🌿 Top Left Leaves */}
      <Image
        src={leaves}
        alt="Decorative Leaves"
        position="absolute"
        top={['-40px', '-60px']}
        left={['-40px', '-60px']}
        w={['150px', '200px']}
        opacity={0.15}
        pointerEvents="none"
        zIndex={0}
      />

      {/* 🌿 Bottom Right Leaves */}
      <Image
        src={leaves}
        alt="Decorative Leaves"
        position="absolute"
        bottom={['-40px', '-60px']}
        right={['-40px', '-60px']}
        w={['140px', '180px']}
        opacity={0.15}
        transform="rotate(180deg)"
        pointerEvents="none"
        zIndex={0}
      />

      {/* 🌿 Behind Tea Cup */}
      <Image
        src={leaves}
        alt="Decorative Leaves"
        position="absolute"
        bottom="10%"
        right="30%"
        w="180px"
        opacity={0.1}
        transform="rotate(45deg)"
        pointerEvents="none"
        zIndex={0}
      />

            <Image
        src={leaves}
        alt="Decorative Leaves"
        position="absolute"
        bottom="50%"
        right="50%"
        w="180px"
        opacity={0.1}
        transform="rotate(45deg)"
        pointerEvents="none"
        zIndex={0}
      />
                  <Image
        src={leaves}
        alt="Decorative Leaves"
        position="absolute"
        bottom="50%"
        right="10%"
        w="180px"
        opacity={0.1}
        transform="rotate(45deg)"
        pointerEvents="none"
        zIndex={0}
      />

      {/* 🌿 Main Content */}
      <Stack
        direction={['column', 'row']}
        justifyContent="space-between"
        alignItems="center"
        px={[6, 12, 20, 40]}
        py={[10, 16]}
        minH={['auto', '80vh']}
        spacing={[10, 4]}
        position="relative"
        zIndex={1}
      >
        {/* LEFT SECTION */}
        <VStack
          w={['100%', '45%']}
          alignItems={['center', 'flex-start']}
          justifyContent="center"
          spacing={6}
        >
          <Box>
            <Heading
              fontSize={['5xl', '6xl', '6xl', '78px']}
              lineHeight={1.2}
              fontWeight="500"
              mb={6}
            >
              Feel Better,<br />
              Think Clearer,<br />
              Live Naturally.
            </Heading>
            <Text fontSize={['md', 'x-large']} color="gray.800">
              Start your daily wellness ritual with <br />
              100% organic teas from Agranicz.
            </Text>
          </Box>

          <Stack direction={['column', 'row']} spacing={6} gap={[5, 10]} pt={2}>
            <Button
              colorScheme="green"
              bg="green.700"
              color="white"
              px={10}
              py={6}
              fontSize="md"
              _hover={{ bg: 'white', color: 'green.700' }}
              borderRadius={'25px'}
              onClick={() => window.open(
    "https://play.google.com/store/apps/details?id=com.arganicz.userapps",
    "_blank"
  )}
            >
              Download Now
            </Button>
            <Button
              variant="outline"
              borderColor="green.700"
              color="green.700"
              px={10}
              py={6}
              fontSize="md"
              _hover={{ bg: 'green.700', color: 'white' }}
              borderRadius={'25px'}
              onClick={() => window.open(
    "https://arganicz.com",
    "_blank"
  )}
            >
              Visit Our Site
            </Button>
          </Stack>
        </VStack>

        {/* RIGHT SECTION */}
        <Box
          w={['100%', '65%']}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src={cup}
            alt="Tea Cup"
            objectFit="contain"
            maxH={['300px', '350px', '400px']}
            zIndex={2}
          />
        </Box>
      </Stack>
    </Box>
  );
}

export default Header;
