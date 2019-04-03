export const loginSuccess = username => ({
  type: "LOGIN_SUCCESS",
  payload: { username }
});

export const loginFailed = () => ({
  type: "LOGIN_FAILED"
});
