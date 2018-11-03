import { EMPLOYEE_UPDATE } from '../actions/types';

const initialState = {
  name: '',
  phone: '',
  shift: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};

export default reducer;
