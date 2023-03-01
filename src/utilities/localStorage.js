export const getDataFromStorage = (name) => {
  return localStorage.getItem(name);
};

export const setDataToLocalstorage = (name, value) => {
  localStorage.setItem(name, value);
};

export const deleteDataFromLocalStorage = (name) => {
  localStorage.removeItem(name);
};
export const parseDataFromString = (string) => {
  return JSON.parse(string);
};
