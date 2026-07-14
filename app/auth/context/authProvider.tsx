"use client";

import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { userContext } from "./userContext";
import type { User } from "../types/user.type";
import { getCurrentUser } from "../services/authUser";
import { getAuthRedirect } from "../utils/client";

export default function AuthorizationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);
  const [loadingUser, setLoadingUser] = useState(false);
  const [userError, setUserError] = useState("");

  useEffect(() => {
    if (pathname.startsWith("/login")) return;

    const loadUser = async () => {
      try {
        setLoadingUser(true);
        setUserError("");
        const currentUser = await getCurrentUser();
        setUser(currentUser);
      } catch (error) {
        setUser(null);
        setUserError(
          error instanceof Error
            ? error.message
            : "Unable to load the current user.",
        );

        window.location.href = getAuthRedirect();
      } finally {
        setLoadingUser(false);
      }
    };

    void loadUser();
  }, [pathname]);

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
      {children}
    </userContext.Provider>
  );
}
