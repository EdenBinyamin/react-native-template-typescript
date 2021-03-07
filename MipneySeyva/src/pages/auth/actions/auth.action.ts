import { store } from "../../../store";
import {
  AuthSetPassword,
  AuthSetSecondPassword,
  AUTH_SET_PASSWORD,
  AUTH_SET_SECOND_PASSWORD,
  AuthSetIsPasswordValid,
  AUTH_SET_IS_PASSWORD_VALID,
  AuthSetIsPasswordMatchToSecondPass,
  AUTH_SET_IS_PASSWORD_MATCH_TO_SECOND_PASSWORD,
  AuthSetPhoto,
  AUTH_SET_PHOTO,
  AUTH_UPDATE_FLOW_STEP,
  AuthUpdateFlowStep,
  AuthSetIsSettingsOpen,
  AUTH_SET_IS_SETTINGS_OPEN,
} from "../actionTypes/auth.actionTypes";

export const authSetPasswordAction = (password: string): AuthSetPassword => ({
  type: AUTH_SET_PASSWORD,
  password,
});
export const authSetSecondPasswordAction = (
  password: string
): AuthSetSecondPassword => ({ type: AUTH_SET_SECOND_PASSWORD, password });

export const authSetIsPasswordValidAction = (): AuthSetIsPasswordValid => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const password = store.getState().auth.password;
  console.log(passwordRegex.test(password));
  return {
    type: AUTH_SET_IS_PASSWORD_VALID,
    isValid: passwordRegex.test(password),
  };
};

export const authSetIsSettingsOpenAction = (
  isOpen: boolean
): AuthSetIsSettingsOpen => ({ type: AUTH_SET_IS_SETTINGS_OPEN, isOpen });

export const authSetIsPasswordMatchToSecondPassAction = (): AuthSetIsPasswordMatchToSecondPass => {
  const { password, secondPassword } = store.getState().auth;
  console.log(
    `authSetIsPasswordMatchToSecondPassAction, password: ${password}, secondPassword: ${secondPassword}`
  );
  return {
    type: AUTH_SET_IS_PASSWORD_MATCH_TO_SECOND_PASSWORD,
    isMatch: password === secondPassword,
  };
};

export const authSetPhotoAction = (photo: any): AuthSetPhoto => ({
  type: AUTH_SET_PHOTO,
  photo,
});

export const authUpdateFlowStepAction = (
  flowStep: 1 | 2
): AuthUpdateFlowStep => ({
  type: AUTH_UPDATE_FLOW_STEP,
  flowStep,
});
