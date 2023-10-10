import { HStack, Image, Link } from "@chakra-ui/react";
import logo from "../assets/Logo.svg";
import ColorSwitch from "./ColorSwitch";
import SearchBox from "./SearchBox";

interface Props {
  onSearchQuery: (searchQuery: string) => void;
}
const Navbar = ({ onSearchQuery }: Props) => {
  return (
    <HStack margin={5}>
      <Link href='/'>
        <Image src={logo} boxSize={"60px"} />
      </Link>
      <SearchBox onSearchQuery={onSearchQuery} />
      <ColorSwitch />
    </HStack>
  );
};

export default Navbar;
