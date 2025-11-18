import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'


const Navbar = () => {

    const [menu, setMenu] = useState('home')

    return (
        <div className='navbar'>
            {/* logo */}
            <img src={assets.logo} alt="" className='logo' />
            {/* creates underline effect for active menu item */}
            <ul className='navbar-menu'>
                <li onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''}>home</li>
                <li onClick={() => setMenu('menu')} className={menu === 'menu' ? 'active' : ''}>menu</li>
                <li onClick={() => setMenu('mobile-app')} className={menu === 'mobile-app' ? 'active' : ''}>mobile-app</li>
                <li onClick={() => setMenu('contact-us')} className={menu === 'contact-us' ? 'active' : ''}>contact us</li>
            </ul>
            <div className='navbar-right'>
                {/* search icon */}
                <img src={assets.search_icon} alt="" />
                <div className='navbar-search-icon'>
                    {/* basket icon */}
                    <img src={assets.basket_icon} alt="" />
                    {/* red dot */}
                    <div className='dot'></div>
                </div>
                <button>sign in</button>
            </div>
        </div>
    )
}

export default Navbar