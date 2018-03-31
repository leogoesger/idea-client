import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/contact/Layout';

export class Contact extends React.Component {
  render() {
    return <Layout />;
  }
}

Contact.propTypes = {
  users: PropTypes.array,
};

export default Contact;
