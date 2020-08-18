import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CartContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 100px;
    right: 60px;
    z-index: 5;
`;

export const CartCheckoutButton = styled(CustomButton)`
    margin-top: auto;
`;

export const CartItemsContainer = styled.div`
    height: 240px;
    overflow: scroll;
`;
export const EmptyCart = styled.div`
    margin: 50px auto;
    font - size: 18px;
    text - align: center;
`;