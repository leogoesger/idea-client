import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import {withStyles} from 'material-ui/styles'

class Member extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullDescription: false,
      open: false,
    };
  }

  _handleMore() {
    this.setState({fullDescription: true});
  }

  _handleClick() {
    this.setState({open: true});
  }

  _handleRequestClose() {
    this.setState({open: false});
  }

  _renderDescription(description) {
    if (this.state.fullDescription) {
      return <div style={styles.description}>{description}</div>;
    } else if (description.length > 300 && !this.state.fullDescription) {
      return (
        <div style={styles.description}>
          {`${description.slice(0, 300)}...`}
          <br />
          <div style={styles.readMore} onClick={() => this._handleMore()}>
            Read More
          </div>
        </div>
      );
    } else {
      return <div style={styles.description}>{description}</div>;
    }
  }

  render() {
    const {classes} = this.props;
    if (!this.props.member) {
      return null;
    }
    const {member} = this.props;
    return (
      <div>
        <div style={styles.iconContainer}>
          <Avatar src={member.image} className={classes.bigAvatar} />
        </div>
        <div style={styles.infoContainer}>
          <div style={styles.name}>{member.name}</div>
          <div style={styles.title}>{`${member.title}`}</div>
          {this._renderDescription(member.description)}
        </div>
      </div>
    );
  }
}

Member.propTypes = {
  member: PropTypes.object,
  classes: PropTypes.object,
  currentUser: PropTypes.object,
};

const styles = {
  iconContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
  },
  infoContainer: {lineHeight: '20px', marginTop: '20px', marginBottom: '20px'},
  name: {fontSize: '20px', fontWeight: '600', lineHeight: '20px'},
  title: {marginTop: '5px'},
  description: {marginTop: '10px', fontSize: '14px'},
  readMore: {
    marginTop: '10px',
    cursor: 'pointer',
    fontSize: '12px',
    color: '#039be5',
  },
};

const avatarStyles = {
    row: {
      display: 'flex',
      justifyContent: 'center',
    },
    avatar: {
      margin: 10,
    },
    bigAvatar: {
      width: 200,
      height: 200,
    },
  };

export default withStyles(avatarStyles)(Member);