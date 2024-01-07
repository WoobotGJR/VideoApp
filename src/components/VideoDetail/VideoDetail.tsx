import { Box, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { Link, useParams } from 'react-router-dom';
import { api } from '../../utils/api';
import { CheckCircle } from '@mui/icons-material';
import { Videos } from '..';

interface IVideoDetailInitial {
  snippet: {
    title: string;
    channelId: string;
    channelTitle: string;
    description: string;
    publishedAt: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
  statistics: {
    viewCount: string;
    likeCount: string;
    commentCount: string;
  };
}

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setvideoDetail] = useState<IVideoDetailInitial>();
  const [relatedVideos, setrelatedVideos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { items } = await api(`videos?part=snippet,statistics&id=${id}`);
        setvideoDetail(items[0]);

        const { items: relatedVideos } = await api(
          `search?part=snippet&relatedToVideoId=${id}&type=video`
        );
        setrelatedVideos(relatedVideos);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  return (
    <Box>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box
            sx={{ width: '100%', position: 'sticky', top: '86px', ml: '10px' }}
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {videoDetail?.snippet?.title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: '#fff' }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                <Typography sx={{ color: '#fff' }}>
                  {videoDetail?.snippet?.channelTitle}
                  <CheckCircle
                    sx={{ fontSize: '12px', color: 'gray', ml: '5px' }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography sx={{ opacity: 0.7 }}>
                  {parseInt(
                    videoDetail?.statistics?.viewCount ?? '0'
                  ).toLocaleString()}{' '}
                  views
                </Typography>
                <Typography sx={{ opacity: 0.7 }}>
                  {parseInt(
                    videoDetail?.statistics?.likeCount ?? '0'
                  ).toLocaleString()}{' '}
                  likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        <Box
          px={4}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={relatedVideos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
