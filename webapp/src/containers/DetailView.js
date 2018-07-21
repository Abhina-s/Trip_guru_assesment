import { connect } from 'react-redux';

import DetailView from '../presenters/detailView';
// import { fetchImageList, fetchTour } from '../actions/index';

const mapStateToProps = (state) => {
  {
    const { data, isFetched } = state.detailView;
    return {
      tourDetails: data,
      isFetched,
    };
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    // genImage: () => {
    //   fetchImageList(dispatch);
    // },
    // onClick: (url) => {
    //   fetchTour(dispatch, url);
    // },
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailView);
