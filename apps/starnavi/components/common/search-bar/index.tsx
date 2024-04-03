import { type ChangeEventHandler } from "react";

import { CloseRoundIcon, SearchIcon } from "@/assets/svg";

interface Props {
  label?: string;
  placeholder?: string;
  searchValue: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onClear?: () => void;
}

export const SearchBar = (props: Props) => {
  const { placeholder = "", searchValue, label, onChange, onClear } = props;

  return (
    <div className="relative flex gap-2 items-center flex-grow border border-gray-400 rounded-md px-2 h-[38px]">
      <SearchIcon />
      <label htmlFor="search">{label}</label>
      <input
        id="search"
        value={searchValue ?? ""}
        placeholder={`${searchValue ? "" : placeholder}`}
        onChange={onChange}
        className="w-full outline-none"
      />
      {Boolean(searchValue) && (
        <button onClick={onClear} className=" text-gray-400">
          <CloseRoundIcon />
        </button>
      )}
    </div>
  );
};
