import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Ag1_09.jpg";
import ColorSwitch from "./ColorSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} margin={5}>
      <Image src={logo} boxSize={"60px"} />
      <ColorSwitch />
    </HStack>
  );
};

export default Navbar;
