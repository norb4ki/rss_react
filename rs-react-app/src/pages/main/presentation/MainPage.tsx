import React, { PropsWithChildren } from 'react';
import Header from '../../../components/header/presentation/Header.tsx';
import SearchPanel from '../../../components/searchPanel/presentation/SearchPanel.tsx';
import CardList from '../../../components/cardList/presentation/CardList.tsx';
import Loader from '../../../components/loader/presentation/Loader.tsx';
import { useSearchQuery } from '../../../common/hooks/useSearchQuery/useSearchQuery.ts';
import useFetchCharacters from '../../../common/hooks/useFetchCharacters/useFetchCharacters.ts';

const MainPage: React.FC<PropsWithChildren> = () => {
  const { searchQuery, setSearchQuery } = useSearchQuery();
  const { isLoading, fetchResults } = useFetchCharacters(searchQuery);

  const handleSearch = (input: string) => {
    setSearchQuery(input.trim());
  };

  if (isLoading) {
    return (
      <div>
        <Header>
          <h1>Star Wars Search Engine</h1>
        </Header>
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <Header>
        <h1>Star Wars Search Engine</h1>
      </Header>

      <SearchPanel handleSearch={handleSearch} searchQuery={searchQuery} />
      <CardList data={fetchResults} />
    </div>
  );
};

export default MainPage;
