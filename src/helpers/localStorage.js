/* eslint-disable no-undef */


export function getOMDB() {
  return localStorage.getItem('omdb') ? JSON.parse(localStorage.getItem('omdb')) : undefined;
}

export function setOMDB(user) {
  return localStorage.setItem('omdb', JSON.stringify(user));
}

export function clearOMDB() {
  localStorage.removeItem('omdb');
}