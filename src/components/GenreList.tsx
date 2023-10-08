import { HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";

import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { data, error } = useGenre();
  return (
    <>
      <VStack alignItems={"self-start"} padding={5}>
        <Heading textAlign={"start"} mb={5}>
          Genre
        </Heading>
        {error && <p>{error}</p>}
        {data.map((genre) => (
          <HStack key={genre.id} spacing={5} justifyContent={"space-between"}>
            <Image
              boxSize={"35px"}
              borderRadius={10}
              src={genre.image_background}
            />
            <Text>{genre.name}</Text>
          </HStack>
        ))}
      </VStack>
    </>
  );
};

export default GenreList;
