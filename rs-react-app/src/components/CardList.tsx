import Card from './Card.tsx';
import { Character } from '../interfaces/character.ts';

interface CardListProps {
  data: Character[];
}

const CardList = (props: CardListProps) => {
  return (
    <>
      {props.data.map((character) => (
        <Card info={character} key={character.name} />
      ))}
    </>
  );
};

export default CardList;
