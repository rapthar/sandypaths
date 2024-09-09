import { SearchIcon } from "@chakra-ui/icons";
import { Box, Input, Heading, Text } from "@chakra-ui/react";

function Homeone() {
	return (
		<Box 
			w="100%" 
			p="150px 0" 
			background='url(https://static.tacdn.com/img2/brand/home/homemar2022_dt_trans.webp) center/cover no-repeat' 
			backgroundColor="red.100"
		>
			<Box 
				w="85%" 
				m="auto" 
				textAlign="center"
			>
				<Heading 
					as="h1" 
					size="2xl" 
					mb={6} 
					color="#193F50"
				>
					Discover Your Perfect Beach
				</Heading>
				<Text 
					fontSize="xl" 
					mb={8} 
					color="#193F50"
				>
					Explore the world's most beautiful coastlines with SandyPaths
				</Text>
				<Box 
					display="flex" 
					rounded="40px" 
					bg="white" 
					p="8px 20px" 
					w="100%" 
					maxW="600px" 
					m="auto" 
					alignItems="center" 
					boxShadow='3xl'
				>
					<SearchIcon w={5} h={5} color="#193F50" />
					<Input border="none" placeholder='Where to?' size='lg' ml={2} />
				</Box>
			</Box>
		</Box>
	);
}

export default Homeone;