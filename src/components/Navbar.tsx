import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo.svg";
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
