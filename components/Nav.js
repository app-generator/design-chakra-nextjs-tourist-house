import React from "react";
import { Link as ScrollLink } from "react-scroll";
import {
	Box,
	Flex,
	HStack,
	Heading,
	Icon,
	Link,
	Spacer,
	IconButton,
} from "@chakra-ui/react";
import { GrFacebookOption, GrInstagram, GrMenu } from "react-icons/gr";
import { links } from "../utils/utils";

const Nav = ({ setOpenNav }) => {
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
					<ScrollLink
						activeClass='active'
						to={li.link}
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
						className='links'
						key={li.id}
					>
						{li.name}
					</ScrollLink>
				))}
			</HStack>
			
			<Spacer />

			<HStack spacing='30px' display={{ base: "none", lg: "inline-block" }}>
				<Link>
					<Icon as={GrFacebookOption} color='#fff' boxSize={6} />
				</Link>
				<Link>
					<Icon as={GrInstagram} color='#fff' boxSize={6} />
				</Link>
			</HStack>
			<HStack spacing='30px' display={{ base: "inline-block", lg: "none" }}>
				<IconButton
					onClick={() => setOpenNav(true)}
					bg='gray.200'
					colorScheme='blue'
					aria-label='toggle navigation links'
					icon={<GrMenu boxsize={14} />}
				/>
			</HStack>
		</Flex>
	);
};

export default Nav;
