import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import {withStyles} from 'material-ui/styles'
import {cloneDeep} from 'lodash';
import Paragraph from '../shared/Paragraph'

class MemberDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullDescription: false,
    };
  }

  _handleMore() {
    this.setState({fullDescription: true});
  }

  _indexToValue(index){
    switch(index){
      case 0:
        return 'name';
      case 1:
        return 'title';
      case 2:
        return 'description';
      case 3:
        return 'image';
    }
  }

  _editMember(member, index){
    index = this._indexToValue(index);
    const updatedMember = cloneDeep(this.props.member);
    updatedMember[index] = member;
    this.props.editMember(updatedMember, this.props.memberIndex);
  }

  _renderDescriptionParagraph(description){
    return (
      <Paragraph
        currentUser={this.props.currentUser}
        number={2}
        paragraph={description}
        multiline={true}
        editParagraphs={(paragraph, index) => 
          this._editMember(paragraph, index)
        }
      >
        <div style={styles.description}>{description}</div>
    </Paragraph>
    );
  }

  _renderDescription(description) {
    if (this.state.fullDescription) {
      return (
        <div style={styles.description}>
          {this._renderDescriptionParagraph(description)}
        </div>
      );
    } else if (description.length > 300 && !this.state.fullDescription) {
      return (
        <div style={styles.description}>
          {this._renderDescriptionParagraph(description)}
          <br />
          <div style={styles.readMore} onClick={() => this._handleMore()}>
            Read More
          </div>
        </div>
      );
    } else {
      return (
      <div style={styles.description}>
        {this._renderDescriptionParagraph(description)}
      </div>
      );
    }
  }

  render() {
    const {classes} = this.props;
    if (!this.props.member) {
      return null;
    }
    const {member} = this.props;
    return (
      <div style={{width: '600px'}}>
        <div style={styles.iconContainer}>
          <Avatar src={member.image} className={classes.bigAvatar} />
        </div>
          <Paragraph
            currentUser={this.props.currentUser}
            number={3}
            paragraph={member.image}
            editParagraphs={(paragraph, index) => 
              this._editMember(paragraph, index)
            }
          />
        <div style={styles.infoContainer}>
            <Paragraph
              currentUser={this.props.currentUser}
              number={0}
              paragraph={member.name}
              editParagraphs={(paragraph, index) => 
                this._editMember(paragraph, index)
              }
            >
              <div style={styles.name}>{member.name}</div>
            </Paragraph>        
            <Paragraph
              currentUser={this.props.currentUser}
              number={0}
              paragraph={member.name}
              editParagraphs={(paragraph, index) => 
                this._editMember(paragraph, index)
              }
            >
              <div style={styles.title}>{`${member.title}`}</div>
            </Paragraph>
          {this._renderDescription(member.description)}
        </div>
      </div>
    );
  }
}

MemberDialog.propTypes = {
  member: PropTypes.object,
  memberIndex: PropTypes.number,
  classes: PropTypes.object,
  currentUser: PropTypes.object,
  editMember: PropTypes.func
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

export default withStyles(avatarStyles)(MemberDialog);