import React from "react";
import Nav from "./Nav";
import { Box } from "@chakra-ui/react";
import Hero from "./Hero";

const Header = () => {
	return (
		<Box className='header'>
			<Box className='header__content'>
				<Nav />
				<Hero />
			</Box>
		</Box>
	);
};

export default Header;
