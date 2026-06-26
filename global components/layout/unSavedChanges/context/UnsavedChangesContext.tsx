"use client";

import { createContext, Dispatch, SetStateAction } from "react";

import { UnsavedChangesNoticeText } from "@global components/layout/unSavedChanges/types/unsavedChanges.types";

export type UnsavedChangesStates = {
  unsavedChanges: boolean;
  setUnsavedChanges: Dispatch<SetStateAction<boolean>>;
  unsavedChangesNoticeVisible: boolean;
  setUnsavedChangesNoticeVisible: Dispatch<SetStateAction<boolean>>;
  unsavedChangesNoticeText: UnsavedChangesNoticeText;
  setUnsavedChangesNoticeText: Dispatch<
    SetStateAction<UnsavedChangesNoticeText>
  >;
};

export const unsavedChangesContext =
  createContext<UnsavedChangesStates | null>(null);
