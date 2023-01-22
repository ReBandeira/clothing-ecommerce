import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import './nav-bar.styles.sass';

const NavBar = () => {
    return (
        <Fragment>
            <div className='nav-bar'>
                <div>
                    <Link className='logo-container' to='/'>
                        <CrownLogo className='logo'/>
                    </Link>
                </div>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                           Shop
                    </Link>
                    <Link className='nav-link' to='/sign-in'>
                            Sign in                            
                    </Link>
                </div>                
            </div>
            <Outlet/>
        </Fragment>
       
    )
}

export default NavBar;