import React from 'react'
import { Box, Typography, useTheme, useMediaQuery} from "@mui/material";


const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
 <Box>
     <Box width="100%" bgcolor={theme.palette.background.default} p="1rem 6%" textAlign="center">
       <Typography
        fontWeight="bold"
        fontSize="clamp(1rem, 2rem, 2.25rem"
        color="primary">
          Sociopedia
        </Typography>
    </Box>
    <Box
    width={isNonMobileScreens ? "50%" : "93%"}
    p="2rem"
    m="2rem auto"
    borderRadius="1.5rem"
    bgcolor={theme.palette.background.default}
    >
      <Typography fontWeight="500" variant="h5" sx={{md: "1.5rem"}}>
          Welcome to socipedia
      </Typography>

    </Box>
 </Box>
  )
}

export default LoginPage