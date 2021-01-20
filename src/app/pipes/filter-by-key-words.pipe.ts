import { Pipe, PipeTransform } from '@angular/core';

import {  ResponseItem } from '../../app/models/response.model';

@Pipe({
  name: 'filterByKeyWords',
})
export class FilterByKeyWordsPipe implements PipeTransform {

  transform(searchResultItems: ResponseItem[], filteringRequest: string): ResponseItem[] {
    if (!searchResultItems || !filteringRequest) return searchResultItems;
    return searchResultItems
      .filter((item: ResponseItem) => String(item.snippet.title).toLowerCase().trim()
        .includes(String(filteringRequest).toLowerCase().trim()));
  }
}
