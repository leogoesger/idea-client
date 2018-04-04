import {ServiceTypes as types} from '../action-types';

const updateParagraphObjects = paragraphs => {
  return {
    type: types.UPDATE_PARAGRAPH_OBJECTS,
    paragraphs,
  };
};

export function editParagraphs(paragraphs) {
  return dispatch => {
    dispatch(updateParagraphObjects(paragraphs));
  };
}

export function deleteParagraph(paragraphs) {
  return dispatch => {
    dispatch(updateParagraphObjects(paragraphs));
  };
}

export function addParagraph(paragraphs) {
  return dispatch => {
    dispatch(updateParagraphObjects(paragraphs));
  };
}
