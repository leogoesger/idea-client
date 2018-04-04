import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui-icons/Edit';
import DeleteIcon from 'material-ui-icons/Delete';
import Tooltip from 'material-ui/Tooltip';
import TextField from 'material-ui/TextField';

import {InputAdornment} from 'material-ui/Input';
import SaveIcon from 'material-ui-icons/Save';
import UndoIcon from 'material-ui-icons/Undo';

export default class Paragraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {edit: false, paragraph: null};
  }

  componentDidMount() {
    if (this.props.paragraph.includes('Lorem ipsum')) {
      this.setState({paragraph: this.props.paragraph, edit: true});
    }
    this.setState({paragraph: this.props.paragraph});
  }

  componentWillReceiveProps(nextProps) {
    this.setState({paragraph: nextProps.paragraph});
  }

  _handleTextChange(e) {
    this.setState({paragraph: e.target.value});
  }

  _handleEdit() {
    this.setState({edit: true});
  }

  _handleSave() {
    this.setState({edit: false});
    this.props.editParagraphs(this.state.paragraph, this.props.number);
  }

  _handleRedo() {
    this.setState({edit: false});
    this.setState({paragraph: this.props.paragraph});
  }

  _handleDelete() {
    this.props.deleteParagraph(this.props.number);
  }

  _renderBtns() {
    return (
      <span style={{marginLeft: '5px'}}>
        <Tooltip title="Edit">
          <IconButton style={styles.iconBtn} onClick={() => this._handleEdit()}>
            <EditIcon style={styles.editIcon} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton style={styles.iconBtn}>
            <DeleteIcon
              style={styles.editIcon}
              onClick={() => this._handleDelete()}
            />
          </IconButton>
        </Tooltip>
      </span>
    );
  }

  _renderText() {
    if (!this.state.edit) {
      return (
        <Typography variant="body1" component="div">
          {this.state.paragraph}
          {this._renderBtns()}
        </Typography>
      );
    }
    return (
      <TextField
        value={this.state.paragraph}
        multiline
        fullWidth
        autoFocus
        label="Edit"
        onChange={e => this._handleTextChange(e)}
        margin="normal"
        helperText="Click anywhere to save!"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" style={{}}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                }}
              >
                <Tooltip title="Undo Changes">
                  <IconButton
                    onClick={() => this._handleRedo()}
                    style={styles.iconBtn}
                  >
                    <UndoIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Save">
                  <IconButton
                    onClick={() => this._handleSave()}
                    style={styles.iconBtn}
                  >
                    <SaveIcon />
                  </IconButton>
                </Tooltip>
              </div>
            </InputAdornment>
          ),
        }}
      />
    );
  }
  render() {
    return <div>{this._renderText()}</div>;
  }
}

Paragraph.propTypes = {
  number: PropTypes.number,
  paragraph: PropTypes.string,
  editParagraphs: PropTypes.func,
  deleteParagraph: PropTypes.func,
};

const styles = {
  iconBtn: {
    height: '25px',
    width: '25px',
  },
  editIcon: {
    fontSize: 20,
    marginTop: '-5px',
  },
};
