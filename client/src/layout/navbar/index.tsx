import React, { useState} from 'react'
import { 
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery
 } from '@mui/material'
import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Menu,
  Close
} from "@mui/icons-material"
import { useDispatch, useSelector } from 'react-redux'
import { setMode, setLogout } from '../../state'
import { useNavigate } from 'react-router-dom'
import FlexBetween from '../../components/FlexBetween'



const Navbar = () => {

   const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const user = useSelector((state: any) => state.user);
   const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

   const theme = useTheme();
   
   //@ts-ignore
   const neutralLight: string = theme.palette.neutral.Light;
   //@ts-ignore
   const dark: string = theme.palette.neutral.dark;
   //@ts-ignore
   const background: string = theme.palette.primary.default;
   //@ts-ignore
   const primaryLight: string = theme.palette.primary.light;
   //@ts-ignore
   const alt: string = theme.palette.background.alt;


   const fullName = `${user?.firstName} ${user?.lastName}`;
  
   return (
   <FlexBetween bgcolor={alt} padding="1.75rem" >
     <FlexBetween gap='1.5'>
        <Typography
        fontWeight="bold"
        fontSize="clamp(1rem, 2rem, 2.25rem"
        color="primary"
        onClick={() => navigate("/home")}
        sx={{
          ":hover":{
            color: primaryLight,
            cursor: "pointer",
          },
        }}
        >
          Sociopedia
        </Typography>
        {
          isNonMobileScreens && (
            <FlexBetween bgcolor={neutralLight} borderRadius="9px" gap="3rem" padding="0.1rem 1.5rem">
             <InputBase placeholder='search..'/>
             <IconButton>
                <Search/>
             </IconButton>
            </FlexBetween>
          )
        }
     </FlexBetween>


    {/**desktop nav */}

    {isNonMobileScreens ? (
    <FlexBetween gap="2rem">
      <IconButton onClick={() => dispatch(setMode())}>
        {theme.palette.mode === "dark" ? (
          <DarkMode sx={{ fontSize: "25px"}} />
        ) : (
          <LightMode sx={{ color: dark, fontSize: "25px"}} />
        )}

      </IconButton>
      <Message sx={{ fontSize: "25px"}} />
      <Notifications sx={{ fontSize: "25px"}} />
      <Help sx={{ fontSize: "25px"}} />
      <FormControl>
      <Select
          value={fullName}
          sx={{
            backgroundColor: neutralLight,
            width: "150px",
            borderRadius: "0.25rem",
            p: "0.25rem 1rem",
            "& .MuiSvgIcon-root":{ 
            pr: "0.25rem",
            width: "3rem"
           },
           "& .MuiSelect-select:focus" : {  
            backgroundColor: neutralLight
              }}
          }
          input={<InputBase/>}
          >
            <MenuItem value={fullName}>
               <Typography>{fullName}</Typography>
            </MenuItem>
            <MenuItem onClick={() => dispatch(setLogout())} >Log out</MenuItem>
          </Select>
      </FormControl>
    </FlexBetween>
    ) 
    : (
      <IconButton
      onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
      >
       <Menu/>
      </IconButton>
    )}

    {/** mobile nav */}

     {!isMobileMenuToggled && isMobileMenuToggled && (
        <Box
        position="fixed"
        right="0"
        bottom="0"
        height="100%"
        zIndex="120"
        maxWidth="500px"
        minWidth="300px"
        bgcolor={background}
        >
            <Box display="flex" justifyContent="flex-end" p="1rem">
              <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
              >
                <Close/>
              </IconButton>
            </Box>

            {/**menu items */}
            <FlexBetween
             display="flex"
             flexDirection="column" 
             justifyContent="center"
             alignItems="center"
             gap="2rem">
      <IconButton onClick={() => dispatch(setMode())}>
        {theme.palette.mode === "dark" ? (
          <DarkMode sx={{ fontSize: "25px"}} />
        ) : (
          <LightMode sx={{ color: dark, fontSize: "25px"}} />
        )}

      </IconButton>
      <Message sx={{ fontSize: "25px"}} />
      <Notifications sx={{ fontSize: "25px"}} />
      <Help sx={{ fontSize: "25px"}} />
      <FormControl>
      <Select
          value={fullName}
          sx={{
            backgroundColor: neutralLight,
            width: "150px",
            borderRadius: "0.25rem",
            p: "0.25rem 1rem",
            "& .MuiSvgIcon-root":{ 
            pr: "0.25rem",
            width: "3rem"
           },
           "& .MuiSelect-select:focus" : {  
            backgroundColor: neutralLight
              }}
          }
          input={<InputBase/>}
          >
            <MenuItem value={fullName}>
               <Typography>{fullName}</Typography>
            </MenuItem>
            <MenuItem onClick={() => dispatch(setLogout())} >Log out</MenuItem>
          </Select>
      </FormControl>
    </FlexBetween>
        </Box>
     )}
    </FlexBetween>

  )
}

export default Navbar