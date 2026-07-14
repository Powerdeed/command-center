"use client";

import UseAuthStates from "./useAuthStates";
import useLogout from "./useLogout";

export default function UseAuth() {
  const authStates = UseAuthStates();
  const logout = useLogout();

  return { authStates, authActions: { ...logout } };
}
