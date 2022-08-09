import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography, TextField, Button } from '@mui/material';

import { Exerciseoptions, fetchdata } from '../utils/fetchData';
import { FormControlUnstyledContext } from '@mui/base';
const SearchExercises = () => {
    const [search, setSearch] = useState("");

    const handleSearch = async () => {
        if (search) {
            const exerciseData = await fetchdata('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', Exerciseoptions); 

            console.log(exerciseData); 
        }
    }
    return (
        <div>
            <Stack alignItems="center" mt="37px" justifyContent="center" p="20px"  >
                <Typography fontWeight={700} sx={{ fontSize: { lg: "44px", xs: "30px" } }} mb="50" textAlign="center">
                    Some  Exercises
                </Typography>
                <Box postition="relative" mb="72px">
                    <TextField
                        sx={{
                            input: {
                                fontWeight: '700', border: 'none', borderRadius: '4px'
                            },
                            width: { lg: '800px', xs: '350px' },
                            borderRadius: "40px"

                        }}
                        height="76px"
                        value={search}
                        onChange={(e) => setSearch(e.target.value.toLowerCase())}
                        placeholder="Search Exercises"
                        type="text"
                    />
                    <Button className="search-btn" sx={{
                        bgcolor: "green",
                        color: "#fff",
                        textTransform: "none",
                        width: { lg: '20px', xs: '14px' },
                        height: "56px",
                        postition: "absolute",
                        right: '0'
                    }}
                        onClick={handleSearch}
                    >
                        Search
                    </Button>

                </Box>

            </Stack>
        </div>
    )
}

export default SearchExercises