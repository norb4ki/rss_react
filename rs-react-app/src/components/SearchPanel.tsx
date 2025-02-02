import { Component } from 'react';
import { Character } from '../interfaces/character.ts';

export interface SearchPanelProps {
  load: (results: Character[]) => void;
}

class SearchPanel extends Component<SearchPanelProps> {
  state = {
    lastTerm: localStorage.getItem('lastSearch') || '',
    inputValue: localStorage.getItem('lastSearch') || '',
  };

  saveSearchTerm = (term: string) => {
    localStorage.setItem('lastSearch', term);
  };

  handleSearch = async () => {
    const searchTerm = this.state.inputValue.trim();
    let url = `https://swapi.dev/api/people/`;

    if (searchTerm) {
      url = `https://swapi.dev/api/people/?search=${searchTerm}`;
    }

    console.log(`Searching for: ${searchTerm}`);

    try {
      this.setState({ lastTerm: searchTerm }, () => {
        this.saveSearchTerm(searchTerm);
      });

      const response = await fetch(url);
      const data = await response.json();

      if (data.results.length > 0) {
        this.props.load(data.results);
        console.log('Characters found:', data.results);
      } else {
        this.props.load([]);
        console.log('No characters found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search for a character"
          onChange={(event) => {
            this.setState({ inputValue: event.target.value });
            console.log('Input value:', this.state.inputValue);
          }}
          value={this.state.inputValue}
        />
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default SearchPanel;
