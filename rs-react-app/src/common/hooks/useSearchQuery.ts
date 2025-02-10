import { useEffect, useState } from 'react';

const SEARCH_KEY = 'lastInput';

export const useSearchQuery = () => {
  const [searchQuery, setSearchQuery] = useState(
    localStorage.getItem(SEARCH_KEY) || ''
  );

  useEffect(() => {
    localStorage.setItem(SEARCH_KEY, searchQuery);
  }, [searchQuery]);

  return { searchQuery, setSearchQuery };
};
