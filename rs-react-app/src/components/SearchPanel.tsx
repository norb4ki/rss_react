import { Component } from 'react';

class SearchPanel extends Component {
  state = {
    lastTerm: localStorage.getItem('lastSearch') || '',
    inputValue: localStorage.getItem('lastSearch') || '',
    searchResults: [],
  };

  saveSearchTerm = (term: string) => {
    localStorage.setItem('lastSearch', term);
  };

  handleSearch = async () => {
    const searchTerm = this.state.inputValue.trim();

    if (!searchTerm) {
      return;
    }

    console.log(`Searching for: ${searchTerm}`);

    try {
      this.setState({ lastTerm: searchTerm }, () => {
        this.saveSearchTerm(searchTerm);
      });

      const url = `https://swapi.dev/api/people/?search=${searchTerm}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.results.length > 0) {
        this.setState({ searchResults: data.results });
        console.log('Characters found:', data.results);
      } else {
        this.setState({ searchResults: [] });
        console.log('No characters found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      this.setState({ searchResults: [] });
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search for a character"
          onChange={(event) =>
            this.setState({ inputValue: event.target.value })
          }
          value={this.state.inputValue}
        />
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default SearchPanel;
