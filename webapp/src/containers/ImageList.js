import { connect } from 'react-redux';

import Home from '../presenters/home';
import fetchimage from '../actions/index'


const mapStateToProps = (state) => {
  {
    const imageList = state.imageList.data;
    return {
      imageList,
    }
  }
};


const mapDispatchToProps = (dispatch) => ({
  genImage: () => {
    fetchimage(dispatch);
  }             
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
