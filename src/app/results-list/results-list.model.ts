import { ResultsItem } from '../results-item/results-item.model';

export interface ResultsList {
  kind: string,
  etag: string,
  pageInfo: {
    totalResults: number,
    resultsPerPage: number,
  },
  items: ResultsItem[],
}
