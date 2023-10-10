import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (order: string) => void;
  selectedOrder: string;
}

const SortSelector = ({ onSelectSortOrder, selectedOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentOrder = sortOrders.find(
    (sortOrder) => sortOrder.value === selectedOrder
  );

  return (
    <div>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Orderd By: {currentOrder?.label || "Relevance"}
        </MenuButton>
        <MenuList>
          {sortOrders.map((sortOrder) => (
            <MenuItem
              key={sortOrder.value}
              value={sortOrder.value}
              onClick={() => onSelectSortOrder(sortOrder.value)}>
              {sortOrder.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};

export default SortSelector;
