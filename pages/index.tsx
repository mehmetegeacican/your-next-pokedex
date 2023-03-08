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
  Spinner,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useEffect, useMemo, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const getStaticProps = async () => {
  const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon", {
    params: { limit: 300, offset: 0 },
  });
  return {
    props: {
      pokemons: data.results,
    },
  };
};

export default function Home({ pokemons }: any) {
  const [offset, setOffset] = useState<number>(0);
  const [limit, setLimit] = useState<number>(18);
  const [pokeList, setPokelist] = useState<any>([]);
  const [query, setQuery] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);

  //Pagination is being done on the Client side

  useEffect(() => {
    async function fetchPokePage() {
      const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon", {
        params: { limit: limit, offset: offset },
      });
      setPokelist(data.results);
    }
    fetchPokePage();
  }, [offset, limit]);

  //While the Pagination is being done from the client side,
  //The Filtering is being done on the server side
  const pokemonList = useMemo(() => {
    if (query === "") {
      return pokeList;
    } else {
      setOffset(0);
      return pokemons.filter((pokemon: any) => {
        return pokemon.name.toLowerCase().includes(query.toLowerCase());
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, pokeList]);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 400);
  }, [query]);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 100);
  }, [pokeList]);

  const handleOffset = () => {
    if (offset - limit <= 0) {
      setOffset(0);
    } else {
      setOffset(offset - limit);
    }
  };
  return (
    <>
      <Head>
        <title>Pokedex - Home </title>
      </Head>
      <main>
        <Container sx={{ mt: 5, alignContent: "center" }} maxW="md">
          <Flex alignItems={"left"}>
            <IconButton
              colorScheme="blue"
              aria-label="Search database"
              icon={<ArrowBackIcon />}
              sx={{ mr: 2 }}
              onClick={() => handleOffset()}
            />
            <IconButton
              colorScheme="blue"
              aria-label="Search database"
              icon={<ArrowForwardIcon />}
              sx={{ mr: 3 }}
              onClick={() => setOffset(offset + limit)}
            />
            <InputGroup>
              <Input
                placeholder="Search A specific Pokemon"
                size="md"
                htmlSize={90}
                width="auto"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </InputGroup>
          </Flex>
        </Container>
        <Container maxW="container.sm" centerContent sx={{ mt: 5 }}>
          {loader ? (
            <Spinner color="red.500" />
          ) : (
            <SimpleGrid columns={3} spacing={1} width={800} sx={{ mt: 2 }}>
              {pokeList &&
                pokemonList.map((pokemon: any) => {
                  return (
                    <Box key={pokemon.name}>
                      <PokeCard url={pokemon.url} />
                    </Box>
                  );
                })}
            </SimpleGrid>
          )}
        </Container>
      </main>
    </>
  );
}
