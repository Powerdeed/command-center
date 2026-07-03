"use client";

import useLogin from "./useLogin";

export default function useAccount() {
  const login = useLogin();

  return { loginActions: { ...login } };
}
