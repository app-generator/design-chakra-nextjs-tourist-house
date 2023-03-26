import React, { useState } from "react";
import Nav from "./Nav";
import { Box } from "@chakra-ui/react";
import Hero from "./Hero";
import { BottomArrow } from "../utils/utils";
import MobileNav from "./MobileNav";

const Header = () => {
	const [openNav, setOpenNav] = useState(false);
	return (
		<Box className='header' id='home'>
			<Box className='header__content'>
				<Nav setOpenNav={setOpenNav} />
				<Hero />
				<BottomArrow />
			</Box>
			{openNav && <MobileNav setOpenNav={setOpenNav} />}
		</Box>
	);
};

export default Header;
