"use client";

import type { MultiValue, SingleValue } from "react-select";
import Select from "react-select";

import "./styles.css";

import type { ICustomSelectOption } from "./types";
import { CloseRoundIcon } from "@/assets/svg";
import { useIsMounted } from "@/hooks";

interface Props {
  options: ICustomSelectOption[];
  value?: ICustomSelectOption | null;
  defaultValue?: ICustomSelectOption | ICustomSelectOption[] | null;
  onSelect?: (val: ICustomSelectOption | ICustomSelectOption[] | null) => void;
  onClear?: () => void;
  placeholder?: string;
  isLoading?: boolean;
  id?: string;
  name?: string;
  tabIndex?: number;
  isDisabled?: boolean;
  isMulti?: boolean;
  label?: string;
}

export const CustomSelect = (props: Props) => {
  const {
    options,
    value,
    defaultValue,
    onSelect,
    placeholder = "",
    label,
    id,
    name,
    tabIndex,
    isLoading = false,
    isDisabled = false,
    isMulti = false,
    onClear,
  } = props;

  const isMounted = useIsMounted();

  const onChange = (
    val: SingleValue<ICustomSelectOption> | MultiValue<ICustomSelectOption>,
  ) => {
    if (!val) return;
    if (!onSelect) return null;

    const option = Array.isArray(val) ? [...val] : val;

    onSelect(option as ICustomSelectOption | ICustomSelectOption[]);
  };

  const handleClear = () => {
    return onClear ? onClear() : null;
  };

  if (!isMounted) return null;

  return (
    <div className="relative flex-grow">
      <label>
        {Boolean(label) && <span>{label}</span>}
        <Select
          id={id}
          name={name}
          tabIndex={tabIndex}
          placeholder={placeholder ?? ""}
          className="react-select-container"
          classNamePrefix="react-select"
          options={options}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          isLoading={isLoading}
          isDisabled={isDisabled}
          isClearable
          isMulti={isMulti}
        />
      </label>
      {Boolean(onClear) && (
        <button onClick={handleClear} className="clear-btn">
          <CloseRoundIcon />
        </button>
      )}
    </div>
  );
};
