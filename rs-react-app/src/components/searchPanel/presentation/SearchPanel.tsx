export interface SearchPanelProps {
  setSearchQuery: (query: string) => void;
  searchQuery?: string | undefined;
  handleSearch: () => void;
}

const SearchPanel = (props: SearchPanelProps) => {
  return (
    <div>
      <input
        type="text"
        placeholder={`Search for a ${props.searchQuery ? props.searchQuery : 'character'}`}
        onChange={(event) => {
          props.setSearchQuery(event.target.value);
        }}
      />
      <button onClick={props.handleSearch}>Search</button>
    </div>
  );
};

export default SearchPanel;
