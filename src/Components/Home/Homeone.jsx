import { SearchIcon } from "@chakra-ui/icons";
import { Box, Input, Heading, Text } from "@chakra-ui/react";

function Homeone() {
	return (
		<Box 
			w="85%" 
			m="auto" 
			p="150px 100px" 
			position="relative"
			backgroundImage='url(https://static.tacdn.com/img2/brand/home/homemar2022_dt_trans.webp)'
			backgroundSize="cover"
			backgroundPosition="center"
		>
			{/* Black overlay */}
			<Box 
				position="absolute"
				top="0"
				left="0"
				right="0"
				bottom="0"
				bg="rgba(0, 0, 0, 0.5)"
			/>

			{/* Content */}
			<Box position="relative" zIndex="1">
				<Heading
					as="h1"
					size="2xl"
					color="white"
					mb={4}
					textAlign="center"
				>
					Discover Your Perfect Beach
				</Heading>
				<Text
					fontSize="xl"
					color="white"
					mb={8}
					textAlign="center"
				>
					Explore the world's most beautiful coastlines with SandyPaths
				</Text>
				<Box 
					display="flex" 
					rounded="40px" 
					bg="white" 
					p="8px 20px" 
					w="85%" 
					m="auto" 
					alignItems="center" 
					boxShadow='3xl'
				>
					<SearchIcon w={5} h={5} color="#193F50" />
					<Input border="none" placeholder='Where to?' size='lg' />
				</Box>
			</Box>
		</Box>
	)
}

export default Homeone;