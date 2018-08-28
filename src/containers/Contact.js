import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchParagraphs, editParagraphs } from "../actions/contact";

import Layout from "../components/contact/Layout";
import Loader from "../components/shared/Loader";

export class Contact extends React.Component {
  componentDidMount() {
    document.title = "Innovative Development & Evaluation Associates - Contact";
    document.getElementsByTagName("META")[3].content =
      "I.D.E.A. Consulting provides exemplary leadership to county and state-level systems, assisting them in designing programs, evaluating services, complying with federal and state regulations, and transforming systems to achieve positive outcomes.";
    this.props.fetchParagraphs();
  }

  render() {
    if (!this.props.paragraphs) {
      return <Loader loading={true} />;
    }

    return (
      <Layout
        currentUser={this.props.currentUser}
        paragraphs={this.props.paragraphs}
        editParagraphs={paragraphs => this.props.editParagraphs(paragraphs)}
      />
    );
  }
}

Contact.propTypes = {
  paragraphs: PropTypes.array,
  fetchParagraphs: PropTypes.func,
  editParagraphs: PropTypes.func,
  currentUser: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    paragraphs: state.home.paragraphs,
    currentUser: state.user.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchParagraphs: () => dispatch(fetchParagraphs()),
    editParagraphs: paragraphs => dispatch(editParagraphs(paragraphs)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);
