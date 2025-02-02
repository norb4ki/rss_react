import { Component } from 'react';
import SearchPanel from './components/SearchPanel.tsx';
import CardList from './components/CardList.tsx';



class App extends Component {
  render() {
    return (
      <div>
        <h1>Star Wars Search Engine</h1>
        <SearchPanel/>
        <CardList/>
      </div>
    );
  }
}

export default App;