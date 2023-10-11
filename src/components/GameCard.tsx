import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import PlatfromIconsList from "./PlatfromIconsList";
import getCroppedImage from "../utils/image_url";
import { Game } from "../hooks/useGames";
import meh from "../assets/emojis/meh.webp";
import good from "../assets/emojis/thumbs-up.webp";
import perfect from "../assets/emojis/bulls-eye.webp";
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImage(game.background_image)}></Image>
      <CardBody>
        <PlatfromIconsList
          platforms={game.parent_platforms.map((p) => p.platform)}
          critic={game.metacritic}
        />
        <Heading fontSize={"2xl"} marginTop={2}>
          {game.name}
        </Heading>
        <Image
          width={8}
          marginTop={2}
          src={
            game.metacritic > 90 ? perfect : game.metacritic > 80 ? good : meh
          }></Image>
      </CardBody>
    </Card>
  );
};

export default GameCard;
