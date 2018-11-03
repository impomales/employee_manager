import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

// action creators.
export const emailChanged = text => ({
  type: EMAIL_CHANGED,
  payload: text
});

export const passwordChanged = text => ({
  type: PASSWORD_CHANGED,
  payload: text
});

const loginUserSuccess = user => ({
  type: LOGIN_USER_SUCCESS,
  payload: user
});

const loginUserFail = () => ({
  type: LOGIN_USER_FAIL
});

// thunk
export const loginUser = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: LOGIN_USER });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch(loginUserSuccess(user));
        Actions.employeeList();
      })
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => {
            Actions.employeeList();
            dispatch(loginUserSuccess(user))
          })
          .catch(() => dispatch(loginUserFail()));
      });
  };
};
