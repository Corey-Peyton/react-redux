/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable default-case */
const intstate = {
  user: [{ Id: 1, Name: "lol" }],
};

export default function (state = intstate, action) {
  console.log(state);
  console.log(intstate);

  switch (action.type) {
    case "ADD_NAME":
      return {
        ...state,
        intstate: action.data,
      };
    case "REMOVE_NAME":
      return {
        ...state,
        intstate: state.intstate.filter(
          (tempName) => tempName.Id !== action.id
        ),
      };
    default:
      return state;
  }
}
