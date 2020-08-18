import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './spinner.styles';


const spinner = WrapperComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer>
            </SpinnerContainer>
        </SpinnerOverlay>
    ) : (
            <WrapperComponent {...otherProps} />
        )
}

export default spinner;