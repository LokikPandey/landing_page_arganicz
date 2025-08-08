import React from 'react'
import {Box,Stack,VStack,Image,Heading} from '@chakra-ui/react'
import cup from '../Assets/cup.png'
function BottomSection1() {
    const info = ['100 % Organic Ingredients', 'No Artificial Flavors', 'Sustainably Sourced', 'Handpicked Quality', 'Eco-Friendly Packaging'];
  return (
    <Box >
        <Stack direction={['column', 'row']} spacing={4} align="center" justify="center" bg="#ffffffff" p={4} minH="20vh" maxH={['100vh', '70vh']} position="relative">
            <VStack spacing={2} align="center" justify="center" gap={5}>
                <Heading fontSize={['2xl', '3xl', '4xl']} fontFamily="'Raleway', sans-serif" paddingTop={[0,1,2,10]}>Benefits of </Heading>
                <Heading color="green.700" fontFamily="'Raleway', sans-serif" fontSize={['3xl', '4xl', '5xl']} paddingBottom={[0,1,2,10]}>Arganicz</Heading>
                {info.map((item, index) => (
                    <Box key={index} fontSize={['md', 'lg', 'xl']} w={'100%'} color="green.700" fontFamily="'Raleway', sans-serif" textAlign="center" bg="#E9FCCE" p={2} borderRadius="full" _hover={{ transform: 'scale(1.05)', transition: 'transform 0.3s ease' }}>
                        {item}
                    </Box>
                ))}
            </VStack>
            <Image src={cup}></Image>
        </Stack>
    </Box>
  )
}

export default BottomSection1