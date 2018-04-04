import {ContactTypes as types} from '../action-types';

const updateParagraphObjects = paragraphs => {
  return {
    type: types.UPDATE_PARAGRAPH_OBJECTS,
    paragraphs,
  };
};

export function fetchParagraphs() {
  return dispatch => {
    const paragraphs = [
        'Nancy M. Callahan, Ph.D.',
        'IDEA Consulting',
        '2108 Alameda Avenue',
        'Davis, CA  95616-3006',
        'ncallahan.idea@gmail.com',
        
        '530-758-8815',
        '530-231-5663 (Fax)',
    ];
    dispatch(updateParagraphObjects(paragraphs));
  };
}

export function editParagraphs(paragraphs) {
    return dispatch => {
      dispatch(updateParagraphObjects(paragraphs));
    };
  }