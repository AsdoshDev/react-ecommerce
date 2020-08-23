import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component';
import CollectionsOverviewContainer from './collections-overview.styles';

const CollectionsOverview = ({ collections }) => {
    console.log("CollectionsOverview -> collections", collections)

    return (
        <CollectionsOverviewContainer>
            {
                collections.map(({ id, ...collectionProps }) => (
                    <CollectionPreview key={id} {...collectionProps} />
                ))
            }
        </CollectionsOverviewContainer>
    )
}


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);