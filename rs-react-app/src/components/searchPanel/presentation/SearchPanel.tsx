import { useState } from 'react';

export interface SearchPanelProps {
  searchQuery?: string | undefined;
  handleSearch: (input: string) => void;
}

const SearchPanel = (props: SearchPanelProps) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <input
        value={inputValue}
        type="text"
        placeholder={`Search for a ${props.searchQuery ? props.searchQuery : 'character'}`}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <button onClick={() => props.handleSearch(inputValue)}>Search</button>
    </div>
  );
};

export default SearchPanel;
