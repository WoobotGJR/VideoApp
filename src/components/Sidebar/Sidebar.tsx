import { Stack } from '@mui/material';
import { categories } from '../../utils/constants';

interface ISidebar {
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
}

const Sidebar: React.FC<ISidebar> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: 'auto',
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          style={{
            background: category.name === selectedCategory ? 'red' : '',
            color: 'white',
          }}
          onClick={() => setSelectedCategory(category.name)}
          key={category.name}
        >
          <span
            style={{
              marginRight: '15px',
              color: category.name === selectedCategory ? 'white' : 'red',
              opacity: category.name === selectedCategory ? '1' : '0.8',
            }}
          >
            <category.icon />
          </span>
          <span>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
