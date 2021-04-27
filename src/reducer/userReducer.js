/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable default-case */
const intstate = {
  user: [{ Id: "1", Name: "Trupesh", Age: "22" }],
};

export default function (state = intstate, action) {
  console.log(state);
  console.log(intstate);

  switch (action.type) {
    case "ADD_NAME":
      return {
        ...state,
        user: [...state.user, action.data],
      };
    case "REMOVE_NAME":
      return {
        ...state,
        user: state.user.filter((tempName) => tempName.Id !== action.id),
      };
    default:
      return state;
  }
}
