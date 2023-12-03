import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useHistory } from 'react-router-dom';

function Header(){
    const history = useHistory();

    const adminLink = () => {
        history.push('/admin');
    }
    const homeLink = () => {
        history.push('/');
    }
    return  (
    <Box sx={{ flexGrow: 1 }}
        className="App-header">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Don't forget it!
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FEEDBACK!!
          </Typography>
          <Button 
            color="inherit"
            onClick={adminLink}>
                Admin
          </Button>
          <Button 
            color="inherit"
            onClick={homeLink}>
                Home
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default Header;

{/* <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1> */}