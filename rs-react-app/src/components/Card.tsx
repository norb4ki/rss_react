import { Component } from 'react';
import { Character } from '../interfaces/character.ts';

interface CardProps {
  info: Character[];
}

class Card extends Component<CardProps> {
  render() {
    return (
      <div>
        {this.props.info.map((character, index) => (
          <div key={index}>
            <h2>{character.name}</h2>
            <p>Birth Year: {character.birth_year}</p>
            <p>Mass: {character.mass}</p>
            <p>Height: {character.height}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Card;
