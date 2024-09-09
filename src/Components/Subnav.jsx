import { Box, Menu, MenuButton, MenuItem, MenuList, Portal } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import LandscapeIcon from '@mui/icons-material/Landscape';
import WaterIcon from '@mui/icons-material/Water';
import DiamondIcon from '@mui/icons-material/Diamond';
import FilterHdrIcon from '@mui/icons-material/FilterHdr';
import GrainIcon from '@mui/icons-material/Grain';
import TerrainIcon from '@mui/icons-material/Terrain';
import SailingIcon from '@mui/icons-material/Sailing';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function SubNav(){
    return <Box h="100px" w="85%" m="auto" pt="100px" mb="80px" display="grid" gridTemplateColumns="repeat(6, 1fr)" alignItems="center" gap="15px">
        <Box h="50px" _hover={{bg:"black", color:"white"}} borderRadius='xl' p="10px 16px" fontWeight="500" fontSize='md' border="1.5px solid black" justifyContent="space-between" display="flex" alignItems="center">
            <Link fontSize='md'>Barrier Beach</Link>
            <LandscapeIcon />
        </Box>
        <Box h="50px" _hover={{bg:"black", color:"white"}} borderRadius='xl' p="10px 10px" fontWeight="500" fontSize='md' border="1.5px solid black" justifyContent="space-between" display="flex" alignItems="center">
            <Link fontSize='md'>Black Sand Beach</Link>
            <GrainIcon />
        </Box>
        <Box h="50px" _hover={{bg:"black", color:"white"}} borderRadius='xl' p="10px 16px" fontWeight="500" fontSize='md' border="1.5px solid black" justifyContent="space-between" display="flex" alignItems="center">
            <Link fontSize='md'>Cliff Beache</Link>
            <TerrainIcon />
        </Box>
        <Box h="50px" _hover={{bg:"black", color:"white"}} borderRadius='xl' p="10px 16px" fontWeight="500" fontSize='md' border="1.5px solid black" justifyContent="space-between" display="flex" alignItems="center">
            <Link>Coral Beach</Link>
            <WaterIcon />
        </Box>
        <Box h="50px" _hover={{bg:"black", color:"white"}} borderRadius='xl' p="10px 13px" fontWeight="500" fontSize='md' border="1.5px solid black" justifyContent="space-between" display="flex" alignItems="center">
            <Link fontSize='md'>Glass Beach</Link>
            <DiamondIcon />
        </Box>
        <Box h="50px" _hover={{bg:"black", color:"white"}} borderRadius='xl' p="10px 16px" fontWeight="500" fontSize='md' border="1.5px solid black" justifyContent="space-between" display="flex" alignItems="center">
            <Menu w="100%">
                <MenuButton w="100%" justifyContent="space-between" display="flex" gap="20px" alignItems="center">
                    <Box fontWeight="500" fontSize='md' w="100%" justifyContent="space-between" display="flex" gap="20px" alignItems="center">
                    <Link fontSize='md'>More</Link>
                    <MoreHorizIcon /></Box>
                </MenuButton>
                <Portal>
                    <MenuList color="black" w="80%" m="auto" ml="-15%" >
                        <MenuItem mt="10px" fontWeight="500" fontSize='17px'><Link>Pebble Beach</Link></MenuItem>
                        <MenuItem mt="10px" fontWeight="500" fontSize='17px'><Link>Pocket Beach</Link></MenuItem>
                        <MenuItem mt="10px" fontWeight="500" fontSize='17px'><Link>Rocky Beach</Link></MenuItem>
                        <MenuItem mt="10px" fontWeight="500" fontSize='17px'><Link>Sandy Beach</Link></MenuItem>
                        <MenuItem mt="10px" fontWeight="500" fontSize='17px'><Link>Shell Beach</Link></MenuItem>
                    </MenuList>
                </Portal>
            </Menu>
        </Box>
    </Box>
}

export default SubNav;