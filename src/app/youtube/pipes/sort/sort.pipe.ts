import { Pipe, PipeTransform } from '@angular/core';

import { sortingBy } from '@common/helper';

import { SearchResultCard } from '@youtube/models/searchResultCard.model';
import { SortingSettings } from '@core/models/sortingSettings.model';

@Pipe({ name: 'sort' })
export class SortPipe implements PipeTransform {
  public transform(searchResultCards: SearchResultCard[], sortingSettings: SortingSettings)
  : SearchResultCard[] {
    if (!sortingSettings || !sortingSettings.method) { return searchResultCards; }

    return sortingBy(searchResultCards, sortingSettings);
  }
}
