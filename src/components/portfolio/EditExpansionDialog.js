import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Dialog, {DialogTitle} from 'material-ui/Dialog';
import {cloneDeep} from 'lodash';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';

import Paragraph from '../shared/Paragraph';

export default class EditServiceDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: null, subtitle: null};
  }

  componentDidMount() {
    this.setState({
      title: this.props.dataObject.title,
      subtitle: this.props.dataObject.subtitle,
    });
  }

  _editSubtitleObject(paragraph, index, attri) {
    const newData = cloneDeep(this.state.subtitle);
    newData[index][attri] = paragraph;

    this.setState({subtitle: newData});
  }

  _saveAction() {
    this.props.handleClose();
    this.props.saveObject(this.state);
  }

  _handleTextChange(e) {
    this.setState({title: e.target.value});
  }

  _addParagraph() {
    const newData = cloneDeep(this.state.subtitle);
    newData.push({
      title: 'New Data',
      url: 'http://google.com',
    });
    this.setState({subtitle: newData});
  }

  _renderSubtitles(subtitle) {
    if (!subtitle) {
      return null;
    }
    return subtitle.map((subtitle, index) => {
      return (
        <div key={index}>
          <Paragraph
            currentUser={this.props.currentUser}
            number={index}
            paragraph={subtitle.title}
            editParagraphs={(paragraph, index) =>
              this._editSubtitleObject(paragraph, index, 'title')
            }
            deleteParagraph={index => this._deleteParagraph(index)}
          >
            <span style={{padding: '10px 0px'}}>
              <a href={subtitle.url} target="_blank">
                {subtitle.title}
              </a>
            </span>
          </Paragraph>
          {this.props.currentUser &&
            subtitle.url && (
              <div>
                <Paragraph
                  currentUser={this.props.currentUser}
                  number={index}
                  paragraph={subtitle.url}
                  editParagraphs={(paragraph, index) =>
                    this._editSubtitleObject(paragraph, index, 'url')
                  }
                >
                  <span style={{paddingLeft: '20px', color: '#64b5f6'}}>
                    {subtitle.url}
                  </span>
                </Paragraph>
                <Divider />
              </div>
            )}
        </div>
      );
    });
  }

  _renderActionBtns() {
    return (
      <div
        style={{
          width: '95%',
          display: 'flex',
          justifyContent: 'space-between',
          margin: '10px auto 20px auto',
        }}
      >
        <div>
          <Button
            variant="flat"
            color="primary"
            onClick={() => this.props.handleClose()}
          >
            Cancel
          </Button>
        </div>
        <div>
          <Button
            variant="flat"
            color="primary"
            onClick={() => this._addParagraph()}
          >
            Add
          </Button>

          <Button
            style={{marginLeft: '10px'}}
            variant="raised"
            onClick={() => this._saveAction()}
          >
            Save
          </Button>
        </div>
      </div>
    );
  }

  render() {
    if (!this.props.dataObject) {
      return null;
    }
    return (
      <Dialog
        open={this.props.open}
        onClose={() => this.props.handleClose()}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          <TextField
            value={this.state.title}
            label="Title"
            fullWidth
            onChange={e => this._handleTextChange(e, null)}
          />
        </DialogTitle>
        <div
          style={{
            padding: '10px 30px 10px 30px',
            width: '500px',
            margin: '0 auto',
          }}
        >
          {this._renderSubtitles(this.state.subtitle)}
        </div>
        {this._renderActionBtns()}
      </Dialog>
    );
  }
}

EditServiceDialog.propTypes = {
  currentUser: PropTypes.object,
  dataObject: PropTypes.object,
  handleClose: PropTypes.func,
  saveObject: PropTypes.func,
  open: PropTypes.bool,
  number: PropTypes.number,
};
