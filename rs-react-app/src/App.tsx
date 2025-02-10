import SearchPanel from './components/searchPanel/presentation/SearchPanel.tsx';
import CardList from './components/cardList/presentation/CardList.tsx';
import { ICharacterDTO } from './domain/interfaces/character/character.ts';
import ErrorButton from './components/errorButton/presentation/ErrorButton.tsx';
import Loader from './components/loader/presentation/Loader.tsx';

import React from 'react';

const App = () => {
  const [fetchResults, setFetchResults] = React.useState<ICharacterDTO[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  return (
    <div>
      <h1>Star Wars Search Engine</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SearchPanel setLoading={setIsLoading} setResults={setFetchResults} />
          <ErrorButton />
          <CardList data={fetchResults} />
        </>
      )}
    </div>
  );
};

export default App;
