import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Tabs, {Tab} from 'material-ui/Tabs'
import Button from 'material-ui/Button';

import Paragraph from './Paragraph'
import {Colors} from '../../styles';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0,
    };
  }

  _tabChange(v){
    console.log(v);
    this.setState({tab: v});
  }

  _renderParagraphs(paragraphs) {
    return paragraphs.map((paragraph, index) => (
      <Paragraph key={index} paragraph={paragraph} />
    ));
  }

  render() {
    const {tab} = this.state;
    return (
      <Paper
        className="col-lg-10 col-md-10 col-xs-10"
        style={styles.mainContainer}
      >
        <Typography variant="headline" component="h3">
          {'Contracts'}
        <Tabs value={tab} onChange={(e, v) => this._tabChange(v)}>
          <Tab label="State" />
          <Tab label="County" />
        </Tabs>
        </Typography>
        {tab === 0 && this._renderParagraphs(this.props.state)}
        {tab === 1 && this._renderParagraphs(this.props.county)}
        {}
        <div style={styles.btnContainer}>
          <Button variant="raised" style={styles.addBtn} size="small">
            {'Add New Paragraph'}
          </Button>
        </div>
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
  addBtn: {
    backgroundColor: Colors.red,
    color: 'white',
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '20px',
  },
};
