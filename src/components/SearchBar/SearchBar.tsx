import { IconButton, Paper } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setsearchTerm] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (searchTerm) {
      // here used interesting method to provide the search result
      navigate(`/search/${searchTerm}`);
    }
  };
  return (
    <Paper
      component={'form'}
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
        width: { xs: '100%', sm: 'auto' },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => {
          setsearchTerm(e.target.value);
        }}
      />
      <IconButton type="submit" sx={{ p: '10px', color: 'red' }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
