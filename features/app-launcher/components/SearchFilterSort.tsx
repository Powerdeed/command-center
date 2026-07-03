"use client";

import SearchBar from "@global-components/ui/SearchBar";
import Filter from "@global-components/ui/Filter";
import { APPS_SORT_OPTIONS } from "../constants/SORT_OPTIONS";
import useAppLauncher from "../hooks/useAppLauncher";
import Sort from "@global-components/ui/Sort";
import { ACCESS_OPTIONS, LIVE_STATUS_OPTIONS } from "../types/AppData";

export default function SearchFilterSort() {
  const { state } = useAppLauncher();

  return (
    <div className="feature-container-vertical">
      <div className="feature-container-horizontal">
        <SearchBar
          placeholder="Search applications"
          changeFunc={state.setSearchedApp}
          val={state.searchedApp}
        />

        <Filter
          filterOptions={Object.values(LIVE_STATUS_OPTIONS)}
          selectedOption={state.selectedStatus}
          setSelectedOption={state.setSelectedStatus}
          selectFirstOption={false}
          placeholder="select status"
        />

        <Filter
          filterOptions={Object.values(ACCESS_OPTIONS)}
          selectedOption={state.selectedAccess}
          setSelectedOption={state.setSelectedAccess}
          selectFirstOption={false}
          placeholder="select access"
        />
      </div>

      <Sort
        sortOptions={APPS_SORT_OPTIONS}
        selectedSortOptions={state.selectedSortOptions}
        setSelectedSortOptions={state.setSelectedSortOptions}
      />
    </div>
  );
}
