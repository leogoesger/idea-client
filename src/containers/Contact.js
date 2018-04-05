import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {
  fetchParagraphs,
  editParagraphs,
} from '../actions/contact';

import Layout from '../components/contact/Layout';

export class Contact extends React.Component {
  componentWillMount() {
    this.props.fetchParagraphs();
  }

  render() {
    if (!this.props.paragraphs) {
      return null;
    }

    return (
      <Layout
        paragraphs={this.props.paragraphs}
        editParagraphs={paragraphs => 
          // console.log(this.props)
          this.props.editParagraphs(paragraphs)
        }
      />
    );
  }
}

Contact.propTypes = {
  paragraphs: PropTypes.array,
  fetchParagraphs: PropTypes.func,
  editParagraphs: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    paragraphs: state.home.paragraphs,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchParagraphs: () => dispatch(fetchParagraphs()),
    editParagraphs: paragraphs => dispatch(editParagraphs(paragraphs)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
