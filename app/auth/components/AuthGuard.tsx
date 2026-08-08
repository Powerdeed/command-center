"use client";

import { ReactNode } from "react";

import { getAuthRedirect } from "../utils/client";
import useAuthStates from "../hooks/useAuthStates";
import useUser from "../hooks/useUser";

export default function AuthGuard({ children }: { children: ReactNode }) {
  const { user, loadingUser, userError } = useAuthStates();
  useUser();

  if (loadingUser) return null;

  if (!user) {
    return (
      <main className="grid min-h-screen place-items-center bg-background p-5">
        <section className="feature-container-vertical w-full max-w-110 text-center">
          <h1 className="text-style__heading text-(--primary-blue)">
            Sign in required
          </h1>
          <p className="text-style__body text-(--primary-grey)">
            {userError ||
              "A valid Powerdeed account is required to access Command Center."}
          </p>
          <a
            href={getAuthRedirect()}
            className="rounded-[10px] bg-(--primary-blue) px-4 py-2.5 text-style__small-text text-white duration-200 hover:bg-(--secondary-blue)"
          >
            Sign in
          </a>
        </section>
      </main>
    );
  }

  return children;
}
