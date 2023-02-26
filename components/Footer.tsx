import { Container , Box, Stack, Text ,useColorModeValue} from '@chakra-ui/react'
import React from 'react'

export default function Footer() {
  return (
    <Box
      borderTopWidth={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("red.200", "gray.700")}
      sx = {{mt: 5}}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ md: "space-between" }}
        align={{ md: "center" }}
      >
        <Text>© 2022 Pokemon </Text>
      </Container>
    </Box>
  );
}
