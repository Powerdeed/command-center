"use client";

import { ReactNode, useState } from "react";
import { userContext } from "./userContext";
import type { User } from "../types/user.type";
import useUser from "../hooks/useUser";

function AuthBootstrap() {
  useUser();

  return null;
}

export default function AuthorizationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [loadingUser, setLoadingUser] = useState(false);
  const [userError, setUserError] = useState("");

  return (
    <userContext.Provider
      value={{
        user,
        setUser,
        loadingUser,
        setLoadingUser,
        userError,
        setUserError,
      }}
    >
      <AuthBootstrap />
      {children}
    </userContext.Provider>
  );
}
