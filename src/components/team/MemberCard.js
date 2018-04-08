import React from 'react';
import PropTypes from 'prop-types';
import Card, {CardMedia, CardContent} from 'material-ui/Card';
import Typography from 'material-ui/Typography';

class MemberCard extends React.Component {
  render() {
    var {member, index} = this.props;
    return (
      <div
        key={index}
        className="row col-lg-4 col-md-4 col-sm-4 col-xs-12"
        style={styles.container}
      >
        <Card
          onClick={() => this.props.handleOpen(index)}
          style={{height: '200px', width: '200px'}}
        >
          <CardMedia image={member.image} style={styles.media}>
            <CardContent style={styles.content}>
              <Typography
                variant="headline"
                component="h2"
                style={{fontSize: '16px'}}
              >
                {member.name}
              </Typography>
              <Typography
                component="p"
                style={{fontSize: '12px', color: '#404448'}}
              >
                {member.title}
              </Typography>
            </CardContent>
          </CardMedia>
        </Card>
      </div>
    );
  }
}

MemberCard.propTypes = {
  member: PropTypes.object,
  index: PropTypes.number,
  handleOpen: PropTypes.func,
  classes: PropTypes.object,
};

const styles = {
  container: {
    margin: '0px 0px 30px 0px',
    height: '100%',
    cursor: 'pointer',
  },
  media: {
    height: '200px',
    width: '200px',
    display: 'flex',
    alignItems: 'flex-end',
  },
  content: {
    width: '100%',
    backgroundColor: 'rgba(232, 232, 232, 0.5)',
    padding: '10px',
  },
};

export default MemberCard;
