import { Flex, Spacer, Box, Text, Icon, IconButton } from "@chakra-ui/react";
import { AiOutlineClockCircle, AiOutlineLike } from "react-icons/ai";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { FiArrowDown } from "react-icons/fi";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

export const links = [
	{ 	id: 1, 
		link: "about", 
		name: "About" },
	{
		id: 2,
		link: "services",
		name: "Services",
	},
	{
		id: 3,
		link: "contact",
		name: "Contact",
	}	
];

export const IconText = () => (
	<Flex
		w='full'
		alignItems='flex-start'
		marginBottom={30}
		justifyContent='space-between'
		direction={{ base: "column", md: "row" }}
	>
		<TextItem
			first
			icon={AiOutlineClockCircle}
			text='The standard chunk of Lorem Ipsum used'
		/>
		<Spacer />
		<TextItem
			icon={TbDeviceLandlinePhone}
			text='It is a long established fact that'
		/>
		<Spacer />
		<TextItem
			icon={AiOutlineLike}
			text='The standard chunk of Lorem Ipsum used'
		/>
	</Flex>
);

const TextItem = ({ first, icon, text }) => (
	<Flex
		w={{ base: "100%", md: first ? "37%" : "30%" }}
		px={{ base: 0, md: 15 }}
		alignItems='center'
		marginBottom={{ base: 5, md: 0 }}
	>
		<Flex
			padding='5px'
			border='1px'
			borderColor='gray.600'
			alignItems='center'
			justifyContent='center'
			borderRadius='5px'
			marginRight='30px'
		>
			<Icon as={icon} color='#fff' boxSize={6} />
		</Flex>
		<Box>
			<Text color='#f5f5f5' opacity={0.7}>
				{text}
			</Text>
		</Box>
	</Flex>
);

export const BottomArrow = () => (
	<ScrollLink
		to='services'
		activeClass='active'
		spy={true}
		smooth={true}
		offset={-70}
		duration={500}
		className='links'
	>
		<Flex
			width='100%'
			alignItems='center'
			justifyContent='center'
			position='absolute'
			bottom='20px'
		>
			<IconButton
				aria-label='Scroll Down'
				icon={<FiArrowDown color='gray' />}
				bg='#262D47'
				width='50px'
				height='50px'
				borderRadius='50%'
			/>
		</Flex>
	</ScrollLink>
);
