import { Box, Flex, Heading, Text, Button, IconButton } from "@chakra-ui/react";
import React from "react";
import Nav from "./Nav";
import { BiArrowToTop } from "react-icons/bi";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
	return (
		<Box w='full'>
			<Box
				className='footerImg'
				borderTop='1px'
				borderBottom='1px'
				borderColor='gray.600'
				id='contact'
			>
				<Flex
					className='footer__container'
					alignItems='center'
					textAlign='center'
					justifyContent='center'
					flexDirection='column'
					padding={70}
				>
					<Heading as='h2' size='lg' color='#f5f5f5' marginBottom={5}>
						Contrary to popular belief,
					</Heading>

					<Heading as='h2' size='lg' color='#f5f5f5' marginBottom={5}>
						Lorem Ipsum
					</Heading>
					<Box className='line' width={150} marginBottom={5} />
					<Text color='#f5f5f5' marginBottom={5}>
						Fact that a reader will be distracted by the readable
					</Text>
					<Button
						colorScheme='yellow'
						bg='#ED9716'
						color='#fff'
						size='lg'
						borderRadius='full'
						width={200}
					>
						Button
					</Button>
				</Flex>
			</Box>

			<Box className='footerBottom' w='full'>
				<Flex
					className='bottom__container'
					padding={"30px 0"}
					w='full'
					direction='column'
					h='full'
				>
					<Box marginBottom='20px' display={{ base: "none", lg: "block" }}>
						<Nav />
					</Box>

					<Flex
						marginBottom='20px'
						display={{ base: "flex", lg: "none" }}
						padding={{ base: "10px 30px", md: "30px 70px" }}
						alignItems='center'
						justifyContent='space-between'
					>
						<Heading as='h2' size='md' color='#fff'>
							HOUSE
						</Heading>
						<ScrollLink
							to='home'
							activeClass='active'
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							<IconButton
								as={BiArrowToTop}
								bg='transparent'
								color='#fff'
								_hover={{ bg: "transparent" }}
								colorScheme='blue'
								aria-label='scroll to top'
								cursor='pointer'
							/>
						</ScrollLink>
					</Flex>

					<Flex
						alignItems='center'
						justifyContent='center'
						textAlign='center'
						w='full'
					>
						<Text color='#C0C4D3' fontSize='sm'>
							Copyright © Home. {new Date().getFullYear()}. All rights reserved.
						</Text>
					</Flex>
				</Flex>
			</Box>
		</Box>
	);
};

export default Footer;
