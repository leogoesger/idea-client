import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      open: false,
    };
  }

  render() {
    return (
      <Paper
        className="col-lg-10 col-md-10 col-xs-10"
        style={styles.mainContainer}
      >
        <Typography variant="headline" component="h3">
          {'Service'}
        </Typography>
      </Paper>
    );
  }
}

Layout.propTypes = {
  error: PropTypes.string,
  users: PropTypes.array,
  createUser: PropTypes.func,
  createUserError: PropTypes.func,
  fetchingStatus: PropTypes.bool,
  currentUser: PropTypes.object,
  fetchUser: PropTypes.func,
};

const styles = {
  mainContainer: {
    minHeight: '600px',
    paddingTop: '20px',
  },
};
