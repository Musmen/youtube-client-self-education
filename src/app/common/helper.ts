import { ResponseList } from '../../app/models/response.model';

let MILLISECONDS_IN_ONE_SECOND: number;
MILLISECONDS_IN_ONE_SECOND = 1000;
let SECONDS_IN_ONE_MINUTE: number;
SECONDS_IN_ONE_MINUTE = 60;
let MINUTES_IN_ONE_HOUR: number;
MINUTES_IN_ONE_HOUR = 60;
let HOURS_IN_ONE_DAY: number;
HOURS_IN_ONE_DAY = 24;
let DAYS_IN_ONE_WEEK: number;
DAYS_IN_ONE_WEEK = 7;
let DAYS_IN_ONE_MONTH: number;
DAYS_IN_ONE_MONTH = 30;

const MILLISECONDS_IN_ONE_DAY: number = MILLISECONDS_IN_ONE_SECOND * SECONDS_IN_ONE_MINUTE
  * MINUTES_IN_ONE_HOUR * HOURS_IN_ONE_DAY;
const MILLISECONDS_IN_ONE_WEEK: number = MILLISECONDS_IN_ONE_DAY * DAYS_IN_ONE_WEEK;
const MILLISECONDS_IN_ONE_MONTH: number = MILLISECONDS_IN_ONE_DAY * DAYS_IN_ONE_MONTH;
const MILLISECONDS_IN_SIX_MONTHS: number = MILLISECONDS_IN_ONE_MONTH * 6;

enum ColorSetByPostDate {
  weekly = '#2F80ED',
  monthly = '#27AE60',
  old = '#EB5757',
  default = '#F2C94C'
}

export let getBottomBorderColor: (postDate: string) => string = (postDate) => {
  let passedMilliseconds: number = Date.now() - new Date(postDate).getTime();

  if (passedMilliseconds < MILLISECONDS_IN_ONE_WEEK) {
    return ColorSetByPostDate.weekly;
  }
  if (passedMilliseconds < MILLISECONDS_IN_ONE_MONTH) {
    return ColorSetByPostDate.monthly;
  }
  if (passedMilliseconds > MILLISECONDS_IN_SIX_MONTHS) {
    return ColorSetByPostDate.old;
  }

  return ColorSetByPostDate.default;
};

export const ERROR_MESSAGES: {} = {
  SEARCH_REQUEST: 'Please, enter valid search request',
};

export const getLowerCaseTrimmedString: (inputString: string) => string
  = (inputString: string) => String(inputString).toLowerCase().trim();

type viewCountStatistic = {
  statistics: {
    viewCount: string,
  },
};
export const getViewCountNumber: (item: viewCountStatistic) => number
  = (item: viewCountStatistic) => Number(item.statistics.viewCount);

type publishedAtSnippet = {
  snippet: {
    publishedAt: string,
  },
};
export const getDateNumber: (item: publishedAtSnippet) => number
  = (item: publishedAtSnippet) => Number(new Date(item.snippet.publishedAt).getTime());

export const sortingBy: (
    inputData: ResponseList,
    getSortBaseMethod: (item: viewCountStatistic | publishedAtSnippet) => number,
    sortingOder: boolean,
  ) => ResponseList | undefined = (
    inputData: ResponseList,
    getSortBaseMethod: (item: viewCountStatistic | publishedAtSnippet) => number,
    sortingOder: boolean,
  ) => {
  if (!inputData || !inputData.items) {
    return;
  }

  inputData.items = Array.from(
    inputData.items
      .sort((firstItem, secondItem): number => sortingOder
        ? getSortBaseMethod(firstItem) - getSortBaseMethod(secondItem)
        : getSortBaseMethod(secondItem) - getSortBaseMethod(firstItem)
      )
  );

  return inputData;
};
