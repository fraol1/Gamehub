import {
  Button,
  HStack,
  Heading,
  Image,
  Spinner,
  VStack,
} from "@chakra-ui/react";

import useGenre, { Genre } from "../hooks/useGenre";

interface Props {
  onSelected: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelected, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenre();

  if (isLoading)
    return (
      <VStack justifyContent={"center"} alignItems={"center"}>
        <Spinner />
      </VStack>
    );
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
            <Button
              onClick={() => onSelected(genre)}
              fontSize='lg'
              fontWeight={
                genre.name === selectedGenre?.name ? "bold" : "normal"
              }
              cursor='pointer'
              variant='link'>
              {genre.name}
            </Button>
          </HStack>
        ))}
      </VStack>
    </>
  );
};

export default GenreList;
