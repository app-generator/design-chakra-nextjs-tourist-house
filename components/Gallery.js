import { Box, Heading, Flex, Text, Spacer } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import gallery from "../images/gallery.png";
import ellipse from "../images/ellipse.png";
import Bedroom from "./Bedroom";

const Gallery = () => {
	return (
		<Box w='full' pt='100px' position='relative'>
			<Box position='absolute' top='0px' left='-70px' id='about'>
				<Image src={gallery} alt='Gallery' />
			</Box>
			<Box
				position='absolute'
				top='-200px'
				left='100px'
				alignItems='center'
				justifyContent='center'
			>
				<Image src={ellipse} alt='Gallery' />
			</Box>

			<Heading as='h2' color='#FFFFFF' pb='15px'>
				Gallery
			</Heading>
			<Flex
				w='full'
				alignItems='flex-start'
				marginBottom={{ base: "0px", md: "70px" }}
				direction={{ base: "column", md: "column", lg: "row" }}
			>
				<Box
					className='line full'
					width={{ base: "100%", md: "100%", lg: "33.33%" }}
				/>
				<Spacer />

				<Box
					w={{ base: "100%", lg: "66.66%" }}
					px={{ lg: "15px" }}
					mt={{ base: 15, lg: 0 }}
				>
					<Text color='#F5F5F5'>
						Latin words, combined with a handful of model sentence structures,
						to generate Lorem Ipsum which looks reasonable. The generated Lorem
						Ipsum is therefore.
					</Text>
				</Box>
			</Flex>

			<Bedroom />
		</Box>
	);
};

export default Gallery;
