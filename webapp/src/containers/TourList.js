import { connect } from 'react-redux';

import Home from '../presenters/home';
import { fetchTourList, fetchTour } from '../actions/index';


const mapStateToProps = (state) => {
  {
    const { data, isFetched } = state.tourList;
    return {
      tourList: data,
      isFetched,
    };
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    genImage: () => {
      fetchTourList(dispatch);
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
