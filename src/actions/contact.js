import request from 'superagent';
import {ContactTypes as types} from '../action-types';

const updateParagraphObjects = paragraphs => {
  return {
    type: types.UPDATE_PARAGRAPH_OBJECTS,
    paragraphs,
  };
};

export function fetchParagraphs() {
  return async dispatch => {
    const paragraphs = await request.get(
      `${process.env.SERVER_ADDRESS}/contacts`
    );
    dispatch(updateParagraphObjects(paragraphs.body));
  };
}

export function editParagraphs(paragraphs) {
  return async dispatch => {
    const ideaJWT = window.localStorage.ideaJWT;
    const response = await request
      .put(`${process.env.SERVER_ADDRESS}/contacts`)
      .send({contact: paragraphs})
      .set('ideaJWT', ideaJWT);
    dispatch(updateParagraphObjects(response.body.contact));
  };
}
