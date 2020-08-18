import React from 'react';
import SignIn from './../sign-in/sign-in.component';
import SignUp from './../sign-up/sign-up.component';

import { SignInAndSignUp } from './sign-in-and-sign-up.styles';

const SignInAndSignUpPage = () => (
    <SignInAndSignUp>
        <SignIn />
        <SignUp />
    </SignInAndSignUp>
)

export default SignInAndSignUpPage;
