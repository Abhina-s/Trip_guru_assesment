async function fetchImageList(dispatch) {
  const response = await fetch('https://api.thetripguru.com/tours');
  const json = await response.json();
  dispatch({
    type: 'FETCH_IMAGE_LIST',
    payload: json,
  });
}

export default fetchImageList;
