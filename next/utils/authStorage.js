export let authToken = '';
export const changeAuthToken = (token) => {
  authToken = token;
};
export const getAuthToken = () => {
  return authToken;
};
