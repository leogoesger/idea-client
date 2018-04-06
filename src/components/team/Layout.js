import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Card, {CardMedia, CardHeader, CardContent} from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';
import CompanyLogo from '../../static/logo.png';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleOpen(member) {
    this.setState({open: true, selectedMember: member});
  }

  handleClose() {
    this.setState({open: false, selectedMember: null});
  }

  _renderMembers(members) {
    return members.map((member, index) => {
      return (
        <div
          key={member.name}
          className="row col-lg-3 col-md-3 col-sm-3 col-xs-12"
          style={{
            marginLeft: '0px',
            marginRight: '0px',
            marginBottom: '30px',
            height: '100%',
          }}
        >
          <Card
            style={{cursor: 'pointer'}}
            onClick={() => this.handleOpen(members[index])}
          >
            <CardMedia
              image={'../../static/logo.png'}
              >
                <CardHeader
                  title={member.name}
                  subheader={member.title}
                />
            </CardMedia>
          </Card>
        </div>
      );
    });
  }


  render() {
    return (
      <Paper
        className="col-lg-10 col-md-10 col-xs-10"
        style={styles.mainContainer}
      >
        <Typography variant="headline" component="h3">
          {'Team'}
        </Typography>
        <div className="row col-lg-8 col-md-8" style={{margin: '120px auto'}}>
        {this._renderMembers(this.props.members)}
        </div>
      </Paper>
    );
  }
}

Layout.propTypes = {
  members: PropTypes.array,
  currentUser: PropTypes.object,
  fetchUser: PropTypes.func,
};

const styles = {
  mainContainer: {
    minHeight: '600px',
    paddingTop: '20px',
  },
};
