import { useEffect, useState } from 'react';
import { ICharacterDTO } from '../../../domain/interfaces/character/character.ts';
import { fetchCharacters } from '../../services/apiService/service.ts';

const UseFetchCharacters = (searchQuery: string) => {
  const [fetchResults, setFetchResults] = useState<ICharacterDTO[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
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

  return { fetchResults, isLoading };
};

export default UseFetchCharacters;
