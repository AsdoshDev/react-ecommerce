import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';
import { ReactComponent as Logo } from './../../assets/crown.svg';

import { auth } from './../../firebase/firebase.utils';

import { connect } from 'react-redux';

const Header = ({ currentUser }) => {
    return (
        <div className="header">
            <Link className="logo-container" to='/'>
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to='/shop'>
                    SHOP
            </Link>
                <Link className="option" to='/contact'>
                    CONTACT
            </Link>
                {
                    currentUser ?
                        <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                        :
                        <Link className="option" to='/signin'>
                            SIGN IN
                    </Link>

                }
            </div>
            {
                currentUser && currentUser.currentUser ? <div className='welcome'>WELCOME <span style={{ 'fontWeight': 'bold' }}>{(currentUser.currentUser.displayName).toUpperCase()}!</span></div> : ''
            }

        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})


export default connect(mapStateToProps)(Header);