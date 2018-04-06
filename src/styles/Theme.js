import {createMuiTheme} from 'material-ui/styles';
import red from 'material-ui/colors/red';

const Theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 35,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
      },
      label: {
        padding: '0 10px',
        color: 'white',
      },
      raised: {
        backgroundColor: red[400],
        '&:hover': {
          backgroundColor: red[700],
        },
      },
    },
    MuiTypography: {
      body1: {
        marginTop: '5px',
        lineHeight: '20px',
      },
      display1: {
        fontSize: '14px',
      },
    },
    MuiTab: {
      root: {},
      label: {
        color: 'white',
        fontWeight: '700',
      },
    },
    MuiTabs: {
      root: {
        boxShadow: 'none',
      },
      indicator: {
        height: '3px',
      },
    },
    MuiAppBar: {
      root: {backgroundColor: 'pink', boxShadow: 'none'},
      colorPrimary: {backgroundColor: red[400]},
    },
  },
});

export default Theme;
