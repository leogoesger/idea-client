import {ContactTypes as types} from '../action-types';
import objectAssign from 'object-assign';

type STATE = {};
type ACTION = {};
const initialState: STATE = {
  paragraphs: null,
};

export default function(state: STATE = initialState, action: ACTION) {
  switch (action.type) {
    case types.UPDATE_PARAGRAPH_OBJECTS:
      return objectAssign({}, state, {paragraphs: action.paragraphs});

    default:
      return state;
  }
}
