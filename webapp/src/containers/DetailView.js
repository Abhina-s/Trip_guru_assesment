import { connect } from 'react-redux';
import DetailView from '../presenters/detailView';

const mapStateToProps = (state) => {
  {
    const { data, isFetched } = state.detailView;
    return {
      tourDetails: data,
      isFetched,
    };
  }
};


const mapDispatchToProps = () => {
  return {
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailView);
