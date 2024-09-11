import { Box, Menu, MenuButton, MenuItem, MenuList, Portal } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import WavesIcon from '@mui/icons-material/Waves';
import WaterIcon from '@mui/icons-material/Water';
import LakeIcon from '@mui/icons-material/Water';
import RiverIcon from '@mui/icons-material/Waves';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import SailingIcon from '@mui/icons-material/Sailing';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function SubNav(){
    return <Box h="100px" w="85%" m="auto" pt="100px" mb="80px" display="grid" gridTemplateColumns="repeat(6, 1fr)" alignItems="center" gap="15px">
        <Box h="50px" _hover={{bg:"#193F50", color:"white"}} borderRadius='xl' p="10px 16px" fontWeight="500" fontSize='md' border="1.5px solid #193F50" justifyContent="space-between" display="flex" alignItems="center">
            <Link fontSize='md'>Oceans</Link>
            <WavesIcon />
        </Box>
        <Box h="50px" _hover={{bg:"#193F50", color:"white"}} borderRadius='xl' p="10px 16px" fontWeight="500" fontSize='md' border="1.5px solid #193F50" justifyContent="space-between" display="flex" alignItems="center">
            <Link fontSize='md'>Seas</Link>
            <WaterIcon />
        </Box>
        <Box h="50px" _hover={{bg:"#193F50", color:"white"}} borderRadius='xl' p="10px 16px" fontWeight="500" fontSize='md' border="1.5px solid #193F50" justifyContent="space-between" display="flex" alignItems="center">
            <Link fontSize='md'>Lakes</Link>
            <LakeIcon />
        </Box>
        <Box h="50px" _hover={{bg:"#193F50", color:"white"}} borderRadius='xl' p="10px 16px" fontWeight="500" fontSize='md' border="1.5px solid #193F50" justifyContent="space-between" display="flex" alignItems="center">
            <Link>Rivers</Link>
            <RiverIcon />
        </Box>
        <Box h="50px" _hover={{bg:"#193F50", color:"white"}} borderRadius='xl' p="10px 16px" fontWeight="500" fontSize='md' border="1.5px solid #193F50" justifyContent="space-between" display="flex" alignItems="center">
            <Link fontSize='md'>Beaches</Link>
            <BeachAccessIcon />
        </Box>
        <Box h="50px" _hover={{bg:"#193F50", color:"white"}} borderRadius='xl' p="10px 16px" fontWeight="500" fontSize='md' border="1.5px solid #193F50" justifyContent="space-between" display="flex" alignItems="center">
            <Menu w="100%">
                <MenuButton w="100%" justifyContent="space-between" display="flex" gap="20px" alignItems="center">
                    <Box fontWeight="500" fontSize='md' w="100%" justifyContent="space-between" display="flex" gap="20px" alignItems="center">
                    <Link fontSize='md'>More</Link>
                    <MoreHorizIcon /></Box>
                </MenuButton>
                <Portal>
                    <MenuList color="#193F50" w="80%" m="auto" ml="-15%" >
                        <MenuItem mt="10px" fontWeight="500" fontSize='17px'><Link>Bays</Link></MenuItem>
                        <MenuItem mt="10px" fontWeight="500" fontSize='17px'><Link>Lagoons</Link></MenuItem>
                        <MenuItem mt="10px" fontWeight="500" fontSize='17px'><Link>Estuaries</Link></MenuItem>
                        <MenuItem mt="10px" fontWeight="500" fontSize='17px'><Link>Coves</Link></MenuItem>
                        <MenuItem mt="10px" fontWeight="500" fontSize='17px'><Link>Sand Bars</Link></MenuItem>
                    </MenuList>
                </Portal>
            </Menu>
        </Box>
    </Box>
}

export default SubNav;