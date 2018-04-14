import request from 'superagent';
import {set, unset} from 'lodash';
import {navigateTo} from '../utils/helpers';
import {UserTypes as types} from '../action-types';

const loginUserObject = userInfo => {
  return {
    type: types.LOGIN_USER_OBJECT,
    userInfo,
  };
};

const loginUserErrorObject = message => {
  return {
    type: types.LOGIN_USER_ERROR_OBJECT,
    message,
  };
};

const fetchCurrentUserSuccess = currentUser => {
  return {
    type: types.FETCH_CURRENT_USER_SUCCESS,
    currentUser,
  };
};

const logOutUserObject = () => {
  return {
    type: types.LOG_OUT_USER,
  };
};

export function loginUser(userInfo) {
  return async dispatch => {
    dispatch(loginUserErrorObject());
    try {
      const loginResponse = await request
        .post(`${process.env.SERVER_ADDRESS}/login`)
        .send(userInfo);
      set(window.localStorage, 'ideaJWT', loginResponse.body.ideaJWT);
      dispatch(loginUserObject(loginResponse.body.user));
      navigateTo('/');
    } catch (e) {
      const message = 'Login Failed';
      dispatch(loginUserErrorObject(message));
    }
  };
}

export function fetchCurrentUser() {
  return async dispatch => {
    try {
      const ideaJWT = window.localStorage.ideaJWT;
      const fetchUserResponse = await request
        .get(`${process.env.SERVER_ADDRESS}/users/me`)
        .set('ideaJWT', ideaJWT);
      dispatch(fetchCurrentUserSuccess(fetchUserResponse.body));
    } catch (e) {
      unset(window.localStorage, 'ideaJWT');
      navigateTo('/');
    }
  };
}

export function logOutUser() {
  return dispatch => {
    unset(window.localStorage, 'ideaJWT');
    dispatch(logOutUserObject());
    navigateTo('/');
  };
}
