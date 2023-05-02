import { Box, Container, Heading, SimpleGrid, Text } from '@chakra-ui/react';

// const boxStyles = {
//   p: '10px',
//   bg: 'purple.400',
//   color: 'white',
//   m: '10px',
//   textAlign: 'center',
//   filter: 'blur(2px)',
//   ':hover': {
//     color: 'black',
//     bg: 'blue.200',
//   },
// };

export default function Dashboard() {
  return (
    // <Container as="section" maxWidth="4xl" py="20px">
    //   <Heading my="40px" p="10px">
    //     Chakta UI components
    //   </Heading>
    //   <Text marginLeft="50px">
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tenetur
    //     vitae atque mollitia eos explicabo vel impedit suscipit ea qui! Culpa
    //     iusto nemo ex tempore perferendis alias corrupti. Accusantium, modi!
    //   </Text>
    //   <Text ml="50px" color="blue.400">
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tenetur
    //     vitae atque mollitia eos explicabo vel impedit suscipit ea qui! Culpa
    //     iusto nemo ex tempore perferendis alias corrupti. Accusantium, modi!
    //   </Text>
    //   <Box bg="tomato" my="30px" p="20px">
    //     <Text color="white">This is a test</Text>
    //   </Box>
    //   {/* <Box sx={boxStyles}>"Hello world"</Box> */}
    // </Container>
    <SimpleGrid columns={4} spacing={10} minChildWidth="250px">
      <Box bg="white" h="200px" border="1px solid">
        <Text color={{ base: 'pink', md: 'blue', lg: 'blackAlpha.100' }}>
          {' '}
          Hello{' '}
        </Text>
      </Box>
      <Box bg="white" h="200px" border="1px solid">
        2
      </Box>
      <Box bg="white" h="200px" border="1px solid">
        3
      </Box>
      <Box bg="white" h="200px" border="1px solid">
        4
      </Box>

      <Box bg="white" h="200px" border="1px solid">
        1
      </Box>
      <Box bg="white" h="200px" border="1px solid">
        2
      </Box>
      <Box bg="white" h="200px" border="1px solid">
        3
      </Box>
      <Box bg="white" h="200px" border="1px solid">
        4
      </Box>

      <Box bg="white" h="200px" border="1px solid">
        1
      </Box>
      <Box bg="white" h="200px" border="1px solid">
        2
      </Box>
      <Box bg="white" h="200px" border="1px solid">
        3
      </Box>
      <Box bg="white" h="200px" border="1px solid">
        4
      </Box>
    </SimpleGrid>
  );
}
