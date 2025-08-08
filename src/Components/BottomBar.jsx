import React from "react";
import { Box, Text, HStack } from "@chakra-ui/react";

const BottomBar = () => {
  return (
    <Box
      bg="green.700"
      color="green.100"
      py={3}
      px={6}
      fontFamily="heading"
      fontWeight="medium"
    >
      <HStack justify="space-between" spacing={4} flexWrap="wrap">
        <Text fontSize="sm">
          © 2027 | This is a property of <b>Arganicz</b> and <b>Organic Hub</b>
        </Text>
        <HStack spacing={6}>
          <Text fontSize="sm">📧 info@arganicz.com</Text>
          <Text fontSize="sm">📞 +977-9767993070</Text>
        </HStack>
      </HStack>
    </Box>
  );
};

export default BottomBar;
