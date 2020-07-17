import React from 'react';
import FormInput from './../form-input/form-input.component';
import './sign-in.styles.scss';
import CustomButton from './../custom-button/custom-button.component';

class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
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
                    <CustomButton type="submit" >SIGN IN</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;