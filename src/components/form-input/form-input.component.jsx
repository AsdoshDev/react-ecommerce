import React from 'react';
import {
    FormInputGroup,
    FormInputField,
    FormInputLabel
} from './form-input.styles'

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <FormInputGroup>
        <FormInputField onChange={handleChange} {...otherProps} />
        {
            label ? (
                <FormInputLabel {...otherProps}>
                    {label}
                </FormInputLabel>
            ) : null
        }
    </FormInputGroup>
);

export default FormInput;