import { Component } from 'react';
import Card from './Card.tsx';

class CardList extends Component {

  state = {
    results: [{
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      hair_color: 'blond',
    }]
  }
  render() {
    return (
      <>
        <Card info={this.state.results}/>

      </>
    );
  }
}

export default CardList;