import { ICharacterDTO } from '../../../domain/interfaces/character/character.ts';
import { fetchCharacters } from '../../../common/services/apiService/service.ts';
import { useSearchQuery } from '../../../common/hooks/useSearchQuery.ts';

export interface SearchPanelProps {
  setResults: (results: ICharacterDTO[]) => void;
  setLoading: (isLoading: boolean) => void;
}

const SearchPanel = (props: SearchPanelProps) => {
  const { searchQuery, setSearchQuery } = useSearchQuery();

  const handleSearch = async () => {
    props.setLoading(true);
    const trimmedSearchTerm = searchQuery.trim();

    console.log(`Searching for: ${trimmedSearchTerm}`);
    setSearchQuery(trimmedSearchTerm);
    console.log('Search query now is:', searchQuery);
    try {
      const data = await fetchCharacters(trimmedSearchTerm);
      props.setLoading(false);

      props.setResults(data.results.length > 0 ? data.results : []);
      console.log('Characters found:', data.results);
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
          setSearchQuery(event.target.value);
        }}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchPanel;
