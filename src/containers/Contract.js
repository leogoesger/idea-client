import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/contract/Layout';

export class Contract extends React.Component {
  render() {
    const state = [
      'California Department of Mental Health',
      'Nevada Department of Mental Health',
      'Utah Department of Mental Health',
      'Wyoming Mental Health Division',
      'Wyoming Substance Abuse Division',
      'Washington Department of Social and Health Services',
    ];
    const county = [
      'Alpine County Behavioral Health',
      'Butte County Department of Employment and Social Services',
      'Butte County Behavioral Health',
      'Colusa County',
    ]
    return <Layout state={state} county={county} />;
  }
}

Contract.propTypes = {
  users: PropTypes.array,
};

export default Contract;
