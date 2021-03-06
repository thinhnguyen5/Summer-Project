import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { SiBuymeacoffee } from 'react-icons/si';
import './Navbar.css';
import { Button } from './Button'

function Navbar() {
    const [click, setClick] = useState(false);

    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    // fix error when resize the web
    useEffect(() => {
        showButton();
    }, []);


    window.addEventListener('resize', showButton);
    
    return (
       <>
       <nav className='navbar'>
           <div className='navbar-container'>
               <Link to="/" className='navbar-logo' alt='BUWJ LOGO' onClick= 
               {closeMobileMenu}>
                   <SiBuymeacoffee className='navbar-icon'/> DJBUWJ COFFEE 
               </Link>
               <div className='menu-icon' onClick={handleClick}>
                   <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
               </div>
               <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                   <li className='nav-item'>
                       <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                           Home
                       </Link>
                   </li>

                   <li className='nav-item'>
                       <Link to='/menu' className='nav-links' onClick={closeMobileMenu}>
                           Menu
                       </Link>
                   </li>

                   <li className='nav-item'>
                       <Link to='/location' className='nav-links' onClick={closeMobileMenu}>
                           Location
                       </Link>
                   </li>

                   <li className='nav-item'>
                       <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                           Contact
                       </Link>
                   </li>

                   <li>
                       <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                           Sign Up
                       </Link>
                   </li>


               </ul>
               {button  && <Button buttonStyle='btn--outline'>Sign In</Button>}
           </div>
       </nav>

       </>
    )
}

export default Navbar;
