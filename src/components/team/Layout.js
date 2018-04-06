import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Card, {CardMedia, CardContent,} from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';
import MemberCard from './MemberCard';
import Button from 'material-ui/Button';
import {cloneDeep} from 'lodash';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selectedMember: null,
    };
  }

  handleOpen(member) {
    this.setState({open: true, selectedMember: member});
  }

  handleClose() {
    this.setState({open: false, selectedMember: null});
  }

  _addMember() {
    const updatedTeam = cloneDeep(this.props.members);
    updatedTeam.push({
      name: 'New Member',
      title: 'New Member',
      description: 'New Member',
      image: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
    });
    this.props.addMember(updatedTeam);
  }

  _renderBtn() {
    if (this.props.currentUser) {
      return (
        <div style={styles.btnContainer}>
          <Button
            variant="raised"
            size="small"
            onClick={() => this._addMember()}
          >
            {'Add New Member'}
          </Button>
        </div>
      );
    }
  }

  _renderMembers(members) {
    const styles = {
      card: {
        maxWidth: 245,
        cursor: 'pointer',
      },
      media: {
        height: 200,
      },
      header: {
        paddingTop: '0px', 
        paddingBottom: '12px', 
        backgroundColor: 'rgba(200, 200, 200, 0.5',
        position: 'relative',
        top: '75px',
      },
    };
    return members.map((member, index) => {
      return (
        <div
          key={index}
          className="row col-lg-4 col-md-4 col-sm-4 col-xs-12"
          style={{
            marginLeft: '0px',
            marginRight: '0px',
            marginBottom: '15px',
            height: '100%',
          }}
        >
          <Card
            style={styles.card}
            onClick={() => this.handleOpen(members[index])}
          >
            <CardMedia
              image={member.image}
              title={member.name}
              style={styles.media}
              >
            <CardContent style={styles.header}>
              <Typography variant="headline" component="h2">
                {member.name}
              </Typography>
              <Typography component="p">
                {member.title} 
              </Typography>
            </CardContent>
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
        <div className="row col-lg-10 col-md-10" style={{margin: '30px auto'}}>
          {this._renderMembers(this.props.members)}

          <Dialog
            open={this.state.open}
            onClose={() => this.handleClose()}
          >
            <MemberCard member={this.state.selectedMember} currentUser={this.props.currentUser}/>
          </Dialog>
          </div>
        {this._renderBtn()}
      </Paper>
    );
  }
}

Layout.propTypes = {
  members: PropTypes.array,
  currentUser: PropTypes.object,
  fetchUser: PropTypes.func,
  addMember: PropTypes.func,
};

const styles = {
  mainContainer: {
    height: '600px',
    paddingTop: '20px',
    overflow: 'scroll',
    paddingBottom: '20px',
  },
};
