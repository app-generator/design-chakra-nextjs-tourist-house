import { Box, Flex, HStack, IconButton, Icon } from "@chakra-ui/react";
import React from "react";
import { GrClose, GrFacebookOption, GrInstagram } from "react-icons/gr";
import { links } from "../utils/utils";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "@chakra-ui/react";

const MobileNav = ({ setOpenNav }) => {
	return (
		<Flex
			position='fixed'
			top='0'
			bottom='0'
			height='100vh'
			width='100%'
			alignItems='flex-end'
			justifyContent='right'
			display={{ base: "flex", lg: "none" }}
		>
			<Box w='70%' h='full' bg='#13182C' padding={10}>
				<Flex alignItems='center' justifyContent='flex-end' marginBottom='30px'>
					<IconButton
						onClick={() => setOpenNav(false)}
						colorScheme='blue'
						aria-label='toggle navigation links'
						icon={<GrClose boxsize={12} />}
					/>
				</Flex>
				<Flex spacing={15} direction='column'>
					{links.map((li) => (
						<ScrollLink
							activeClass='active'
							to={li.link}
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							className='links mobile__links'
							onClick={() => setOpenNav(false)}
							key={li.id}
						>
							{li.name}
						</ScrollLink>
					))}
				</Flex>
				<HStack spacing='30px' mt='50px'>
					<Link>
						<Icon as={GrFacebookOption} color='#fff' boxSize={6} />
					</Link>
					<Link>
						<Icon as={GrInstagram} color='#fff' boxSize={6} />
					</Link>
				</HStack>
			</Box>
		</Flex>
	);
};

export default MobileNav;
