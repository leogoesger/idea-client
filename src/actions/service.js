import request from 'superagent';
import {ServiceTypes as types} from '../action-types';

const fetchServiceObjects = services => {
  return {
    type: types.FETCH_SERVICE_OBJECTS,
    services,
  };
};

const updateServiceObject = (service, serviceType) => {
  return {
    type: types.UPDATE_SERVICE_OBJECTS,
    service,
    serviceType,
  };
};

export function fetchServices() {
  return async dispatch => {
    const services = await request.get(
      `${process.env.SERVER_ADDRESS}/services`
    );
    dispatch(fetchServiceObjects(services.body));
  };
}

export function addService(services, serviceType) {
  return async dispatch => {
    const ideaJWT = window.localStorage.ideaJWT;
    await request
      .put(`${process.env.SERVER_ADDRESS}/services`)
      .send({[serviceType]: services})
      .set('ideaJWT', ideaJWT);
    dispatch(updateServiceObject(services, serviceType));
  };
}

export function editService(services, serviceType) {
  return async dispatch => {
    const ideaJWT = window.localStorage.ideaJWT;
    await request
      .put(`${process.env.SERVER_ADDRESS}/services`)
      .send({[serviceType]: services})
      .set('ideaJWT', ideaJWT);
    dispatch(updateServiceObject(services, serviceType));
  };
}

export function deleteService(services, serviceType) {
  return async dispatch => {
    const ideaJWT = window.localStorage.ideaJWT;
    await request
      .put(`${process.env.SERVER_ADDRESS}/services`)
      .send({[serviceType]: services})
      .set('ideaJWT', ideaJWT);
    dispatch(updateServiceObject(services, serviceType));
  };
}
