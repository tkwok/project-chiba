import { SIGNED_IN, SET_GOALS } from '../constants';

let user = {
  email: null
};

export default (state = user, action) => {
  switch(action.type) {
    case SIGNED_IN:
      const { email } = action;
      user = {
        email
      };
      return user;
    default:
      return state;
  }
};

export function setGoals(goals) {
  const action = {
    type: SET_GOALS,
    goals
  };
  return action;
}
