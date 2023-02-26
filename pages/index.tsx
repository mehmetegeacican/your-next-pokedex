import Head from "next/head";
import { Inter } from "next/font/google";
import axios from "axios";
import PokeCard from "@/components/PokeCard";
import {
  Box,
  SimpleGrid,
  Container,
  Input,
  InputGroup,
  Flex,
  IconButton,
  InputLeftAddon,
} from "@chakra-ui/react";
import {
  ArrowBackIcon,
  ArrowDownIcon,
  ArrowForwardIcon,
} from "@chakra-ui/icons";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const getStaticProps = async () => {
  const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon", {
    params: { limit: 151, offset: 0 },
  });
  return {
    props: {
      pokemons: data.results,
    },
  };
};

export default function Home({ pokemons }: any) {
  const [offset, setOffset] = useState<number>(0);
  const [limit,setLimit] = useState<number>(20);
  const [pokeList,setPokelist] = useState<any>([]);

  useEffect(() => {
    async function fetchPokePage() {
      const {data}  = await axios.get("https://pokeapi.co/api/v2/pokemon", {
        params: { limit: limit, offset: offset },
      });
      setPokelist(data.results);
    }
    fetchPokePage();
  },[offset,limit]);

  return (
    <>
      <Head>
        <title>Pokedex</title>
      </Head>
      <main>
        <Container sx={{ mt: 5, alignContent:"center" }} maxW="md">
          <Flex alignItems={"left"}>
            <IconButton
              colorScheme="blue"
              aria-label="Search database"
              icon={<ArrowBackIcon />}
              sx={{ mr: 2 }}
              onClick={() => setOffset(offset - limit)}
            />
            <IconButton
              colorScheme="blue"
              aria-label="Search database"
              icon={<ArrowForwardIcon />}
              sx={{ mr: 3 }}
              onClick={() => setOffset(offset + limit)}
            />
            <InputGroup>
              <Input placeholder="Search A specific Pokemon"  size='md'  htmlSize={90} width='auto'/>
            </InputGroup>
          </Flex>
        </Container>
        <Container maxW="container.sm" centerContent sx={{ mt: 5 }}>
          <SimpleGrid columns={3} spacing={1} width={800} sx={{ mt: 2 }}>
            {pokeList &&
              pokeList.map((pokemon: any) => {
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
