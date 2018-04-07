import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Select from 'material-ui/Select';
import {MenuItem} from 'material-ui/Menu';

import Portfolio from './Portfolio';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  componentDidMount() {
    this.setState({value: 'policiesAndProcedures'});
  }

  _handleChange(event) {
    this.setState({value: event.target.value});
  }

  _renderMenuItem() {
    return Object.keys(this.props.data).map((key, index) => {
      if (this.props.data[key]) {
        return (
          <MenuItem key={index} value={key}>
            {this.props.data[key].name}
          </MenuItem>
        );
      }
      return null;
    });
  }

  render() {
    return (
      <Paper
        className="col-lg-10 col-md-10 col-xs-10"
        style={styles.mainContainer}
      >
        <Paper style={{height: '550px', overflow: 'scroll'}}>
          <AppBar position="static" color="primary" style={{height: '48px'}}>
            <Select
              value={this.state.value}
              onChange={e => this._handleChange(e)}
              style={{marginTop: '10px', width: '80%', margin: '10px auto'}}
            >
              {this._renderMenuItem()}
            </Select>
          </AppBar>
          <Portfolio
            portfolioData={this.props.data[this.state.value]}
            currentUser={this.props.currentUser}
            currentSelect={this.state.value}
            addPortfolio={(service, serviceType) =>
              this.props.addPortfolio(service, serviceType)
            }
            editPortfolio={(service, serviceType) =>
              this.props.editPortfolio(service, serviceType)
            }
            deletePortfolio={(service, serviceType) =>
              this.props.deletePortfolio(service, serviceType)
            }
          />
        </Paper>
      </Paper>
    );
  }
}

Layout.propTypes = {
  currentUser: PropTypes.object,
  data: PropTypes.object,
  addPortfolio: PropTypes.func,
  editPortfolio: PropTypes.func,
  deletePortfolio: PropTypes.func,
};

const styles = {
  mainContainer: {
    minHeight: '600px',
    paddingTop: '20px',
  },
};
