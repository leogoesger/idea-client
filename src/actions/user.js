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
    try {
      set(window.localStorage, 'ideaJWT', 'abcdefgSecret');
      dispatch(loginUserObject(userInfo));
      navigateTo('/');
    } catch (e) {
      const message = {message: 'You suck!'};
      dispatch(loginUserErrorObject(message));
    }
  };
}

export function fetchCurrentUser() {
  return async dispatch => {
    try {
      const user = {userName: 'leogoesger', email: 'leoq91@gmail.com'};
      dispatch(fetchCurrentUserSuccess(user));
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
