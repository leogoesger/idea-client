import React from 'react';
import Typography from 'material-ui/Typography';
import Colors from '../../styles/Colors';

import CompanyLogo from '../../static/logo.png';

const Logo = () => {
  return (
    <div style={styles.logoContainer}>
      <div style={styles.imgContainer}>
        <img src={CompanyLogo} height="72" width="72" />
      </div>
      <div>
        <div style={styles.companyName}>
          <Typography
            gutterBottom
            variant="headline"
            component="h1"
            style={{fontSize: '30px'}}
          >
            {'I.D.E.A Consulting'}
          </Typography>
        </div>

        <Typography component="p" style={{fontSize: '18px'}}>
          {'Innovative Development & Evaluation Associates'}
        </Typography>
      </div>
    </div>
  );
};

const styles = {
  logoContainer: {
    position: 'absolute',
    top: '-120px',
    left: '0px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  imgContainer: {
    margin: '10px 15px 0px 0px',
  },
  companyName: {
    width: '480px',
    borderBottomWidth: '3px',
    borderBottomStyle: 'solid',
    borderBottomColor: Colors.red,
    marginBottom: '10px',
  },
};

export default Logo;
