import Card from './Card.tsx';
import { Character } from '../interfaces/character.ts';

interface CardListProps {
  data: Character[];
}

const CardList = (props: CardListProps) => {
  return (
    <>
      {props.data.map((character, index) => (
        <Card info={character} key={index} />
      ))}
    </>
  );
};

export default CardList;
