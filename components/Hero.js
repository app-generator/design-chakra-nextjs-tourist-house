import { Box, Button, Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { FiArrowDown } from "react-icons/fi";
import Link from "next/link";

const Hero = () => {
	return (
		<Flex
			padding={{ base: "30px", md: "30px 70px" }}
			minHeight='80vh'
			width='full'
			direction='column'
			justifyContent='center'
			position='relative'
		>
			<Heading
				as='h1'
				color='#fff'
				size={{ base: "2xl", lg: "4xl" }}
				fontWeight='bold'
			>
				Tourist House, Bed &
			</Heading>
			<Flex alignItems='flex-end' marginBottom={{ base: 5, lg: 30 }}>
				<Heading
					as='h1'
					color='#fff'
					size={{ base: "2xl", lg: "4xl" }}
					fontWeight='bold'
					marginRight={{ base: 0, lg: 20 }}
				>
					Breakfast Unit
				</Heading>
				<Button
					colorScheme='black'
					bg='transparent'
					color='gray.200'
					variant='outline'
					width='180px'
					borderRadius='30px'
					borderColor='orange.500'
					display={{ base: "none", lg: "inline-block" }}
				>
					Apply Now
				</Button>
			</Flex>
			<Flex width={{ base: "100%", lg: "70%" }}>
				<Box className='line' display={{ base: "none", lg: "inline-block" }} />
				<Box>
					<Text color='#F5F5F5'>
						It is a long established fact that a reader will be distracted by
						the readable content of a page when looking at its layout.
					</Text>
				</Box>
			</Flex>
			<Button
				colorScheme='black'
				bg='transparent'
				color='gray.200'
				variant='outline'
				width='180px'
				borderRadius='30px'
				borderColor='orange.500'
				mt={5}
				display={{ base: "block", lg: "none" }}
			>
				Apply Now
			</Button>
			<Link href='#services'>
				<Box bg='transparent' position='absolute' bottom='1px' right='50%'>
					<IconButton
						aria-label='Scroll Down'
						icon={<FiArrowDown color='gray' />}
						bg='#262D47'
						width='50px'
						height='50px'
						borderRadius='50%'
					/>
				</Box>
			</Link>
		</Flex>
	);
};

export default Hero;
