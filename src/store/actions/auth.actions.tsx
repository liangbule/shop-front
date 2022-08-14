export const SINFUP = "SINFUP";
export const SINFUP_SUCCESS = "SINFUP_SUCCESS";
export const SINFIN_FAIL = "SINFIN_FAIL";

export interface SignupPayload {
  email: string;
  name: string;
  password: string;
}

export interface SignupAction {
  type: typeof SINFUP;
  payload: SignupPayload;
}

export interface SignupSuccessAction {
  type: typeof SINFUP_SUCCESS;
}

export interface SignupFAILAction {
  type: typeof SINFIN_FAIL;
  message: string;
}
// SignupAction返回值类型
export const signup = (payload: SignupPayload): SignupAction => ({
  type: SINFUP,
  payload,
});

export const signupSuccess = (): SignupSuccessAction => ({
  type: SINFUP_SUCCESS,
});

export const signupFail = (message: string): SignupFAILAction => ({
  type: SINFIN_FAIL,
  message,
});

// 联合类型
export type AuthUnioType =  SignupAction | SignupSuccessAction | SignupFAILAction