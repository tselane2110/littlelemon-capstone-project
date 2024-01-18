import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import icon from '../../icons_assets/Logo.svg';
import { Link } from 'react-router-dom';
import "./nav.css";

function Nav(){

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='nav'>
            <div className='nav-size'>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs value={value} onChange={handleChange} centered indicatorColor='white' textColor='Black'>
            <Link to="/">
                <img className='icon-logo logoStyle' src={icon} alt='icon'/>
            </Link>
                <Tab label="Home" />
                <Tab label = "About"/>
                <Tab label="Menu" />
                <Tab label="Reservations" />
                <Tab label = "Order Online" />
                <Tab label = " Login"/>
            </Tabs>
            </Box>
            </div>
        </div>
    );
}

export default Nav;
