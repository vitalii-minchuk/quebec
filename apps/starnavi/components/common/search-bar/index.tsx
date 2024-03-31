import {type ChangeEventHandler} from 'react';

import { CloseRoundIcon, SearchIcon } from '../../../assets/svg';

interface Props {
    label?: string
    placeholder?: string;
    searchValue: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onClear?: () => void;
}

export const SearchBar = (props: Props) => {
    const {placeholder = '', searchValue, label, onChange, onClear} = props;

    return (
        <div>
            <SearchIcon />
            <label htmlFor="search">{label}</label>
            <input
                id='search'
                value={searchValue ?? ''}
                placeholder={`${searchValue ? '' : placeholder}`}
                onChange={onChange}
            />
            {Boolean(searchValue) && (
                <button className='clear-btn' onClick={onClear}>
                    <CloseRoundIcon />
                </button>
            )}
        </div>
    );
};