import {HomeTypes as types} from '../action-types';

const updateParagraphObjects = paragraphs => {
  return {
    type: types.UPDATE_PARAGRAPH_OBJECTS,
    paragraphs,
  };
};

export function fetchParagraphs() {
  return dispatch => {
    const paragraphs = [
      'I.D.E.A. Consulting provides exemplary leadership to county and state-level systems, assisting them in designing programs, evaluating services, complying with federal and state regulations, and transforming systems to achieve positive outcomes. In addition to working with large systems (e.g., California Department of Mental Health), we also have extensive experience working with rural and frontier counties and states to help them effectively deliver a comprehensive array of services with limited resources.',
      'We have over twenty years of experience in developing outcome measures and performance indicators. We are experts in analyzing statewide and county data and producing effective decision support tools to inform managers, providers, staff, clients, families, and other stakeholders. We analyze and utilize data to develop models for understanding access, quality, cost-effectiveness, and outcomes for mental health and substance abuse service systems.',
      'We collaborate with our clients to transform mental health and substance abuse services into strengths-and recovery-based systems. We assist our partners in improving client access, service quality, and cost-effectiveness. We deliver effective tools and information to support management decision-making and promote positive system change.',
    ];
    dispatch(updateParagraphObjects(paragraphs));
  };
}

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
