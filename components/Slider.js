import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Icon, Flex, Box } from "@chakra-ui/react";

const Slider = () => (
	<Flex w='full' alignItems='center' justifyContent='center'>
		<Flex
			alignItems='center'
			justifyContent='center'
			padding='10px'
			border='1px'
			borderColor='#f5f5f5'
			borderRadius='full'
			marginRight='20px'
			cursor='pointer'
		>
			<Icon as={AiOutlineArrowLeft} boxSize={4} color='#dd6b20' bg='##dd6b20' />
		</Flex>

		<Box className='line gallery' />

		<Flex
			alignItems='center'
			justifyContent='center'
			padding='10px'
			border='1px'
			borderColor='#f5f5f5'
			borderRadius='full'
			cursor='pointer'
		>
			<Icon
				as={AiOutlineArrowRight}
				boxSize={4}
				color='#dd6b20'
				bg='##dd6b20'
			/>
		</Flex>
	</Flex>
);

export default Slider;
