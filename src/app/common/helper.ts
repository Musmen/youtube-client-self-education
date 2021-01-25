import { ResponseList, ResponseItem } from '@youtube/models/response.model';
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

export const getViewCountNumber: (item: ResponseItem) => number
  = (item: ResponseItem) => Number(item.statistics.viewCount);

export const getDateNumber: (item: ResponseItem) => number
  = (item: ResponseItem) => Number(new Date(item.snippet.publishedAt).getTime());

export const sortingBy: (
  inputData: ResponseList,
  getSortBaseMethod: (item: ResponseItem) => number,
  sortingOder: boolean,
) => ResponseList | undefined = (
  inputData: ResponseList,
  getSortBaseMethod: (item: ResponseItem) => number,
  sortingOder: boolean,
) => {
  if (!inputData || !inputData.items) {
    return;
  }

  inputData.items = Array.from(
    inputData.items
      .sort((firstItem: ResponseItem, secondItem: ResponseItem): number => sortingOder
        ? getSortBaseMethod(firstItem) - getSortBaseMethod(secondItem)
        : getSortBaseMethod(secondItem) - getSortBaseMethod(firstItem)
      )
  );

  return inputData;
};
