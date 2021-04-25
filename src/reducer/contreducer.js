/* eslint-disable default-case */
const countreducer = (state = 0, action) => {
  // console.log(state);
  switch (action.type) {
    case "INC":
      return state + action.data;

    case "DEC":
      return state - action.data;

    default:
      return state;
  }
};

export default countreducer;
