import { combineReducers } from 'redux';
import login from './login';
import employeeForm from './employeeForm';

export default combineReducers({
  login,
  employeeForm
});
