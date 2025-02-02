import { Component } from 'react';
import { Character } from '../interfaces/character.ts';

interface CardProps {
  info: Character;
}

class Card extends Component<CardProps> {
  render() {
    return (
      <div>
        <h2>{this.props.info.name}</h2>
        <p>Birth Year: {this.props.info.birth_year}</p>
        <p>Mass: {this.props.info.mass}</p>
        <p>Height: {this.props.info.height}</p>
      </div>
    );
  }
}

export default Card;
