import { createUrl, get, isStoredJwt, post, setStoredJwt } from "./http";

export const me = async (id)  => {
  return isStoredJwt()
    ? (await get(createUrl(`/user/${id}`)).catch(() => null))?.data
    : null;
};

export const login = async (email, hashedPassword) => {
  const result = (
    await post(createUrl("/auth/login"), { email, hashedPassword })
    .catch(
      () => null
    )
  )?.data;

  if (!result) {
    return alert("Could not login");
  }
  setStoredJwt(result.backendTokens.accessToken);
  return me(result.user.id);
};

export const signup = async (username, password, firstName, lastName) => {
  const result = (
    await post(createUrl("/auth/register"), {
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
