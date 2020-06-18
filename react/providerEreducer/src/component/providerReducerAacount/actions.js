import * as countType from "./type";

export const INCREMENT = inputValue => {
  return {
    type: countType.INCREMENT,
    payload: {
      value: +inputValue
    }
  };
};

export const CLEAN = { type: countType.CLEAN };
