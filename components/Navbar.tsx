import React from 'react';
import { ReactNode } from 'react';
import {
    Box,
    Flex,
    Button,
    useDisclosure,
    useColorModeValue,
    Stack,
    Text,
    useColorMode,
    IconButton,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    Drawer
  } from '@chakra-ui/react';
import {HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import Link from 'next/link';

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('white', 'red.200');
  return (
    <Box bg={useColorModeValue("red.500", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <IconButton
            variant="outline"
            color={bg} 
            colorScheme="gray.200"
            aria-label="Send email"
            icon={<HamburgerIcon />}
            onClick = {onOpen}
          />
        </Box>
        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <Button onClick={toggleColorMode} variant="outlined" color={bg}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Stack>
        </Flex>
      </Flex>
      <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Welcome</DrawerHeader>
          <DrawerBody>
            <Stack spacing={3}>
                <Link href="/"><Text fontSize='2x1' as ='samp' onClick={onClose}>Home: View Pokemon</Text></Link>
                <Link href="/about"><Text fontSize='2x1' as ='samp' onClick={onClose} >About: About this Project</Text></Link>
                <Link href=""><Text fontSize='2x1' as ='samp' onClick={onClose}> My Poke Team </Text></Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
