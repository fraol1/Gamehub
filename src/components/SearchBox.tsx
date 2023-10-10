import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearchQuery: (searchQuery: string) => void;
}

const SearchBox = ({ onSearchQuery }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(e) => {
        e.preventDefault();
        onSearchQuery(ref.current?.value!);
      }}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          bg={"gray.600"}
          placeholder='search games...'
          variant={"filled"}
        />
      </InputGroup>
    </form>
  );
};

export default SearchBox;
