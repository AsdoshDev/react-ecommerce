import React from 'react';
import { ReactComponent as Logo } from './../../assets/crown.svg';
import { auth } from './../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from './../cart-icon/cart-icon.component';
import Cart from './../cart/cart.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, WelcomeContainer } from './header.styles';

const Header = ({ currentUser, hidden }) => {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className="logo" />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>
                    SHOP
                </OptionLink>
                <OptionLink to='/contact'>
                    CONTACT
                </OptionLink>
                {
                    currentUser ?
                        <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
                        :
                        <OptionLink to='/signin'>
                            SIGN IN
                        </OptionLink>

                }
                <CartIcon />
            </OptionsContainer>
            {hidden ? null : (<Cart />)}
            {
                currentUser && currentUser.currentUser
                    ?
                    <WelcomeContainer>
                        WELCOME
                    <span style={{ 'fontWeight': 'bold' }}>
                            {` ${(currentUser.currentUser.displayName).toUpperCase()}`}!
                    </span>
                    </WelcomeContainer>
                    : ''
            }
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden,
    currentUser: selectCurrentUser
})


export default connect(mapStateToProps)(Header);