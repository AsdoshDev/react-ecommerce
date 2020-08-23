import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';
import {
    CollectionPageWrapper,
    Title,
    CollectionItemWrapper
} from './collection.styles';

const CollectionPage = ({ match, collection }) => {
    console.log("CollectionPage -> collection", collection)
    const { title, items } = collection;
    return (
        <CollectionPageWrapper>
            <Title>{title}</Title>
            <CollectionItemWrapper>
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item} />)
                    )
                }
            </CollectionItemWrapper>
        </CollectionPageWrapper>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);