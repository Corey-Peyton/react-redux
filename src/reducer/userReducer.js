/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable default-case */
const intstate = {
  user: [{ Id: "1", Name: "Trupesh", Age: "22" }],
};

export default function (state = intstate, action) {
  // console.log(state);
  console.log(action.id);

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
    case "UPDATE_USER":
      return {
        ...state,
        user: state.user.map((tempName) =>
          tempName.Id !== action.id ? [{ Name: action.id.namev }] : state
        ),
      };
    default:
      return state;
  }
}
