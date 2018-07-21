const defaultState = {
  data: [],
  isFetched: false,
};


const tour = (state = defaultState, action) => {
  switch (action.type) {
  case 'FETCH_TOUR':
    return Object.assign({}, state, {
      data: action.payload,
      isFetched: true,
    });

  default:
    return state;
  }
};

export default tour;
