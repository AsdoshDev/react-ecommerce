import React from 'react';
import { connect } from 'react-redux';
import CollectionsOverview from './../../components/collections-overview/collections-overview.component';
import CollectionPage from './../collection/collection.component';
import { Route } from 'react-router-dom';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import updateCollections from '../../redux/shop/shop.actions';
import Spinner from '../../components/spinner/spinner.component';

const CollectionsOverviewWithSpinner = Spinner(CollectionsOverview);
const CollectionPageWithSpinner = Spinner(CollectionPage);
class ShopPage extends React.Component {

    state = {
        loading: true
    }

    unsubscribeFromSnapshot = null;
    componentDidMount() {
        const collectionRef = firestore.collection('collections');
        const { updateCollection } = this.props;
        //using rx js of firestore
        // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
        //     const collectionsMap = await convertCollectionsSnapshotToMap(snapshot);
        //     updateCollection(collectionsMap);
        //     this.setState({ loading: false });
        // })

        //using promise
        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollection(collectionsMap);
            this.setState({ loading: false });
        });

        //using fetch
        console.log("using fetch")
        // fetch('https://firestore.googleapis.com/v1/projects/crwn-db-209d5/databases/(default)/documents/collections')
        //     .then(res => res.json())
        //     .then(collections => console.log(collections));
    }

    componentWillUnmount() {
        // this.unsubscribeFromSnapshot();
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className="shop-page">
                {/* before spinner came into picture  */}
                {/* <Route exact path={`${match.path}`} component={CollectionsOverview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> */}
                {/* after spinner came into picture  */}
                <Route exact path={`${match.path}`}
                    render={props => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route path={`${match.path}/:collectionId`}
                    render={props => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollection: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);