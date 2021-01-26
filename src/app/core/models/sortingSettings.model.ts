import { SearchResultCard } from '@youtube/models/searchResultCard.model';

export interface SortingSettings {
  method: (searchResultCard: SearchResultCard) => number;
  isSortingByIncrease: boolean;
}
