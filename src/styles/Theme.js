import {createMuiTheme} from 'material-ui/styles';
import red from 'material-ui/colors/red';

const Theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 3,
        border: 0,
        height: 35,
        padding: '0 30px',
      },
      raised: {
        backgroundColor: red[400],
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
        color: 'white',
        '&:hover': {
          backgroundColor: red[700],
        },
      },

      flatPrimary: {
        color: red[400],
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
      title: {
        fontSize: '16px',
        fontWeight: '500',
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
    MuiExpansionPanelDetails: {
      root: {display: ''},
    },
  },
});

export default Theme;
