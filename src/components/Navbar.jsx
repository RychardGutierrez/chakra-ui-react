import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const Navbar = () => {
  return (
    <Flex as="nav" p="10px" alignItems="center">
      <Heading as="h1">Dojo Task</Heading>
      <Spacer />

      <HStack spacing="20px">
        <Box bg="gray.200" p="10px">
          M
        </Box>
        <Text>pancho@fox.com</Text>
        <Button colorScheme="purple">Logout</Button>
      </HStack>
    </Flex>
    // <Flex bg="gray.200" justify="space-between" wrap="wrap" gap="3">
    //   <Box w="150px" h="50px" bg="red">
    //     1
    //   </Box>
    //   <Box w="150px" h="50px" bg="blue">
    //     2
    //   </Box>
    //   <Box w="150px" h="50px" bg="yellow">
    //     3
    //   </Box>
    //   <Box w="150px" h="50px" bg="orange" flexGrow={2}>
    //     4
    //   </Box>
    //   <Box w="150px" h="50px" bg="coral" flexGrow={3}>
    //     5
    //   </Box>
    // </Flex>
  );
};

export default Navbar;
