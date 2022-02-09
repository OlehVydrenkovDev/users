const initialState = {
  id: null,
  userName: '',
  email: '',
  role: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        id: action.payload.id,
        userName: action.payload.userName,
        email: action.payload.email,
        role: action.payload.role,
      };
    default:
      return state;
  }
};

export default userReducer;
