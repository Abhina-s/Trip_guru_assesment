import { combineReducers } from 'redux';
import tourList from './tourList';
import detailView from './detailView';

export default combineReducers({
  tourList,
  detailView,
});
