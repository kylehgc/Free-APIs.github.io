import React from 'react';
import logo from '../../logo.svg';

function Header() {
    return (
        <div className='h-20 bg-gray-800 text-white px-8 py-4 opacity-90 text-lg'>
            <div className='flex max-w-3xl justify-between items-center h-full ml-auto mr-auto'>
                <img src={logo} className='h-full' alt='placeholdersvg'/>
                <div className='hidden xs:block'>Browse APIs</div>
                <div>GitHub</div>
            </div>
        </div>
    );
}

export default Header;