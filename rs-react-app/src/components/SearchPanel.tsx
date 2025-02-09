import { useState } from 'react';
import { Character } from '../interfaces/character.ts';

export interface SearchPanelProps {
  setResults: (results: Character[]) => void;
  setLoading: (isLoading: boolean) => void;
}

const SearchPanel = (props: SearchPanelProps) => {
  const [inputValue, setInputValue] = useState(
    localStorage.getItem('lastSearch') || ''
  );
  const [lastTerm, setLastTerm] = useState(
    localStorage.getItem('lastSearch') || ''
  );

  const saveSearchTerm = (term: string) => {
    localStorage.setItem('lastSearch', term);
  };

  const handleSearch = async () => {
    props.setLoading(true);
    const searchTerm = inputValue.trim();
    let url = `https://swapi.dev/api/people/`;

    if (searchTerm) {
      url = `https://swapi.dev/api/people/?search=${searchTerm}`;
    }

    console.log(`Searching for: ${searchTerm}`);

    try {
      setLastTerm(searchTerm);
      saveSearchTerm(searchTerm);

      const response = await fetch(url);
      const data = await response.json();
      props.setLoading(false);

      if (data.results.length > 0) {
        props.setResults(data.results);
        console.log('Characters found:', data.results);
      } else {
        props.setResults([]);
        console.log('No characters found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a character"
        onChange={(event) => {
          setInputValue(event.target.value);
          console.log('Input value:', event.target.value);
        }}
        value={inputValue}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchPanel;
