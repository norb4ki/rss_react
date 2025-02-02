import { Component } from 'react';
import SearchPanel from './components/SearchPanel.tsx';
import CardList from './components/CardList.tsx';
import { Character } from './interfaces/character.ts';
import ErrorButton from './components/ErrorButton.tsx';
import Loader from './components/Loader.tsx';

class App extends Component {
  state = {
    fetchResults: [],
    isLoading: false,
  };

  setLoading = (isLoading: boolean) => {
    this.setState({
      isLoading: isLoading,
    });
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
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <>
            <SearchPanel setLoading={this.setLoading} load={this.loadResults} />
            <ErrorButton />
            <CardList data={this.state.fetchResults} />
          </>
        )}
      </div>
    );
  }
}

export default App;
