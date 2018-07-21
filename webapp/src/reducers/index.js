import { combineReducers } from 'redux';
import imageList from './imageList';
import detailView from './detailView';

export default combineReducers({
  imageList,
  detailView,
});
