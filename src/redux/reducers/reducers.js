const initialState = {
  banks: null,
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BANKS':
      return {
        ...state,
        banks: action.payload,
      };
    default:
      return state;
  }
};

export default sessionReducer;
