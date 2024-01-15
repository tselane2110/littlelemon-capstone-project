import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import icon from '../icons_assets/Logo.svg';

const logoStyle = {
    "width": "199.32px",
    "height": "74px",
    "padding-right": "40px"
}

const style = {
    "left" : "292px",
    "top" : "23px"
}

function Nav(){

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div style={style}>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs value={value} onChange={handleChange} centered>
            <img className='icon-logo' src={icon} alt='icon' style={logoStyle}/>
                <Tab label="Home" />
                <Tab label = "About"/>
                <Tab label="Menu" />
                <Tab label="Reservations" />
                <Tab label = "Order Online" />
                <Tab label = " Login"/>
            </Tabs>
            </Box>
        </div>
    );
}

export default Nav;
