import {
  FaWindows,
  FaXbox,
  FaPlaystation,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Badge, HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
  critic: number;
}
const PlatfromIconsList = ({ platforms, critic }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
  };

  const color = critic > 75 ? "green" : critic > 60 ? "yellow" : "red";
  return (
    <HStack marginY={2} justifyContent={"space-between"}>
      <HStack>
        {platforms.map((platform) => (
          <Icon
            key={platform.id}
            as={iconMap[platform.slug]}
            color={"gray.500"}></Icon>
        ))}
      </HStack>
      <Badge
        colorScheme={color}
        paddingX={2}
        fontSize={"px"}
        borderRadius={"6px"}>
        {critic}
      </Badge>
    </HStack>
  );
};

export default PlatfromIconsList;
