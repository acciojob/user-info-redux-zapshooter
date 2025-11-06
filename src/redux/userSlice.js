// Redux slice (actions + reducer)
const initialState = {
  name: '',
  email: ''
};

// Action Types
const UPDATE_NAME = 'user/updateName';
const UPDATE_EMAIL = 'user/updateEmail';

// Action Creators
export const updateName = (name) => ({ type: UPDATE_NAME, payload: name });
export const updateEmail = (email) => ({ type: UPDATE_EMAIL, payload: email });

// Reducer
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NAME:
      return { ...state, name: action.payload };
    case UPDATE_EMAIL:
      return { ...state, email: action.payload };
    default:
      return state;
  }
}
