import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Tabs, {Tab} from 'material-ui/Tabs';
import Button from 'material-ui/Button';
import yellow from 'material-ui/colors/yellow';

import ContactForm from '../shared/ContactForm';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0,
      open: false,
    };
  }

  _handleClose() {
    this.setState({open: false});
  }

  _tabChange(v) {
    this.setState({tab: v});
  }

  _renderBtn() {
    if (!this.props.currentUser) {
      return (
        <div style={styles.btnContainer}>
          <Button
            variant="raised"
            size="small"
            onClick={() => this.setState({open: true})}
          >
            {'Contact Us'}
          </Button>
        </div>
      );
    }
    return (
      <div style={styles.btnContainer}>
        <Button
          variant="raised"
          size="small"
          onClick={() => this._addParagraph()}
        >
          {'Add New Contract'}
        </Button>
      </div>
    );
  }

  render() {
    return (
      <Paper
        className="col-lg-10 col-md-10 col-xs-10"
        style={styles.mainContainer}
      >
        <Paper style={{minHeight: '500px'}}>
          <AppBar position="static" color="primary">
            <Tabs
              value={this.state.tab}
              onChange={(e, v) => this._tabChange(v)}
              indicatorColor={yellow[700]}
              fullWidth
            >
              <Tab label="Overview" />
              <Tab label="State" />
              <Tab label="County" />
            </Tabs>
          </AppBar>
          {this._renderBtn()}
        </Paper>
        <ContactForm
          open={this.state.open}
          handleClose={() => this._handleClose()}
        />
      </Paper>
    );
  }
}

Layout.propTypes = {
  addService: PropTypes.func,
  editService: PropTypes.func,
  deleteService: PropTypes.func,
  stateServices: PropTypes.object,
  overviewServices: PropTypes.object,
  countyServices: PropTypes.object,
  currentUser: PropTypes.object,
};

const styles = {
  mainContainer: {
    height: '600px',
    paddingTop: '20px',
    overflow: 'scroll',
    paddingBottom: '20px',
  },

  btnContainer: {
    display: 'flex',
    justifyContent: 'space-around',
  },
};
