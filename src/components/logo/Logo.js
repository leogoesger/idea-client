import React from 'react';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';

import {navigateTo} from '../../utils/helpers';
import CompanyLogo from '../../static/logo.png';

const Logo = () => {
  return (
    <div style={styles.logoContainer} onClick={() => navigateTo('/')}>
      <div style={styles.imgContainer}>
        <img src={CompanyLogo} height="72" width="72" />
      </div>
      <div style={{marginTop: '5px'}}>
        <div style={styles.companyName}>
          <Typography
            gutterBottom
            variant="headline"
            component="h1"
            style={{
              fontSize: '30px',
              fontFamily: 'Georgia, serif',
              fontWeight: '800',
              marginBottom: '3px',
            }}
          >
            {'I.D.E.A. Consulting'}
          </Typography>
        </div>

        <Typography
          component="p"
          style={{fontSize: '20px', fontFamily: 'Arial, Helvetica, sans-serif'}}
        >
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
    cursor: 'pointer',
  },
  imgContainer: {
    margin: '10px 15px 0px 0px',
  },
  companyName: {
    width: '480px',
    borderBottomWidth: '3px',
    borderBottomStyle: 'solid',
    borderBottomColor: red[400],
    marginBottom: '10px',
  },
};

export default Logo;
