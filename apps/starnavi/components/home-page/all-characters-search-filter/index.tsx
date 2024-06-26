"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

import type { ICustomSelectOption } from "@/components/common/custom-select/types";
import { EAppSearchParams } from "@/enums";
import { useCustomSearchParams } from "@/hooks";
import {
  DEFAULT_SEARCH_DEBOUNCED_TIME,
  filterByEpisodeOptions,
} from "@/constants";
import { SearchBar } from "@/components/common/search-bar";
import { CustomSelect } from "@/components/common/custom-select";

interface Props {
  searchParams?: Record<string, string>;
}

export const AllCharactersSearchFilter = (props: Props) => {
  const { searchParams } = props;

  const currentEpisode = searchParams?.[EAppSearchParams.EPISODE];
  const currentSearch = searchParams?.[EAppSearchParams.SEARCH];

  const [searchValue, setSearchValue] = useState(currentSearch ?? "");
  const [selectedEpisode, setSelectedEpisode] =
    useState<ICustomSelectOption | null>(null);

  const [debouncedSearchValue] = useDebounce(
    searchValue,
    DEFAULT_SEARCH_DEBOUNCED_TIME,
  );
  const { addQueryParams, removeQueryParams } = useCustomSearchParams();

  const handleSelectEpisode = (
    option: ICustomSelectOption | ICustomSelectOption[] | null,
  ) => {
    if (option !== null && !Array.isArray(option)) {
      addQueryParams([
        { key: EAppSearchParams.EPISODE, value: option.value },
        {
          key: EAppSearchParams.PAGE,
          value: "1",
        },
      ]);
    }
  };

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleClearSearch = () => {
    searchValue && setSearchValue("");
  };

  const handleClearEpisode = () => {
    setSelectedEpisode(null);
    removeQueryParams([EAppSearchParams.EPISODE]);
  };

  useEffect(() => {
    debouncedSearchValue
      ? addQueryParams([
          { key: EAppSearchParams.SEARCH, value: debouncedSearchValue },
          { key: EAppSearchParams.PAGE, value: "1" },
        ])
      : removeQueryParams([EAppSearchParams.SEARCH]);
  }, [debouncedSearchValue]);

  useEffect(() => {
    if (currentEpisode) {
      const episode = filterByEpisodeOptions?.find(
        (el) => el.value === currentEpisode,
      );

      episode && setSelectedEpisode(episode);
    } else {
      setSelectedEpisode(null);
    }
  }, [currentEpisode]);

  return (
    <div className="py-4 h-16 flex gap-4">
      <SearchBar
        placeholder="Search..."
        searchValue={searchValue}
        onChange={handleChangeSearch}
        onClear={handleClearSearch}
      />

      <CustomSelect
        placeholder="Filter by Episode"
        options={filterByEpisodeOptions}
        value={selectedEpisode}
        onSelect={handleSelectEpisode}
        onClear={currentEpisode ? handleClearEpisode : undefined}
      />
    </div>
  );
};
