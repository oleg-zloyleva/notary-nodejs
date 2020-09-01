import axios from 'axios';

export const loadState = () => {
  console.log('loadState');
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  console.log('save to localStorage');
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.error('error save State');
  }
};

export const clearState = async () => {
  console.log('clear localStorage');
  await localStorage.removeItem('state');
};

const fetchData = (options = {}) => {
  const { headers, ...passOptions } = options;

  return new Promise((resolve, reject) => {
    return axios({
      ...passOptions,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...headers,
      },
    })
      .then((res) => ((res.status >= 200 && res.status < 300) ? resolve(res.data) : reject(res)))
      .catch((err) => {
        console.error('fetchData error', err.response);
        return reject(err);
      });
  });
};

export const authAjaxQuery = async ({ method, url, data }) => {
  // eslint-disable-next-line global-require
  const { store } = require('../storeConfig');
  const { token } = store.getState().user;

  return fetchData({
    method,
    url: `${process.env.REACT_APP_DOMAIN}/${url}`,
    data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    responseType: 'json',
  });
};
