import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import Spinner from '../spinner/spinner.component';
import CollectionsOverview from '../collections-overview/collections-overview.component';
import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    Spinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;