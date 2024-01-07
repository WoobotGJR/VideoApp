import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { demoChannelTitle, demoProfilePicture } from '../../utils/constants';
import { CheckCircle } from '@mui/icons-material';

interface IChannelCard {
  channelDetail: any;
}

const ChannelCard: React.FC<IChannelCard> = ({ channelDetail }) => {
  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '320px',
        height: '320px',
        margin: 'auto',
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#fff',
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            sx={{
              borderRadius: '50%',
              height: '180px',
              width: '180px',
              mb: 2,
              border: '1px solid #e3e3e3',
            }}
          >
            <Typography variant="h6" sx={{ mt: 23.5 }}>
              {channelDetail?.snippet?.title || demoChannelTitle}
              <CheckCircle
                sx={{ fontSize: 14, color: 'gray', ml: '5px' }}
              ></CheckCircle>
            </Typography>
            {channelDetail?.statistics?.subscriberCount && (
              <Typography>
                {parseInt(
                  channelDetail?.statistics?.subscriberCount
                ).toLocaleString()}{' '}
                Subscribers
              </Typography>
            )}
          </CardMedia>
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
