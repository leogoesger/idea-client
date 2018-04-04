import {history} from '../store/configureStore';
import {detect} from 'detect-browser';

export function navigateTo(pathname, query) {
  history.push({pathname, query});
}

function _getBrowserMajorVersion(version) {
  if (version) {
    const versionNumbers = version.split('.');
    if (versionNumbers.length) {
      return parseInt(versionNumbers[0].replace(/[^0-9]/g, ''), 10);
    }
  }
  return null;
}

export function isFlexNotSupported() {
  const browser = detect();
  if (browser && browser.name && browser.version) {
    const majorVersion = _getBrowserMajorVersion(browser.version);
    if (majorVersion) {
      switch (browser.name) {
        case 'chrome':
          if (majorVersion <= 20) {
            return true;
          }
          return false;
        case 'firefox':
          if (majorVersion <= 27) {
            return true;
          }
          return false;
        case 'safari':
          if (majorVersion <= 6) {
            return true;
          }
          return false;
        case 'ie':
          if (majorVersion <= 11) {
            return true;
          }
          return false;
        case 'edge':
          if (majorVersion <= 11) {
            return true;
          }
          return false;
        default:
          return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}

export function validatePassword(password) {
  if (password.length >= 4 && password.length <= 20) {
    return true;
  }
  return false;
}

export function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

export function getEmailErrorMessage(email) {
  if (email && !validateEmail(email)) {
    return 'Invalid Email address';
  }
}

export function getPasswordErrorMessage(password) {
  if (!password || validatePassword(password)) {
    return ' ';
  }
  if (!validatePassword(password)) {
    return 'Should be between 4 to 20 characters';
  }
}
