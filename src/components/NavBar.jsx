import React from "react";
import CartWidget from "./CartWidget";
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from "@chakra-ui/react"; 

const NavBar = () => {
    return (
    <div>
        <Flex>
    <Box p="4" >
        <h3> Brogan Zapatos </h3>
    </Box>
    <Spacer /> 

<Box p="4">
            <Menu>
        <MenuButton>Productos</MenuButton>
        <MenuList>
            <MenuItem>Zapatillas</MenuItem>
            <MenuItem>Sandalias</MenuItem>
            <MenuItem>Borcegos</MenuItem>
        </MenuList>
        </Menu>
        </Box>

    <Spacer /> 
    <Box p="4" >
        <CartWidget />
    </Box>
</Flex>



    </div>
    );
};

export default NavBar;