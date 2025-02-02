import { Component } from 'react';
import SearchPanel from './components/SearchPanel.tsx';
import CardList from './components/CardList.tsx';
import { Character } from './interfaces/character.ts';

class App extends Component {
  state = {
    fetchResults: [],
  };

  loadResults = (results: Character[]) => {
    this.setState({
      fetchResults: results,
    });
    console.log('Results loaded:', results);
  };

  render() {
    return (
      <div>
        <h1>Star Wars Search Engine</h1>
        <SearchPanel load={this.loadResults} />
        <CardList data={this.state.fetchResults} />
      </div>
    );
  }
}

export default App;
