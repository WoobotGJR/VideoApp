import { Box, Stack } from '@mui/material';
import React from 'react';
import { ChannelCard, VideoCard } from '..';

interface IVideos {
  videos: any;
  direction?: 'row' | 'column';
}

const Videos: React.FC<IVideos> = ({ videos, direction }) => {
  return (
    <Stack
      direction={direction || 'row'}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos.map((item: any, idx: number) => (
        <Box key={idx} sx={{ width: '320px' }}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
