import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';
import Spinner from '../../components/spinner/spinner.component';
import CollectionPage from '../collection/collection.component';
import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionLoaded(state)
});

const CollectionsPageContainer = compose(
    connect(mapStateToProps),
    Spinner
)(CollectionPage);

export default CollectionsPageContainer;