const initialState = {
  openPanel: 'profiles',
};

const openPanelReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_OPEN_PANEL':
      return {
        openPanel: action.payload,
      };
    default:
      return state;
  }
};

export default openPanelReducer;
