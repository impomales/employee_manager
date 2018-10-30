import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types';

const initialState = {
  email: '',
  password: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

export default reducer;
