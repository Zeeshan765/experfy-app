export const getDataFromStorage = (name) => {
  return localStorage.getItem(name);
};

export const setDataToLocalstorage = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value));
};

export const deleteDataFromLocalStorage = (name) => {
  localStorage.removeItem(name);
};
export const parseDataFromString = (string) => {
  return JSON.parse(string);
};
