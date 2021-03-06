export const AUTH_SET_PASSWORD = "AUTH_SET_PASSWORD";
export const AUTH_SET_SECOND_PASSWORD = "AUTH_SET_SECOND_PASSWORD";
export const AUTH_SET_IS_PASSWORD_VALID = "AUTH_SET_IS_PASSWORD_VALID";
export const AUTH_SET_IS_PASSWORD_MATCH_TO_SECOND_PASSWORD =
  "AUTH_SET_IS_PASSWORD_MATCH_TO_SECOND_PASSWORD";
export const AUTH_SET_PHOTO = "AUTH_SET_PHOTO";
export const AUTH_UPDATE_FLOW_STEP = "AUTH_UPDATE_FLOW_STEP";

export interface AuthUpdateFlowStep {
  type: typeof AUTH_UPDATE_FLOW_STEP;
  flowStep: 1 | 2;
}
interface setPassword {
  password: string;
}

export interface AuthSetPassword extends setPassword {
  type: typeof AUTH_SET_PASSWORD;
}

export interface AuthSetSecondPassword extends setPassword {
  type: typeof AUTH_SET_SECOND_PASSWORD;
}

export interface AuthSetIsPasswordValid {
  type: typeof AUTH_SET_IS_PASSWORD_VALID;
  isValid: boolean;
}

export interface AuthSetIsPasswordMatchToSecondPass {
  type: typeof AUTH_SET_IS_PASSWORD_MATCH_TO_SECOND_PASSWORD;
  isMatch: boolean;
}

export interface AuthSetPhoto {
  type: typeof AUTH_SET_PHOTO;
  photo: any;
}

export type AuthActionTypes =
  | AuthSetPassword
  | AuthSetSecondPassword
  | AuthSetIsPasswordMatchToSecondPass
  | AuthSetPhoto
  | AuthSetIsPasswordValid
  | AuthUpdateFlowStep;
