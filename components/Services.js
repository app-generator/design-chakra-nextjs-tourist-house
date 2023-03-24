import { Flex, Heading, Spacer, Box, Text } from "@chakra-ui/react";
import React from "react";
import { IconText } from "../utils/utils";

const ServicesText = ({ content }) => (
	<Box
		w={{ base: "100%", lg: "30%" }}
		px={{ base: 0, lg: 15 }}
		mt={{ base: 5, lg: 0 }}
	>
		<Text color='#F5F5F5'>{content}</Text>
	</Box>
);

const Services = () => {
	return (
		<Box w='full'>
			<Heading as='h2' color='#FFFFFF' pb='15px' id='services'>
				Services
			</Heading>
			<Flex
				w='full'
				alignItems='flex-start'
				marginBottom={30}
				direction={{ base: "column", lg: "row" }}
			>
				<Box className='line full' width={{ base: "100%", lg: "35%" }} />
				<Spacer />

				<ServicesText
					content='There are many variations of passages of Lorem Ipsum available, but
						the majority have suffered alteration in some form, by injected
						humour.'
				/>

				<Spacer />
				<ServicesText
					content='Contrary to popular belief, Lorem Ipsum is not simply random text.
						It has roots in a piece of classical Latin literature from.'
				/>
			</Flex>

			<IconText />
			<IconText />
		</Box>
	);
};

export default Services;
