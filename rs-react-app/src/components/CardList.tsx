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
        {this.props.data.map((character, index) => (
          <Card info={character} key={index} />
        ))}
      </>
    );
  }
}

export default CardList;
