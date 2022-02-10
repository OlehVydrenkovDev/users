const initialState = {
  id: null,
  userName: '',
  email: '',
  role: '',
  profiles: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        id: action.payload.id,
        userName: action.payload.userName,
        email: action.payload.email,
        role: action.payload.role,
        profiles: action.payload.profiles,
      };
    default:
      return state;
  }
};

export default userReducer;
