import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

const Bedroom = () => {
	const slideImages = [
		{
			url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
			caption: "Slide 1",
		},
		{
			url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
			caption: "Slide 2",
		},
		{
			url: "https://images.unsplash.com/flagged/photo-1573168710865-2e4c680d921a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
			caption: "Slide 3",
		},
	];
	return (
		<Box w='full' margin='70px 0px'>
			<Slide>
				{slideImages.map((image, index) => (
					<Box key={index}>
						<Flex
							backgroundSize='cover'
							justifyContent='center'
							alignItems='center'
							maxHeight='400px'
							direction='column'
						>
							<Image src={image.url} alt={image.caption} mb='10px' w='full' />
							<Text color='#f5f5f5'>{image.caption}</Text>
						</Flex>
					</Box>
				))}
			</Slide>
		</Box>
	);
};

export default Bedroom;
