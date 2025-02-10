import React, { PropsWithChildren, useEffect } from 'react';
import Header from '../../../components/header/presentation/Header.tsx';
import SearchPanel from '../../../components/searchPanel/presentation/SearchPanel.tsx';
import CardList from '../../../components/cardList/presentation/CardList.tsx';
import { ICharacterDTO } from '../../../domain/interfaces/character/character.ts';
import Loader from '../../../components/loader/presentation/Loader.tsx';
import { fetchCharacters } from '../../../common/services/apiService/service.ts';
import { useSearchQuery } from '../../../common/hooks/useSearchQuery.ts';

const MainPage: React.FC<PropsWithChildren> = () => {
  const [fetchResults, setFetchResults] = React.useState<ICharacterDTO[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { searchQuery, setSearchQuery } = useSearchQuery();

  const handleSearch = (input: string) => {
    setSearchQuery(input.trim());
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchCharacters(searchQuery.trim());
        setFetchResults(data.results.length > 0 ? data.results : []);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData().catch(console.error);
  }, [searchQuery]);

  return (
    <div>
      <Header>
        <h1>Star Wars Search Engine</h1>
      </Header>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SearchPanel handleSearch={handleSearch} searchQuery={searchQuery} />
          <CardList data={fetchResults} />
        </>
      )}
    </div>
  );
};

export default MainPage;
