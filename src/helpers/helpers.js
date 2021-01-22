import axios from 'axios';

const headers = {
  'Content-Type': 'application/json;charset=UTF-8',
  'Access-Control-Allow-Origin': '*'
};

const API_BASEURL = 'http://localhost:8000/';

export const isDefined = (obj, column) => {
  return obj && Object.prototype.hasOwnProperty.call(obj, column) ? obj : false;
};

export const isEmpty = (obj) => { return typeof obj !== 'undefined' && obj !== null ? obj : false; };

export const isValid = (obj) => { return !!(typeof obj !== 'undefined' && obj !== null); };

export const setLocalStorage = (obj) => {
  Object.keys(obj).forEach((key) => {
    const setData = typeof obj[key] === 'object' ? JSON.stringify(obj[key]) : obj[key];
    return localStorage.setItem(key, setData);
  });
};

export const getLocalStorage = (key) => { return localStorage.getItem(key); };

export const getPost = (url, data) => {
  const TOKEN = getLocalStorage('_token');
  if (TOKEN) {
    headers.Authorization = `Bearer ${TOKEN}`;
  }

  return new Promise(
    (resolve, reject) => {
      axios.post(`${API_BASEURL}${url}`, data, { headers })
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    }
  );
};
