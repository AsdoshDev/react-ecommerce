import React from 'react';
import data from './../../constants/sections.json';

import CollectionPreview from './../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {

    constructor(props) {
        super(props);
        let collections = data.shopdata;
        this.state = {
            collections
        }
    }

    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({ id, ...collectionProps }) => (
                        <CollectionPreview key={id} {...collectionProps} />
                    ))
                }
            </div>

        )
    }

}


export default ShopPage;