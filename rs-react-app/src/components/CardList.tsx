import { Component } from 'react';
import Card from './Card.tsx';
import { Character } from '../interfaces/character.ts';

interface CardListProps {
  data: Character[];
}

class CardList extends Component<CardListProps> {
  render() {
    return (
      <>
        <Card info={this.props.data} />
      </>
    );
  }
}

export default CardList;
