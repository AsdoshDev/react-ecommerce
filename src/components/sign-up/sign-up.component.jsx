import React from 'react';
import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from './../../firebase/firebase.utils'

import { SignUp, Title } from './sign-up.styles';

class Signup extends React.Component {
    constructor() {
        super();

        this.state = ({
            'displayName': '',
            'email': '',
            'password': '',
            'confirmPassword': ''
        })
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert('Passwords dont match bro !');
            return;
        }

        try {
            //create user
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            // store in DB
            await createUserProfileDocument(user, { displayName });

            this.setState({
                'displayName': '',
                'email': '',
                'password': '',
                'confirmPassword': ''
            })

        } catch (err) {
            console.error("Error signin' up bro" + err);

        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <SignUp>
                <Title>I do not have an account</Title>
                <span>Sign up with your email and password</span>
                <form action="" className="sign-up-form">
                    <FormInput type='text' name='displayName' value={displayName} onChange={this.handleChange} label='Display Name' required />
                    <FormInput type='email' name='email' value={email} onChange={this.handleChange} label='Email' required />
                    <FormInput type='password' name='password' value={password} onChange={this.handleChange} label='Password' required />
                    <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={this.handleChange} label='Confirm password' required />
                    <CustomButton type="submit" onClick={this.handleSubmit}>SIGN UP</CustomButton>
                </form>
            </SignUp>
        )
    }
}

export default Signup;


