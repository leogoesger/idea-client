import React from 'react';

import {history} from '../store/configureStore';
import {Link} from 'react-router-dom';

export function navigateTo(pathname, query) {
  history.push({pathname, query});
}
