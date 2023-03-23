import { Box } from "@chakra-ui/react";
import React from "react";
import Services from "./Services";
import Gallery from "./Gallery";
import Image from "next/image";
import services from "../images/services.png";

const CenterComponent = () => {
	return (
		<Box width='full' bg='#13182C' padding={"100px 70px"} position='relative'>
			<Box position='absolute' top='1px' left='0px'>
				<Image src={services} alt='Services' />
			</Box>
			<Services />
			<Gallery />
		</Box>
	);
};

export default CenterComponent;
