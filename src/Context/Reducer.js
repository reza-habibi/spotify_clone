export const initialState = {
  user: null,
  playList: [],
  playing: false,
  item: null,
  token:
    "BQCsW4cFxbz7muiDnt1E2DAnCCGiczh6VCYn3T8T31VIt5HGZ-nesGDyWbAQAAv7NpPVDwmuVXr4s9wCItBHh_jr9IpmuRp0gxOvRIxt5EL8BulAMrVNXPuiayYajz63pdlc4RampV3wve4IKRb1Jtju4F8TeSpeCEe8ZxLcyP-sZVeW5_o",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default reducer;
