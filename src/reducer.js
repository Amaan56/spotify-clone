export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   'BQAKkIXwUA-bQl-onecsL3h3A5Oa_f9uc-ch7BZkFi5b5aRyQjfYULQ-mfmt7sX2m2ny6EeVT7KToX7JS3NvTBOMdHGc_HXbz6xZlWsKkI28DRLqAin1qOpr-noa92JGsg3DTP6EBG2C1f5SL05KeomRFtrnMs_SaGsPc4JzP-tsQXOIDqTJ',
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };
    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discoverWeekly: action.discoverWeekly,
      };
    default:
      return state;
  }
};

export default reducer;
