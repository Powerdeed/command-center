"use client";

import SearchBar from "@global-components/ui/SearchBar";
import Selector from "@global-components/ui/Selector";
import {
  ACCESS_SORT_OPTIONS,
  STATUS_SORT_OPTIONS,
} from "../constants/SORT_FILTER_OPTIONS";
import useAppLauncher from "../hooks/useAppLauncher";
import Fitler from "@global-components/ui/Fitler";

export default function Sorter() {
  const { state } = useAppLauncher();

  return (
    <div className="feature-container-vertical">
      <div className="feature-container-horizontal">
        <SearchBar
          changeFunc={() => {}}
          placeholder="Search applications"
          val=""
        />

        <Selector
          options={STATUS_SORT_OPTIONS}
          selectedOption={state.selectedStatus}
          setSelectedOption={state.setSelectedStatus}
          selectFirstOption
        />

        <Selector
          options={ACCESS_SORT_OPTIONS}
          selectedOption={state.selectedAccess}
          setSelectedOption={state.setSelectedAccess}
          selectFirstOption
        />
      </div>

      <Fitler />
    </div>
  );
}
