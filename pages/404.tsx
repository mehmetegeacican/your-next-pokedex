import React from "react";
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
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";

export default function NotFound() {
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
              404 - Ooops , Seems there is something wrong
            </chakra.h2>
            <Link href="/">
              <Button colorScheme="red" size="md">
                To Homepage
              </Button>
            </Link>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
}
