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
import { links } from "../utils/utils";

const Nav = () => {
	return (
		<Flex
			w='full'
			alignItems='center'
			minHeight={"10vh"}
			padding={{ base: "30px", md: "30px 70px" }}
			justifyContent='space-between'
		>
			<Box>
				<Heading as='h2' size='md' color='#fff'>
					HOUSE
				</Heading>
			</Box>

			<Spacer />

			<HStack spacing='30px' display={{ base: "none", lg: "inline-block" }}>
				{links.map((li) => (
					<Link
						href={li.link}
						color='#fff'
						opacity={0.7}
						fontWeight='semibold'
						key={li.id}
					>
						{li.name}
					</Link>
				))}
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
