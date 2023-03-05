import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Divider,
  Box,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import Image from "next/image";
import TypeTag from "./TypeTag";
import Link from "next/link";

const fetchPokeData = async (url: string) => {
  const { data } = await axios.get(url);
  return data;
};

interface PokeCardProps {
  url: string;
}
export default function PokeCard({ url }: PokeCardProps) {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    async function fetch() {
      const data = await fetchPokeData(url);
      setData(data);
    }
    fetch();
  }, [url]);
  return (
    <Card overflow="hidden" height={360}>
      <CardHeader>
        <Heading size="md">{data.name}</Heading>
      </CardHeader>
      <CardBody>
        {data.sprites && <Image loader={() => data.sprites.front_default} src={data.sprites.front_default} alt={"sprite"} width={90} height={30}/> }
      </CardBody>
      <CardBody>
        <Stack divider={<Divider />} spacing={3}>
          <Box>
            {data.types &&
              data.types.map((item: any) => {
                return <TypeTag key={item.slot} type={item} />;
              })}
          </Box>
        </Stack>
      </CardBody>
      <CardFooter>
        <Link href={"/pokemons/" + data.name}>
          {" "}
          <Button variant="outline">Click for more info</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
