import * as actionTypes from "./actionTypes";

export const increaseCounter = () => ({
  type: actionTypes.INCREASE_COUNTER,
  payload: 1,
});

export const decreaseCounter = () => ({
  type: actionTypes.DECREASE_COUNTER,
  payload: 1,
});

export const increaseByTwo = () => ({
  type: actionTypes.INCREASE_BY_TWO,
  payload: 2,
});

export const decreaseByTwo = () => ({
  type: actionTypes.DECREASE_BY_TWO,
  payload: 2,
});
