import icon from '../icons_assets/Logo.svg';
import React from 'react';

function Header(){
    return(
        <>
        <img className='icon-logo'
            src={icon}
            alt='icon'
        />
        </>
    )
}

export default Header;