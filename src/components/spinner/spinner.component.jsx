import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './spinner.styles';


const Spinner = WrapperComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer>
            </SpinnerContainer>
        </SpinnerOverlay>
    ) : (
            <WrapperComponent {...otherProps} />
        )
}

export default Spinner;