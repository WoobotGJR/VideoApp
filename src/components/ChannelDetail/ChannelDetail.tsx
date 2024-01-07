import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../utils/api';
import { ChannelCard, Videos } from '..';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState({});
  const [videos, setvideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const { items } = await api(`channels?part=snippet&id=${id}`);
        setChannelDetail(items[0]);

        const { items: videos } = await api(
          `search?channelId=${id}&part=snippet&order=date`
        );
        setvideos(videos);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);
  return (
    <Box minHeight={'95vh'}>
      <Box sx={{ mb: 2 }}>
        <div
          style={{
            background:
              'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
            zIndex: 10,
            height: '300px',
          }}
        >
          <ChannelCard channelDetail={channelDetail}></ChannelCard>
        </div>
      </Box>

      <Box display={'flex'} p={'2'}>
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
