const defaultState = {
  data: [],
  isFetched: false,
};


const tourList = (state = defaultState, action) => {
  switch (action.type) {
  case 'FETCH_IMAGE_LIST':
    return Object.assign({}, state, {
      data: action.payload,
      isFetched: true,
    });

  default:
    return state;
  }
};

export default tourList;
