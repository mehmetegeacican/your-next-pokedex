import React from 'react';
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
    Drawer,
    ListItem,
    List,
    ListIcon
  } from '@chakra-ui/react';
import {HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { IconType } from 'react-icons';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
} from 'react-icons/fi';
import { Divider } from '@chakra-ui/react'
interface LinkItemProps {
  name: string;
  icon: IconType;
  href: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Home:Pokedex', icon: FiHome , href: '/'},
  { name: 'About', icon: FiTrendingUp , href: '/about'},
  { name: 'My PokeTeam', icon: FiCompass, href: '/team' },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('white', 'red.200');
  const hoverBg = useColorModeValue('cyan.400','tomato');
  return (
    <Box bg={useColorModeValue("red.500", "gray.900")} px={4} transition="background-color 200ms linear">
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <IconButton
            variant="outline"
            color={bg}
            colorScheme="gray.200"
            aria-label="Send email"
            icon={<HamburgerIcon />}
            onClick={onOpen}
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
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px" alignSelf="center">Welcome</DrawerHeader>
          <DrawerBody>
            <List spacing={6}>
              {LinkItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <ListItem>
                    <Flex
                      align="center"
                      p="4"
                      borderRadius="lg"
                      role="group"
                      cursor="pointer"
                      _hover={{
                        bg: hoverBg,
                        color: "white",
                      }}
                    >
                      <ListIcon
                        as={item.icon}
                        w={7}
                        h={7}
                        alignContent="center"
                      />
                      <Text fontSize="2xl" onClick={onClose}>
                        {item.name}
                      </Text>
                    </Flex>
                    <Divider />
                  </ListItem>
                </Link>
              ))}
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
