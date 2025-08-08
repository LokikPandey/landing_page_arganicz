import React from 'react';
import { Stack, Box, Image, HStack, VStack, Text, Heading, Link } from '@chakra-ui/react';
import base1 from '../Assets/base1.png';
import base2 from '../Assets/base2.png';
import base3 from '../Assets/base3.png';
import base4 from '../Assets/base4.png';
// import { link } from 'framer-motion/client';
import leaves from '../Assets/leaves.png'; // Decorative element
function BottomSection2() {
  return (
    
    <Box>
          <Image
    src={leaves}
    alt="Decorative Leaves"
    position="absolute"
    top="1000px"
    left="-40px"
    w="250px"
    h="auto"
    opacity={0.15}
    zIndex={0}
    pointerEvents="none" // so clicks pass through
  />
            <Image
    src={leaves}
    alt="Decorative Leaves"
    position="absolute"
    top="1300px"
    left="0px"
    w="350px"
    h="auto"
    rotateX={180}
    opacity={0.15}
    zIndex={0}
    pointerEvents="none" // so clicks pass through
  />
      <Stack
        direction={['column', 'row']}
        spacing={4}
        align="center"
        justify="center"
        bg="#ffffff"
        p={4}
        minH="20vh"
        maxH="100%"
        position="relative"
      >
        {/* Left Section: Testimonial */}
        <HStack
          spacing={4}
          align="flex-start"
          p={8}
          maxW={['100%', '40%']}
          justifyContent="center"
          position={'relative'}
          zIndex={1}
          top={[0, 20]}
        >
          <Text
            fontSize={['9xl', '9xl']}
            position={'relative'}
            top={-12}
            fontFamily="mozilla headline"
            color="#e2fdbdff"
            mb={2}
          >
            "
          </Text>
          <VStack py={0}>
            <Text
              fontSize={['md', 'lg', 'xl']}
              color="green.700"
              fontFamily="'Raleway', sans-serif"
              textAlign="left"
            >
              Arganicz has transformed my mornings! The organic ingredients and
              eco-friendly packaging make it a must-have in my daily routine."
            </Text>
            <Text
              fontSize={['md', 'xl']}
              color="gray.900"
              fontFamily="'Raleway', sans-serif"
              textAlign="left"
            >
              - Bina Raut
            </Text>
          </VStack>
        </HStack>

        {/* Right Section: Best Selling Products */}
        <VStack w={['100%', '50%']} alignItems="center" justifyContent="center" spacing={4}>
          <Heading
            position={'relative'}
            left={[0, '-90px']}
            top={4}
            fontSize={['3xl', '3xl', '4xl']}
            fontFamily="'Raleway', sans-serif"
            color="green.700"
            textAlign="center"
          >
            Our Best Selling
          </Heading>

          {/* First Row */}
          <Stack
            direction={['column', 'row']}
            spacing={4}
            p={10}
            align="center"
            justify="center"
            w="100%"
            maxW="1200px"
          >
            {[
              { src: base1, title: 'Organic Green Tea',link: 'https://arganicz.com/product/organic-green-tea-25-bags-ZqkpsM' },
              { src: base2, title: 'LemonGrass Black Tea',link: 'https://arganicz.com/product/organic-lemongrass-black-tea-25-bags-ae77o1' }
            ].map((item, index) => (
              <VStack key={index} spacing={2} align="center" justify="center" w="100%">
                <Link href={item.link} _hover={{ textDecoration: 'none' }}>
                  <Image
                    src={item.src}
                    alt={item.title}
                    height="150px"      // fixed height
                    maxW="100%"         // responsive width
                    objectFit="contain" // no cropping
                    borderRadius="md"
                    _hover={{ transform: 'scale(1.05)', transition: 'transform 0.3s ease' }}
                  />
                </Link>
                <Text
                  fontSize={['md', 'lg', 'xl']}
                  color="green.700"
                  fontFamily="'Raleway', sans-serif"
                  textAlign="center"
                >
                  {item.title}
                </Text>
              </VStack>
            ))}
          </Stack>

          {/* Second Row */}
          <Stack
            direction={['column', 'row']}
            spacing={4}
            align="center"
            justify="center"
            w="100%"
            maxW="1200px"
          >
            {[
              { src: base3, title: 'Organic Black Tea',link:'https://arganicz.com/product/organic-black-tea-25-bags-kLCIxF' },
              { src: base4, title: 'Ginger Black Tea' ,link:'https://arganicz.com/product/organic-ginger-black-tea-25-bags-ILj0on'}
            ].map((item, index) => (
              <VStack key={index} spacing={2} align="center" justify="center" w="100%">
                <Link href={item.link} _hover={{ textDecoration: 'none' }}>
                  <Image
                    src={item.src}
                    alt={item.title}
                    height="150px"
                    maxW="100%"
                    objectFit="contain"
                    borderRadius="md"
                    _hover={{ transform: 'scale(1.05)', transition: 'transform 0.3s ease' }}
                  />
                </Link>
                <Text
                  fontSize={['md', 'lg', 'xl']}
                  color="green.700"
                  fontFamily="'Raleway', sans-serif"
                  textAlign="center"
                >
                  {item.title}
                </Text>
              </VStack>
            ))}
          </Stack>
        </VStack>
      </Stack>
    </Box>
  );
}

export default BottomSection2;
