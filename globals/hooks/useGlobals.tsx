"use client";

import useClipboard from "./useClipboard";
import useGlobalStates from "./useGlobalStates";
import useUser from "./useUser";

export default function useGlobals() {
  const states = useGlobalStates();

  const clipboard = useClipboard();
  const user = useUser();

  return {
    globalStates: { ...states },
    globalActions: { ...user, ...clipboard },
  };
}
