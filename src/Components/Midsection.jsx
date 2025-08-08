import React from 'react'
import {Stack,Box,Image, HStack} from '@chakra-ui/react'
import mid1 from '../Assets/mid1.png'
import mid2 from '../Assets/mid2.png'
import mid3 from '../Assets/mid3.png'
import mid4 from '../Assets/mid4.png'
import mid5 from '../Assets/mid5.png'
import mid6 from '../Assets/mid6.png'


function Midsection() {
    const list1 = [mid1, mid2, mid3];
    const list2 = [mid4, mid5, mid6];
  return (
    <Stack direction={'column'} bg={'green.700'} p={4} spacing={4} align="center" justify="center" minH="40vh">
        <Box color={'white'} fontSize={['2xl', '3xl', '5xl']} fontFamily={'sans-serif'} textTransform={'uppercase'}>Discover the benefits</Box>
        <Stack direction={['column','row']} gap={10} align="center" justify="center" w="100%" maxW="1200px">
            <HStack gap={[4,10]} justifyContent={["center","flex-end"]} flexWrap="wrap" w="100%">
                {list1.map((item, index) => (
                    <Box key={index} p={0} maxH={'130px'} maxW={'130px'} bg="#E9FCCE" borderRadius={'full'} _hover={{ transform: 'scale(1.05)', transition: 'transform 0.3s ease' }}>
                        <Image src={item} alt={`Midsection Image ${index + 1}`} boxSize="100px" objectFit="contain" borderRadius="md" />
                    </Box>
                ))}
            </HStack>
                <HStack gap={[4, 10]} justifyContent={["center","flex-start"]} flexWrap="wrap" w="100%">
                {list2.map((item, index) => (
                    <Box key={index} p={0} maxH={'130px'} maxW={'130px'} bg="#E9FCCE" borderRadius={'full'} _hover={{ transform: 'scale(1.05)', transition: 'transform 0.3s ease' }}>
                        <Image src={item} alt={`Midsection Image ${index + 1}`} boxSize="100px" objectFit="contain" borderRadius="md" />
                    </Box>
                ))}
            </HStack>
        </Stack>
        <Box ></Box>
    </Stack>
  )
}

export default Midsection