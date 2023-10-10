import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme='green'
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}></Switch>
      <Text whiteSpace={"nowrap"}>Drak Mode</Text>
    </HStack>
  );
};

export default ColorSwitch;
