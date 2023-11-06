import "./Header.css";
import { ExternalLinkIcon, HamburgerIcon, AddIcon, RepeatIcon, EditIcon } from '@chakra-ui/icons'

import {
  Flex,
  Spacer,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
export const Header = () => {
  return (
    <Flex p="20">
      <Box  bg="red.400">
        Dio Bank
      </Box>
      <Spacer />
      <Box  bg="green.400">
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList p="20" borderRadius='15px' backgroundColor="#000000" color="#ffffff">
            <MenuItem icon={<AddIcon />} command="⌘T">
              New Tab
            </MenuItem>
            <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
              New Window
            </MenuItem>
            <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
              Open Closed Tab
            </MenuItem>
            <MenuItem icon={<EditIcon />} command="⌘O">
              Open File...
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};
