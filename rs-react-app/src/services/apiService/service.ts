import { API_BASE_URL, API_SEARCH } from '../apiConfig/config.ts';

export interface fetchProps {
  searchTerm: string;
}

export const fetchCharacters = async (searchTerm?: string) => {
  const response = await fetch(
    `${API_BASE_URL}${API_SEARCH}${searchTerm || ''}`
  );

  if (!response.ok) {
    const errorData = (await response.json()) as { error: string };
    throw new Error(errorData.error || 'Failed to fetch characters');
  }

  const data = await response.json();
  return { results: data.results || [] };
};
