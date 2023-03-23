import React from "react";
import { Box, Flex, Heading, Icon, Spacer, Text } from "@chakra-ui/react";
import Image from "next/image";
import bedroomR from "../images/bedroomR.png";
import bedroomL from "../images/bedroomL.png";
import bedroomC from "../images/bedroomC.png";
import home1 from "../images/home1.jpg";
import home2 from "../images/home2.jpg";
import home3 from "../images/home3.jpg";
import { FaSearchPlus } from "react-icons/fa";

const Bedroom = () => {
	return (
		<Flex
			w='full'
			position='relative'
			width='full'
			alignItems='center'
			marginBottom='50px'
			direction={{ base: "column", md: "column", lg: "row" }}
		>
			<Box position='absolute' top='-30px' left='-40px' zIndex='100'>
				<Image src={bedroomL} alt='Bedroom' />
			</Box>
			<Flex
				position='absolute'
				top='60px'
				left='400'
				zIndex='100'
				alignItems='center'
				justifyContent='center'
			>
				<Image src={bedroomC} alt='Bedroom' />
			</Flex>
			<Box position='absolute' bottom='-30px' right='-40px' zIndex='100'>
				<Image src={bedroomR} alt='Bedroom' />
			</Box>
			<Box position='relative' marginBottom={{ base: 15, md: 15, lg: 0 }}>
				<Image src={home1} alt='Home 1' />
				<Box position='absolute' top='0' zIndex='100' padding='25px 20px'>
					<Heading as='h3' color='#ED9716' fontWeight='bold'>
						01
					</Heading>
					<Text color='#fff' fontWeight='bold'>
						Bedroom
					</Text>
				</Box>
				<Box position='absolute' bottom='50px' zIndex='100'>
					<Text className='rotate' color='#f5f5f5'>
						Text here
					</Text>
				</Box>
			</Box>

			<Spacer />

			<Box
				position='relative'
				marginTop={{ base: 0, md: 0, lg: 100 }}
				marginBottom={{ base: 15, md: 15, lg: 0 }}
			>
				<Image src={home2} alt='Home 2' />
				<Box position='absolute' top='0' zIndex='100' padding='25px 20px'>
					<Heading as='h3' color='#ED9716' fontWeight='bold'>
						02
					</Heading>
					<Text color='#fff' fontWeight='bold'>
						Bedroom
					</Text>
				</Box>
				<Box position='absolute' bottom='50px' zIndex='100'>
					<Text className='rotate' color='#f5f5f5'>
						Text here
					</Text>
				</Box>
				<Flex
					className='deep'
					zIndex='100'
					borderRadius='full'
					position='absolute'
					bottom='180px'
					left='120px'
					padding='10px'
					alignItems='center'
					justifyContent='center'
					height={102}
					width={102}
				>
					<Flex
						borderRadius='full'
						padding='10px'
						alignItems='center'
						justifyContent='center'
						className='deeper'
					>
						<Flex
							bg='#13182C'
							borderRadius='full'
							padding='10px'
							alignItems='center'
							justifyContent='center'
							opacity={1}
						>
							<Icon
								as={FaSearchPlus}
								boxSize={6}
								color='white'
								cursor='pointer'
							/>
						</Flex>
					</Flex>
				</Flex>
			</Box>
			<Spacer />
			<Box position='relative'>
				<Image src={home3} alt='Home 3' />
				<Box position='absolute' top='0' zIndex='100' padding='25px 20px'>
					<Heading as='h3' color='#ED9716' fontWeight='bold'>
						03
					</Heading>
					<Text color='#fff' fontWeight='bold'>
						Bedroom
					</Text>
				</Box>
				<Box position='absolute' bottom='50px' zIndex='100'>
					<Text className='rotate' color='#f5f5f5'>
						Text here
					</Text>
				</Box>
			</Box>
		</Flex>
	);
};

export default Bedroom;
