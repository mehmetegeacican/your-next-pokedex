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
  Text,
  Button,
  Tag,
} from "@chakra-ui/react";
import axios from "axios";
import Image from "next/image";

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
        {data.sprites && <img src={data.sprites.front_default} alt="sprite" />}
      </CardBody>
      <CardBody>
        <Stack divider={<Divider />} spacing={3}>
          <Box>
            <Text>{data.id}</Text>
            <Tag  variant='solid' colorScheme='purple'>Type tags</Tag>
          </Box>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button variant="outline">Click for more info</Button>
      </CardFooter>
    </Card>
  );
}
