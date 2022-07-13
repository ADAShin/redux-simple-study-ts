import { CounterActions, CounterActionType } from '../actions';

const counterReducer = (state = 0, action: CounterActions) => {
  switch (action.type) {
    case CounterActionType.INCREMENT:
      return state + action.payload;
    case CounterActionType.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
