import React from 'react'
import { Box, Stack, Typography, Button } from "@mui/material"
// import HeroBannerImage from "../assets/images/banner.png"
const HeroBanner = () => {
    return (
        <Box sx={{
            mt: { lg: "212px", xs: "70px" },
            ml: { sm: '50px' }
        }} position="relative" p="20px  ">
            <Typography mb={5} color="black" fontWeight="100" fontSize="5rem">
                Fitness App
            </Typography>
            <Button href = "#exercises" color="success" variant="outlined" size="large" sx = {{padding: "10px" }}>Explore Exercises</Button>
            {/* <img style =  {{display: "block", float: "right", height: "30%"}} width = "50%" src={HeroBannerImage} alt="" /> */}

        </Box>
    )
}

export default HeroBanner