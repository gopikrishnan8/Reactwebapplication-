import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';
const Navbar = () => 
   (
    <Stack
    direction="row" 
    alignItems="center" 
    p={2} 
    sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between'}}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="logo" height={50} />
        <Typography variant="h4" fontWeight="bold" color="#fff" p={2}>
                    FIRE TUBE
      </Typography>
      </Link>
      <SearchBar/>
    </Stack>
  )


export default Navbar