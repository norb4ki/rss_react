import SearchPanel from './components/SearchPanel.tsx';
import CardList from './components/CardList.tsx';
import { Character } from './interfaces/character.ts';
import ErrorButton from './components/ErrorButton.tsx';
import Loader from './components/Loader.tsx';

import React from 'react';

const App = () => {
  const [fetchResults, setFetchResults] = React.useState<Character[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  return (
    <div>
      <h1>Star Wars Search Engine</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SearchPanel setLoading={setIsLoading} load={setFetchResults} />
          <ErrorButton />
          <CardList data={fetchResults} />
        </>
      )}
    </div>
  );
};

export default App;
