import Head from 'next/head';
import { Inter } from 'next/font/google';
import axios from 'axios';
import PokeCard from '@/components/PokeCard';
import { Box, SimpleGrid,Container, Input, InputGroup, Flex, IconButton } from '@chakra-ui/react';
import { ArrowBackIcon,ArrowDownIcon,ArrowForwardIcon } from '@chakra-ui/icons';


const inter = Inter({ subsets: ['latin'] });

export const getStaticProps = async () => {
  const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon', { params: { limit: 20, offset: 0 } });
  return {
    props: {
      pokemons: data.results,
    },
  };
}


export default function Home({pokemons}:any) {
  return (
    <>
      <Head>
        <title>Pokedex</title>
      </Head>
      <main>
        <Container sx={{ mt: 5 }} maxW="md">
          <Flex>
            <IconButton
              colorScheme="blue"
              aria-label="Search database"
              icon={<ArrowBackIcon />}
              sx={{mr:2}}
            />
            <IconButton
              colorScheme="blue"
              aria-label="Search database"
              icon={<ArrowDownIcon />}
              sx={{mr:2}}
            />
            <IconButton
              colorScheme="blue"
              aria-label="Search database"
              icon={<ArrowForwardIcon />}
              sx={{mr:3}}
            />
            <InputGroup>
              <Input placeholder="Search A specific Pokemon" />
            </InputGroup>
          </Flex>
        </Container>
        <Container maxW="container.sm" centerContent sx={{ mt: 5 }}>
          <SimpleGrid columns={3} spacing={1} width={800} sx={{ mt: 2 }}>
            {pokemons && pokemons.map((pokemon: any) => {
              return (
                <Box key={pokemon.name}>
                  <PokeCard url={pokemon.url} />
                </Box>
              );
            })}
          </SimpleGrid>
        </Container>
      </main>
    </>
  );
}
