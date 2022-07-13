import { IsLoginActions, LoginActionType } from '../actions';

const isLoginReducer = (state = false, action: IsLoginActions) => {
  switch (action.type) {
    case LoginActionType.LOGIN:
      return !state;
    default:
      return state;
  }
};

export default isLoginReducer;
