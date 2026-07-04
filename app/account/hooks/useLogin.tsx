"use client";

import { logOutUser } from "@app/login/services/authUser";
import { ApiError } from "@lib/api/utils/apiError";
import { useRouter } from "next/navigation";

export default function useLogin() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logOutUser();

      localStorage.clear();

      router.push("https://auth.powerdeed.co.ke/login");
    } catch (err: unknown) {
      if (err instanceof ApiError) {
        console.error(err.message);
      }
    }
  };

  return {
    handleLogout,
  };
}
