import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { categories } from "../utils/constants";
import { useNavigate } from 'react-router-dom'
import { FetchApi } from "../utils/FetchApi";
import { Videos, Sidebar } from "./";
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    setVideos(null);
    FetchApi(`/videos?category=${selectedCategory}`)
      .then((data) => setVideos(data))
      .catch((err) => console.log(err));
  }, [selectedCategory]); 
    return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
       
      </Box>
     
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "Red" }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          copyright © {new Date().getFullYear()} by <span style={{ color: "#FC1503" }}>Youtube</span>. All rights reserved.
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed