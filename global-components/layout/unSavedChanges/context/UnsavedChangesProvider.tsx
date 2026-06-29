"use client";

import { ReactNode, useState } from "react";

import { DEFAULT_UNSAVED_CHANGES_NOTICE } from "@global-components/layout/unSavedChanges/constants/unsavedChangesNotice";
import { unsavedChangesContext } from "@global-components/layout/unSavedChanges/context/UnsavedChangesContext";

export default function UnsavedChangesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [unsavedChangesNoticeVisible, setUnsavedChangesNoticeVisible] =
    useState(false);
  const [unsavedChangesNoticeText, setUnsavedChangesNoticeText] = useState(
    DEFAULT_UNSAVED_CHANGES_NOTICE,
  );

  return (
    <unsavedChangesContext.Provider
      value={{
        unsavedChanges,
        setUnsavedChanges,
        unsavedChangesNoticeVisible,
        setUnsavedChangesNoticeVisible,
        unsavedChangesNoticeText,
        setUnsavedChangesNoticeText,
      }}
    >
      {children}
    </unsavedChangesContext.Provider>
  );
}
