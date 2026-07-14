"use client";

import { globalContext } from "../context/GlobalContext";
import { useContext, useEffect } from "react";
import { userContext } from "@/app/auth/context/userContext";

export default function useUser() {
  const globalStates = useContext(globalContext);
  const authStates = useContext(userContext);

  if (!globalStates)
    throw new Error("Global context must be within a provider");

  if (!authStates) throw new Error("Auth context must be within a provider");

  const { setUser } = globalStates;
  const { user } = authStates;

  useEffect(() => {
    setUser(user);
  }, [setUser, user]);

  return {};
}
