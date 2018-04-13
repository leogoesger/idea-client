import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import MemberDialog from './MemberDialog';
import MemberCard from './MemberCard';
import Button from 'material-ui/Button';
import {cloneDeep} from 'lodash';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      memberIndex: null,
    };
  }

  handleOpen(index) {
    this.setState({open: true, memberIndex: index});
  }

  handleClose() {
    this.setState({open: false, memberIndex: null});
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

  _editMember(member, index) {
    const updatedTeam = cloneDeep(this.props.members);
    updatedTeam[index] = member;
    this.props.editMember(updatedTeam);
  }

  _deleteMember(index) {
    this.setState({open: false, memberIndex: null});
    const updatedTeam = cloneDeep(this.props.members);
    updatedTeam.splice(index, 1);
    this.props.deleteMember(updatedTeam);
  }

  _renderBtn() {
    if (this.props.currentUser) {
      return (
        <div style={styles.btnContainer}>
          <Button
            variant="flat"
            color="primary"
            onClick={() => this._addMember()}
          >
            {'Add New Member'}
          </Button>
        </div>
      );
    }
  }

  _renderMembers(members) {
    return members.map((member, index) => {
      return (
        <MemberCard
          member={member}
          index={index}
          key={index}
          handleOpen={index => this.handleOpen(index)}
        />
      );
    });
  }

  render() {
    return (
      <Paper
        className="col-lg-10 col-md-10 col-xs-10"
        style={styles.mainContainer}
      >
        <div className="row col-lg-10 col-md-10" style={{margin: '30px auto'}}>
          {this._renderMembers(this.props.members)}

          <Dialog open={this.state.open} onClose={() => this.handleClose()}>
            {this.state.open && (
              <MemberDialog
                member={this.props.members[this.state.memberIndex]}
                currentUser={this.props.currentUser}
                memberIndex={this.state.memberIndex}
                editMember={(member, index) => this._editMember(member, index)}
                deleteMember={index => this._deleteMember(index)}
              />
            )}
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
  editMember: PropTypes.func,
  deleteMember: PropTypes.func,
};

const styles = {
  mainContainer: {
    height: '600px',
    paddingTop: '20px',
    overflow: 'auto',
    paddingBottom: '20px',
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'space-around',
  },
};
