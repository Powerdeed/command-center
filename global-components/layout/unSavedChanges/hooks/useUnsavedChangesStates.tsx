"use client";

import { useContext } from "react";

import { unsavedChangesContext } from "@global-components/layout/unSavedChanges/context/UnsavedChangesContext";

export default function useUnsavedChangesStates() {
  const unsavedChangesStates = useContext(unsavedChangesContext);

  if (!unsavedChangesStates) {
    throw new Error("Unsaved changes context must be within a provider.");
  }

  return { ...unsavedChangesStates };
}
