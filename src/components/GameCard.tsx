import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import PlatfromIconsList from "./PlatfromIconsList";
import getCroppedImage from "../utils/image_url";
import { Game } from "../hooks/useGames";
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImage(game.background_image)}></Image>
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <PlatfromIconsList
          platforms={game.parent_platforms.map((p) => p.platform)}
          critic={game.metacritic}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
