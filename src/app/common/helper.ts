import { SearchResultCard } from '@youtube/models/searchResultCard.model';
import { SortingSettings } from '@core/models/sortingSettings.model';

import {
  MILLISECONDS_IN_ONE_WEEK,
  MILLISECONDS_IN_ONE_MONTH,
  MILLISECONDS_IN_SIX_MONTHS,
  COLOR_BY_POSTDATE,
} from './constants';

export let getBottomBorderColor: (postDate: string) => string = (postDate) => {
  let passedMilliseconds: number = Date.now() - new Date(postDate).getTime();

  if (passedMilliseconds < MILLISECONDS_IN_ONE_WEEK) {
    return COLOR_BY_POSTDATE.weekly;
  }
  if (passedMilliseconds < MILLISECONDS_IN_ONE_MONTH) {
    return COLOR_BY_POSTDATE.monthly;
  }
  if (passedMilliseconds > MILLISECONDS_IN_SIX_MONTHS) {
    return COLOR_BY_POSTDATE.old;
  }

  return COLOR_BY_POSTDATE.default;
};

export const getLowerCaseTrimmedString: (inputString: string) => string
  = (inputString: string) => String(inputString).toLowerCase().trim();

export const getViewsCountNumber: (searchResultCard: SearchResultCard) => number
  = (searchResultCard: SearchResultCard) => Number(searchResultCard.views);

export const getDateNumber: (searchResultCard: SearchResultCard) => number
  = (searchResultCard: SearchResultCard) => Number(new Date(searchResultCard.date).getTime());

export const sortingBy: (searchResultCards:  SearchResultCard[], sortingSettings: SortingSettings) =>
  SearchResultCard[] = (searchResultCards:  SearchResultCard[], sortingSettings: SortingSettings) =>
    searchResultCards = Array.from(searchResultCards
        .sort((firstCard: SearchResultCard, secondCard: SearchResultCard)
        : number => sortingSettings.isSortingByIncrease
          ? sortingSettings.method(firstCard) - sortingSettings.method(secondCard)
          : sortingSettings.method(secondCard) - sortingSettings.method(firstCard)
        )
    );
