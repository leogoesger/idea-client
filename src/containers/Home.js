import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  fetchParagraphs,
  editParagraphs,
  deleteParagraph,
  addParagraph,
} from "../actions/home";
import Layout from "../components/home/Layout";
import Loader from "../components/shared/Loader";

export class Home extends React.Component {
  componentWillMount() {
    this.props.fetchParagraphs();
  }

  render() {
    if (!this.props.paragraphs) {
      return <Loader loading={true} />;
    }

    return (
      <Layout
        paragraphs={this.props.paragraphs}
        currentUser={this.props.currentUser}
        editParagraphs={paragraphs => this.props.editParagraphs(paragraphs)}
        deleteParagraph={paragraphs => this.props.deleteParagraph(paragraphs)}
        addParagraph={paragraphs => this.props.addParagraph(paragraphs)}
      />
    );
  }
}

Home.propTypes = {
  paragraphs: PropTypes.array,
  currentUser: PropTypes.object,
  fetchParagraphs: PropTypes.func,
  editParagraphs: PropTypes.func,
  deleteParagraph: PropTypes.func,
  addParagraph: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
