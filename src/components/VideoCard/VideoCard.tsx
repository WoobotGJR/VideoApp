import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  demoChannelTitle,
  demoChannelUrl,
  demoVideoTitle,
  demoVideoUrl,
} from '../../utils/constants';
import { CheckCircle } from '@mui/icons-material';

interface IVideoCard {
  video: {
    id: {
      videoId: string;
    };
    snippet: {
      channelId: string;
      channelTitle: string;
      title: string;
      thumbnails: {
        high: {
          url: string;
        };
      };
    };
  };
}

const VideoCard: React.FC<IVideoCard> = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: { xs: '100%', md: '320px' },
        boxShadow: 'none',
        borderRadius: 0,
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          sx={{
            width: '358px',
            height: '180px',
          }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle || demoChannelTitle.slice(0, 60)}
            <CheckCircle
              sx={{ fontSize: 12, color: 'gray', ml: '5px' }}
            ></CheckCircle>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
