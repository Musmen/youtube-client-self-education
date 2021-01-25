import { Pipe, PipeTransform } from '@angular/core';
import { SearchResultCard } from '@youtube/models/searchResultCard.model';
import { getLowerCaseTrimmedString } from '@common/helper';

@Pipe({
  name: 'filterByKeyWords',
})
export class FilterByKeyWordsPipe implements PipeTransform {
  public transform(searchResultCards: SearchResultCard[], filteringRequest: string): SearchResultCard[] {
    if (!searchResultCards || !filteringRequest) { return searchResultCards; }

    return searchResultCards
      .filter((searchResultCard: SearchResultCard) =>
        getLowerCaseTrimmedString(searchResultCard.title)
        .includes(getLowerCaseTrimmedString(filteringRequest)));
  }
}
