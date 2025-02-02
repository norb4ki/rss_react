import { Component } from 'react';

interface CardProps {
  info: {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
  }[];
}

class Card extends Component<CardProps> {
  render() {
    return (
      <div>
        {this.props.info.map((character, index) => (
          <div key={index}>
            <h2>{character.name}</h2>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Hair Color: {character.hair_color}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Card;
