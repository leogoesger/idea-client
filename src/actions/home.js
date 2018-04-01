import {HomeTypes as types} from '../action-types';

const fetchParagraphObjects = paragraphs => {
  return {
    type: types.FEATCH_PARAGRAPH_OBJECTS,
    paragraphs,
  };
};

export function fetchParagraphs(paragraphs) {
  return dispatch => {
    dispatch(fetchParagraphObjects(paragraphs));
  };
}
