import { Component } from 'react';

class SearchPanel extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Search for a character"/>
        <button>Search</button>
      </div>
    );
  }
}
export default SearchPanel;