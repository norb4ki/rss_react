import { Character } from '../interfaces/character.ts';

interface CardProps {
  info: Character;
}

const Card = (props:CardProps) => {
  return (
    <div>
      <h2>{props.info.name}</h2>
      <p>Birth Year: {props.info.birth_year}</p>
      <p>Mass: {props.info.mass}</p>
      <p>Height: {props.info.height}</p>
    </div>
  );
};

export default Card;