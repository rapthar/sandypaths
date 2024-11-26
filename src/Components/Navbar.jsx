import { Box, Link, Image, Text, Button  } from "@chakra-ui/react";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Signin from "./Signin";
import { useEffect, useState } from "react";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

function Navbar(){

    const [isscroll, setisscroll] = useState(false);
    function isScrolling() {
        if (window.scrollY > 80) {
            setisscroll(true);
        } else {
            setisscroll(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", isScrolling);
        return () => {
        window.removeEventListener("scroll", isScrolling);
        }
    }, [])

    
    const [isAuth, setAuth]= useState(false);

    return <Box w="full" boxShadow={ isscroll? 'md' : "sm"} position="fixed" bg="white" zIndex={1}  p="3px 0px">
            <Box h="60px" w="85%" m="auto" display="flex" alignItems="center" justifyContent="space-between">
            <Link to="/">
            <Image
                src="/sandypathlogo.png"
                alt="SandyPaths.com"
                height="45px"
                width="auto"
                objectFit="contain"
            />
            </Link>
            <Box display="flex" gap="25px" alignItems="center">
                <Link display="flex">
                    <ModeEditOutlineOutlinedIcon />
                    <Text fontWeight="500" fontSize='md'>Review</Text>
                </Link>
                <Link display="flex">
                    <FavoriteBorderOutlinedIcon />
                    <Text fontWeight="500" fontSize='md'>Wishlist</Text>
                </Link>
                <Link display="flex">
                    <NotificationsOutlinedIcon />
                    <Text fontWeight="500" fontSize='md'>Alerts</Text>
                </Link>
                <Link display="flex">
                    {isAuth ? 
                    <Button color="#193F50" onClick={()=>{
                        setAuth(!isAuth);
                    }}>Sanghamitra</Button> : <Signin />
                }
                </Link>
                <Link display="flex" alignItems="center">
                    <PersonOutlineOutlinedIcon />
                    <Text fontWeight="500" fontSize='md' ml={1}>Dashboard</Text>
                </Link>
            </Box>
        </Box>
    </Box>
}

export default Navbar;