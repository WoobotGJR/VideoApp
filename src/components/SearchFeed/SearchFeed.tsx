import { Box, Typography } from '@mui/material';
import { Videos } from '..';
import { useEffect, useState } from 'react';
import { api } from '../../utils/api';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const { items } = await api(`search?part=snippet&q=${searchTerm}`);

        setVideos(items);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [searchTerm]);

  return (
    <Box
      ml={{ sm: '240px' }}
      p={3}
      sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}
    >
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: '#fff' }}>
        Search results for:
        <span style={{ color: '#FC1503', marginLeft: '5px' }}>
          {searchTerm}&nbsp;
        </span>
        videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
