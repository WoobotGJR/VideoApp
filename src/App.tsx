import './App.css';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import {
  ChannelDetail,
  Feed,
  Navbar,
  SearchFeed,
  VideoDetail,
} from './components';

const App = () => (
  <Box sx={{ backgroundColor: '#000' }}>
    <Navbar />
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="/video/:id" element={<VideoDetail />} />
      <Route path="/channel/:id" element={<ChannelDetail />} />
      <Route path="/search/:searchTerm" element={<SearchFeed />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  </Box>
);
export default App;
