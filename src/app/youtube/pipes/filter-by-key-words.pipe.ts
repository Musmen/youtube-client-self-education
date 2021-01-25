import { Pipe, PipeTransform } from '@angular/core';

import { ResponseItem } from '@youtube/models/response.model';
import { getLowerCaseTrimmedString } from '@common/helper';

@Pipe({
  name: 'filterByKeyWords',
})
export class FilterByKeyWordsPipe implements PipeTransform {
  public transform(searchResultItems: ResponseItem[], filteringRequest: string): ResponseItem[] {
    if (!searchResultItems || !filteringRequest) {
      return searchResultItems;
    }

    return searchResultItems
      .filter((item: ResponseItem) => getLowerCaseTrimmedString(item.snippet.title)
        .includes(getLowerCaseTrimmedString(filteringRequest)));
  }
}
