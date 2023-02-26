import React from 'react';
import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  Text,
  chakra,
  Grid,
  GridItem,
  Container,
  Stack,
  useColorModeValue
} from '@chakra-ui/react';
import Link from 'next/link';

export default function About() {

  const textColor = useColorModeValue('gray.500','red.200');
  return (
    <Box as={Container} maxW="7xl" mt={14} p={4}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={4}
      >
        <GridItem colSpan={1}>
          <VStack alignItems="flex-start" spacing="20px">
            <chakra.h2 fontSize="3xl" fontWeight="700">
              About
            </chakra.h2>
            <Link href="/">
              <Button colorScheme="red" size="md">
                To Homepage
              </Button>
            </Link>
          </VStack>
        </GridItem>
        <GridItem>
          <Stack spacing={3}>
            <Flex>
              <Text as="i" color={textColor}>
                This is a simple pokedex implemented with Next.js. The Sole
                purpose of this project is to learn Next js and nothing more.
                As for the styling, Chakra UI has been used for providing
                default template.
              </Text>
            </Flex>
            <Flex>
              <Text as="i" color={textColor}>
                The layout of the page consists of Navbar, Sidebar, Children
                Content and Footer. The Page have been determined to be
                implemented as simplistic as possible.
              </Text>
            </Flex>
          </Stack>
        </GridItem>
      </Grid>
    </Box>
  );
}
