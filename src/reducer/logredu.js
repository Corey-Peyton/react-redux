/* eslint-disable default-case */
const isLogged = (state = false, action) => {
  switch (action.type) {
    case "LOG":
      return !state;

    default:
      return state;
  }
};

export default isLogged;
