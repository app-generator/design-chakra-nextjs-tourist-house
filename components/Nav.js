import React from "react";
import {
	Box,
	Flex,
	HStack,
	Heading,
	Icon,
	Link,
	Spacer,
} from "@chakra-ui/react";
import { GrFacebookOption, GrInstagram } from "react-icons/gr";

const Nav = () => {
	return (
		<Flex
			alignItems='center'
			minHeight={"10vh"}
			padding={"30px 70px"}
			justifyContent='space-between'
		>
			<Box>
				<Heading as='h2' size='md' color='#fff'>
					HOUSE
				</Heading>
			</Box>

			<Spacer />

			<HStack spacing='30px' display={{ base: "none", lg: "inline-block" }}>
				<Link to='/' color='#fff' opacity={0.7} fontWeight='semibold'>
					Home
				</Link>
				<Link href='#about' color='#fff' opacity={0.7} fontWeight='semibold'>
					About
				</Link>
				<Link href='#services' color='#fff' opacity={0.7} fontWeight='semibold'>
					Services
				</Link>
				<Link href='#contact' color='#fff' opacity={0.7} fontWeight='semibold'>
					Contact
				</Link>
			</HStack>
			<Spacer />

			<HStack spacing='30px'>
				<Icon as={GrFacebookOption} color='#fff' boxSize={6} />
				<Icon as={GrInstagram} color='#fff' boxSize={6} />
			</HStack>
		</Flex>
	);
};

export default Nav;
