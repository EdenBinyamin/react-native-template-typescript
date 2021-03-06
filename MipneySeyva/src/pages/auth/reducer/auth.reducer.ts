import {
  AuthActionTypes,
  AUTH_SET_PASSWORD,
  AUTH_SET_SECOND_PASSWORD,
  AUTH_SET_PHOTO,
  AUTH_SET_IS_PASSWORD_VALID,
  AUTH_SET_IS_PASSWORD_MATCH_TO_SECOND_PASSWORD,
  AUTH_UPDATE_FLOW_STEP,
} from "../actionTypes/auth.actionTypes";

interface AuthReducer {
  password: string;
  secondPassword: string;
  profilePhoto: any;
  isPasswordValid: boolean;
  isPasswordMatchToSecondPassword: boolean;
  flowStep: 1 | 2;
}

export const INITIAL_STATE: AuthReducer = {
  password: "",
  secondPassword: "",
  profilePhoto: {},
  isPasswordValid: false,
  isPasswordMatchToSecondPassword: false,
  flowStep: 1,
};

export default (
  state: AuthReducer = INITIAL_STATE,
  action: AuthActionTypes
): AuthReducer => {
  switch (action.type) {
    case AUTH_SET_PASSWORD: {
      return {
        ...state,
        password: action.password,
      };
    }
    case AUTH_SET_SECOND_PASSWORD: {
      return {
        ...state,
        secondPassword: action.password,
      };
    }
    case AUTH_SET_PHOTO: {
      return {
        ...state,
        profilePhoto: action.photo,
      };
    }
    case AUTH_SET_IS_PASSWORD_VALID: {
      return {
        ...state,
        isPasswordValid: action.isValid,
      };
    }
    case AUTH_SET_IS_PASSWORD_MATCH_TO_SECOND_PASSWORD: {
      return {
        ...state,
        isPasswordMatchToSecondPassword: action.isMatch,
      };
    }
    case AUTH_UPDATE_FLOW_STEP: {
      return {
        ...state,
        flowStep: action.flowStep,
      };
    }
    default:
      return state;
  }
};
