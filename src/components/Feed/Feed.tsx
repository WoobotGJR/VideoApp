import { Box, Stack, Typography } from '@mui/material';
import { Sidebar, Videos } from '..';
import { useEffect, useState } from 'react';
import { api } from '../../utils/api';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { items } = await api(
          `search?part=snippet&q=${selectedCategory}`
        );

        setVideos(items);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        ></Sidebar>
        <Typography className="copyright" sx={{ mt: 1.5 }} color="#fff">
          Github
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: '#fff' }}
        >
          {selectedCategory}
          <span style={{ color: '#FC1503', marginLeft: '5px' }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
