import history from '../history';

async function fetchImageList(dispatch) {
  const response = await fetch('https://api.thetripguru.com/tours');
  const json = await response.json();
  dispatch({
    type: 'FETCH_IMAGE_LIST',
    payload: json,
  });
}

async function fetchTour(dispatch, url) {
  const response = await fetch(`https://api.thetripguru.com/tours/${url}`);
  const json = await response.json();
  dispatch({
    type: 'FETCH_TOUR',
    payload: json,
  });
  history.push(`tour/${url}`);
}
export { fetchImageList, fetchTour };
