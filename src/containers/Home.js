import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {
  fetchParagraphs,
  editParagraphs,
  deleteParagraph,
  addParagraph,
} from '../actions/home';
import Layout from '../components/home/Layout';

export class Home extends React.Component {
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
        editParagraphs={paragraphs => this.props.editParagraphs(paragraphs)}
        deleteParagraph={paragraphs => this.props.deleteParagraph(paragraphs)}
        addParagraph={paragraphs => this.props.addParagraph(paragraphs)}
      />
    );
  }
}

Home.propTypes = {
  paragraphs: PropTypes.array,
  fetchParagraphs: PropTypes.func,
  editParagraphs: PropTypes.func,
  deleteParagraph: PropTypes.func,
  addParagraph: PropTypes.func,
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
    deleteParagraph: paragraphs => dispatch(deleteParagraph(paragraphs)),
    addParagraph: paragraphs => dispatch(addParagraph(paragraphs)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
