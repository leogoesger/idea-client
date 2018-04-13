import request from 'superagent';

import {HomeTypes as types} from '../action-types';

const updateParagraphObjects = paragraphs => {
  return {
    type: types.UPDATE_PARAGRAPH_OBJECTS,
    paragraphs,
  };
};

export function fetchParagraphs() {
  return async dispatch => {
    const paragraphs = await request.get(`${process.env.SERVER_ADDRESS}/homes`);
    dispatch(updateParagraphObjects(paragraphs.body));
  };
}

export function editParagraphs(paragraphs) {
  return async dispatch => {
    const response = await request
      .put(`${process.env.SERVER_ADDRESS}/homes`)
      .send({home: paragraphs});
    dispatch(updateParagraphObjects(response.body.home));
  };
}

export function deleteParagraph(paragraphs) {
  return async dispatch => {
    const response = await request
      .put(`${process.env.SERVER_ADDRESS}/homes`)
      .send({home: paragraphs});
    dispatch(updateParagraphObjects(response.body.home));
  };
}

export function addParagraph(paragraphs) {
  return async dispatch => {
    const response = await request
      .put(`${process.env.SERVER_ADDRESS}/homes`)
      .send({home: paragraphs});
    dispatch(updateParagraphObjects(response.body.home));
  };
}
