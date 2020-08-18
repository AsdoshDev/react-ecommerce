import React from 'react';
import { connect } from 'react-redux';
import { addItem } from './../../redux/cart/cart.actions';
import {
    CollectionItemContainer,
    BackgroundImage,
    CollectionFooter,
    AddButton,
    Name,
    Price
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => (
    <CollectionItemContainer>
        <BackgroundImage imageUrl={item.imageUrl} ></BackgroundImage>
        <CollectionFooter>
            <Name>{item.name}</Name>
            <Price>{item.price}</Price>
        </CollectionFooter>
        <AddButton onClick={() => addItem(item)} inverted>Add to cart</AddButton>
    </CollectionItemContainer>
)
const mapDispatchToProps = dispatch => (
    {
        addItem: item => dispatch(addItem(item))
    }
)
export default connect(null, mapDispatchToProps)(CollectionItem);