export const inc = (data) => {
  return {
    type: "INC",
    data: data,
  };
};

export const dec = (data) => {
  return {
    type: "DEC",
    data: data,
  };
};
export const log = () => {
  return {
    type: "LOG",
  };
};

export const storename = (data) => {
  return {
    type: "ADD_NAME",
    data: data,
  };
};
export const removename = (id) => {
  return {
    type: "REMOVE_NAME",
    id: id,
  };
};
