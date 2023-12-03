import { createUrl, get, isStoredJwt, post, setStoredJwt } from "./http";

export const me = async () => {
  return isStoredJwt()
    ? (await get(createUrl("/me")).catch(() => null))?.data
    : null;
};

export const login = async (username, password) => {
  const result = (
    await post(createUrl("/login"), { username, password }).catch(
      () => null
    )
  )?.data;

  if (!result) {
    return alert("Could not login");
  }
  setStoredJwt(result.accessToken);
  return me();
};

export const signup = async (username, password, firstName, lastName) => {
  const result = (
    await post(createUrl("/register"), {
      username,
      password,
      firstName,
      lastName,
    }).catch(() => null)
  )?.data;

  if (!result) {
    return alert("Could not sign up");
  }
  setStoredJwt(result.accessToken);
  return me();
};

export const checkUser = async (email) => {
  const result = (
    await post(createUrl("/api/check-user"), { email }).catch(() => null)
  )?.data;
  if (!result) return false;
  return true;
};
