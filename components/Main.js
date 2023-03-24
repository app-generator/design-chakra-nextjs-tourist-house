import { Box } from "@chakra-ui/react";
import React from "react";
import Services from "./Services";
import Gallery from "./Gallery";
import Image from "next/image";
import services from "../images/services.png";

const Main = () => {
	return (
		<Box
			w='full'
			bg='#13182C'
			padding={{ base: " 50px", md: "50px", lg: "100px 70px" }}
			position='relative'
		>
			<Box position='absolute' top='1px' left='0px'>
				<Image src={services} alt='Services' />
			</Box>
			<Services />
			<Gallery />
		</Box>
	);
};

export default Main;
