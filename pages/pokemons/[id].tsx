import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import TypeTag from "../../components/TypeTag";
import Image from 'next/image'
/**
 * Getting the Static Path
 */
/*
export const getStaticSitePaths = async () => {
  const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon", {
    params: { limit: 300, offset: 0 },
  });

  const paths = data.results.map((poke: any) => {
    return {
      params: { id: poke.name },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
};
*/

interface PokeInterface {
  id: number;
  sprites: any;
  height: number;
  weight: number;
  types: any;
  stats: any;
}


export const getServerSideProps = async (context: any) => {
  const name = context.params.id;
  const res = await axios.get(
    "https://pokeapi.co/api/v2/pokemon/" + context.params.id
  );

  let sprite:any = {
    front_default: res.data.sprites.front_default,
    back_default: res.data.sprites.back_default,
    front_shiny: res.data.sprites.front_shiny,
    back_shiny: res.data.sprites.back_shiny
  }

  let pokemonData: PokeInterface = {
    id: res.data.id,
    sprites: sprite,
    height: res.data.height,
    weight: res.data.weight,
    types: res.data.types,
    stats: res.data.stats,
  };

  return {
    props: { pokemon: pokemonData },
  };
};

export default function Pokemon({ pokemon }: any) {
  return (
    <Box as={Container} maxW="7xl" mt={14} p={4}>
      <Stack spacing={2} divider={<StackDivider />}>
        <Card>
          <CardHeader>
            <Heading size="md">{pokemon.name}</Heading>
          </CardHeader>
          <CardBody>
            <Stack direction="row" spacing={2}>
              {pokemon.sprites && (
                <Image loader={() => pokemon.sprites.front_default}  src={pokemon.sprites.front_default} alt={"sprite"} width={90} height={30}/> 
              )}
              {pokemon.sprites && (
                <Image loader={() => pokemon.sprites.back_default}  src={pokemon.sprites.front_default} alt={"sprite"} width={90} height={30}/> 
              )}
              {pokemon.sprites && (
                <Image loader={() => pokemon.sprites.front_shiny} src={pokemon.sprites.front_shiny} alt={"sprite"} width={90} height={30}/> 
              )}
              {pokemon.sprites && (
                <Image loader={() => pokemon.sprites.back_shiny} src={pokemon.sprites.back_shiny} alt={"sprite"} width={90} height={30}/> 
              )}
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Stack direction="row" spacing={2} divider={<StackDivider />}>
              <Text>id: {pokemon.id}</Text>
              <Text>height : {pokemon.height} m</Text>
              <Text>weight : {pokemon.weight} kg</Text>
              <Box>
                {pokemon.types &&
                  pokemon.types.map((item: any) => {
                    return <TypeTag key={item.slot} type={item} />;
                  })}
              </Box>
              {pokemon.stats.map((item: any) => {
                return (
                  <Text key={item.stat.name}>
                    {item.stat.name} : {item.base_stat}{" "}
                  </Text>
                );
              })}
            </Stack>
          </CardBody>
        </Card>
      </Stack>
    </Box>
  );
}
