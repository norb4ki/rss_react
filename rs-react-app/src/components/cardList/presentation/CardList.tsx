import Card from '../../card/presentation/Card.tsx';
import { ICharacterDTO } from '../../../domain/interfaces/character/character.ts';

interface CardListProps {
  data: ICharacterDTO[];
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
