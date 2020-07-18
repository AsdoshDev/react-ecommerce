import React from 'react';
import FormInput from './../form-input/form-input.component';
import './sign-in.styles.scss';
import CustomButton from './../custom-button/custom-button.component';
import { auth, signInWithGoogle } from './../../firebase/firebase.utils';

class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (err) {
            console.log("Error signing in with email and password" + err);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and pasword</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} label="email" type="email" value={this.state.email} name="email" required />
                    <FormInput handleChange={this.handleChange} label="password" type="password" value={this.state.password} name="password" required />
                    <div className="buttons">
                        <CustomButton type="submit" >SIGN IN</CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>SIGN WITH GOOGLE</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;