import { Flex, Heading, Spacer, Box, Text, Icon } from "@chakra-ui/react";
import React from "react";
import { AiOutlineClockCircle, AiOutlineLike } from "react-icons/ai";
import { TbDeviceLandlinePhone } from "react-icons/tb";

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

				<Box
					w={{ base: "100%", lg: "30%" }}
					px={{ base: 0, lg: 15 }}
					mt={{ base: 5, lg: 0 }}
				>
					<Text color='#F5F5F5'>
						There are many variations of passages of Lorem Ipsum available, but
						the majority have suffered alteration in some form, by injected
						humour.
					</Text>
				</Box>

				<Spacer />
				<Box
					w={{ base: "100%", lg: "30%" }}
					px={{ base: 0, lg: 15 }}
					mt={{ base: 5, lg: 0 }}
				>
					<Text color='#f5f5f5'>
						Contrary to popular belief, Lorem Ipsum is not simply random text.
						It has roots in a piece of classical Latin literature from.
					</Text>
				</Box>
			</Flex>

			<Flex
				w='full'
				alignItems='flex-start'
				marginBottom={30}
				justifyContent='space-between'
				wrap='wrap'
				direction={{ base: "column", md: "row" }}
			>
				<Flex
					w={{ base: "100%", md: "35%" }}
					alignItems='center'
					justifyContent={{ base: "none", md: "space-between" }}
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
						<Icon as={AiOutlineLike} color='#fff' boxSize={6} />
					</Flex>
					<Box>
						<Text color='#f5f5f5'>The standard chunk of Lorem Ipsum used </Text>
					</Box>
				</Flex>
				<Spacer />

				<Flex
					w={{ base: "100%", md: "30%" }}
					px={{ base: 0, md: 15 }}
					alignItems='center'
					justifyContent={{ base: "none", md: "space-between" }}
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
						<Icon as={TbDeviceLandlinePhone} color='#fff' boxSize={6} />
					</Flex>
					<Box>
						<Text color='#f5f5f5'>The standard chunk of Lorem Ipsum used</Text>
					</Box>
				</Flex>

				<Spacer />
				<Flex
					w={{ base: "100%", md: "30%" }}
					px={{ base: 0, md: 15 }}
					alignItems='center'
					justifyContent={{ base: "none", md: "space-between" }}
				>
					<Flex
						padding='5px'
						border='1px'
						borderColor='gray.600'
						alignItems='center'
						justifyContent='center'
						borderRadius='5px'
						marginRight=' 30px'
					>
						<Icon as={AiOutlineLike} color='#fff' boxSize={6} />
					</Flex>
					<Box>
						<Text color='#f5f5f5'>The standard chunk of Lorem Ipsum used</Text>
					</Box>
				</Flex>
			</Flex>
			<Flex
				w='full'
				alignItems='flex-start'
				marginBottom={30}
				justifyContent='space-between'
				wrap='wrap'
				direction={{ base: "column", md: "row" }}
			>
				<Flex
					w={{ base: "100%", md: "35%" }}
					alignItems='center'
					justifyContent={{ base: "none", md: "space-between" }}
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
						<Icon as={AiOutlineLike} color='#fff' boxSize={6} />
					</Flex>
					<Box>
						<Text color='#f5f5f5'>The standard chunk of Lorem Ipsum used </Text>
					</Box>
				</Flex>
				<Spacer />

				<Flex
					w={{ base: "100%", md: "30%" }}
					px={{ base: 0, md: 15 }}
					alignItems='center'
					justifyContent={{ base: "none", md: "space-between" }}
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
						<Icon as={AiOutlineLike} color='#fff' boxSize={6} />
					</Flex>
					<Box>
						<Text color='#f5f5f5'>The standard chunk of Lorem Ipsum used</Text>
					</Box>
				</Flex>

				<Spacer />
				<Flex
					w={{ base: "100%", md: "30%" }}
					px={{ base: 0, md: 15 }}
					alignItems='center'
					justifyContent={{ base: "none", md: "space-between" }}
				>
					<Flex
						padding='5px'
						border='1px'
						borderColor='gray.600'
						alignItems='center'
						justifyContent='center'
						borderRadius='5px'
						marginRight=' 30px'
					>
						<Icon as={AiOutlineLike} color='#fff' boxSize={6} />
					</Flex>
					<Box>
						<Text color='#f5f5f5'>The standard chunk of Lorem Ipsum used</Text>
					</Box>
				</Flex>
			</Flex>
		</Box>
	);
};

export default Services;
