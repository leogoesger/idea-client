import React from 'react';
import PropTypes from 'prop-types';
import Card, {CardMedia, CardContent,} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';

class MemberCard extends React.Component {
  render(){
    const styles = {
      card: {
        // width: 245,
        cursor: 'pointer',
      },
      media: {
        height: 200,
      },
      header: {
        paddingTop: '0px', 
        paddingBottom: '12px', 
        backgroundColor: 'rgba(200, 200, 200, 0.5',
      },
    };
    var {member, index, classes} = this.props;
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
          onClick={() => this.props.handleOpen(index)}
        >
          <CardMedia
            image={member.image}
            title={member.name}
            style={styles.media}
            className={classes.media}
            >
          <CardContent classes={{root: classes.content}}>
            <Typography variant="headline" component="h2" >
              {member.name}
            </Typography>
            <Typography component="p">
              {member.title} 
            </Typography>
          </CardContent>
          </CardMedia>
        </Card>
      </div>
    ) 
  }
}

MemberCard.propTypes = {
  member: PropTypes.object,
  index: PropTypes.number,
  handleOpen: PropTypes.func,
  classes: PropTypes.object,
};

const styles = {
  media: {
    backgroundSize: 'contain',
    display: 'flex',
  },
  content: {
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(232, 232, 232, 0.5)',
  }
};

export default withStyles(styles)(MemberCard);