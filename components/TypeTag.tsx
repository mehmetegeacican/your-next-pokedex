import { Tag } from "@chakra-ui/react";
import React from "react";

interface TypeProp {
  type: any;
}

export default function TypeTag({ type }: TypeProp) {
  switch (type.type.name) {
    case "grass":
      return (
        <Tag
          key={type.slot}
          variant="solid"
          colorScheme="green"
          sx={{ ml: 0.3 }}
        >
          {type.type.name}
        </Tag>
      );
    case "water":
      return (
        <Tag
          key={type.slot}
          variant="solid"
          colorScheme="blue"
          sx={{ ml: 0.3 }}
        >
          {type.type.name}
        </Tag>
      );
    case "fire":
      return (
        <Tag
          key={type.slot}
          variant="solid"
          colorScheme="orange"
          sx={{ ml: 0.3 }}
        >
          {type.type.name}
        </Tag>
      );
    case "electric":
      return (
        <Tag
          key={type.slot}
          variant="solid"
          colorScheme="yellow"
          sx={{ ml: 0.3 }}
        >
          {type.type.name}
        </Tag>
      );
    case "psychic":
      return (
        <Tag
          key={type.slot}
          variant="solid"
          colorScheme="pink"
          sx={{ ml: 0.3 }}
        >
          {type.type.name}
        </Tag>
      );
    case "ice":
      return (
        <Tag
          key={type.slot}
          variant="solid"
          colorScheme="cyan"
          sx={{ ml: 0.3 }}
        >
          {type.type.name}
        </Tag>
      );
    case "dragon":
      return (
        <Tag
          key={type.slot}
          variant="solid"
          colorScheme="purple"
          sx={{ ml: 0.3 }}
        >
          {type.type.name}
        </Tag>
      );
    case "dark":
      return (
        <Tag
          key={type.slot}
          variant="solid"
          colorScheme="black"
          sx={{ ml: 0.3 }}
        >
          {type.type.name}
        </Tag>
      );
    case "fairy":
      return (
        <Tag
          key={type.slot}
          variant="solid"
          colorScheme="pink"
          sx={{ ml: 0.3 }}
        >
          {type.type.name}
        </Tag>
      );
    case "fighting":
      return (
        <Tag key={type.slot} variant="solid" colorScheme="red" sx={{ ml: 0.3 }}>
          {type.type.name}
        </Tag>
      );
    case "flying":
      return (
        <Tag
          key={type.slot}
          variant="solid"
          colorScheme="cyan"
          sx={{ ml: 0.3 }}
        >
          {type.type.name}
        </Tag>
      );
    case "poison":
      return (
        <Tag
          key={type.slot}
          variant="solid"
          colorScheme="purple"
          sx={{ ml: 0.3 }}
        >
          {type.type.name}
        </Tag>
      );
    case "ground":
      return (
        <Tag
          key={type.slot}
          variant="solid"
          colorScheme="yellow"
          sx={{ ml: 0.3 }}
        >
          {type.type.name}
        </Tag>
      );
    case "rock":
      return (
        <Tag
          key={type.slot}
          variant="solid"
          colorScheme="yellow.400"
          sx={{ ml: 0.3 }}
        >
          {type.type.name}
        </Tag>
      );
    case "bug":
      return (
        <Tag
          key={type.slot}
          variant="solid"
          colorScheme="green.200"
          sx={{ ml: 0.3 }}
        >
          {type.type.name}
        </Tag>
      );
    case "ghost":
      return (
        <Tag
          key={type.slot}
          variant="solid"
          colorScheme="purple.400"
          sx={{ ml: 0.3 }}
        >
          {type.type.name}
        </Tag>
      );
    default:
      return (
        <Tag
          key={type.slot}
          variant="solid"
          colorScheme="gray"
          sx={{ ml: 0.3 }}
        >
          {type.type.name}
        </Tag>
      );
  }
}
