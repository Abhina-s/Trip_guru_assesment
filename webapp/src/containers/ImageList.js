import { connect } from 'react-redux';

import Home from '../presenters/home';
import { fetchImageList, fetchTour } from '../actions/index';


const mapStateToProps = (state) => {
  {
    const { data, isFetched } = state.imageList;
    return {
      imageList: data,
      isFetched,
    };
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    genImage: () => {
      fetchImageList(dispatch);
    },
    onClick: (url) => {
      fetchTour(dispatch, url);
    },
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
