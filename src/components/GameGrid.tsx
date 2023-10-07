import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useGames from "../hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";

interface Game {
  id: number;
  name: string; // Change the type to string
}

interface Response {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <div>
      {error && <p>Error: {error}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={5}
        spacing={10}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
