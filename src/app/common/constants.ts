export let DEFAULT_USER_NAME: string;
DEFAULT_USER_NAME = 'Your Name';

export let LOGO_DEFAULT_TITLE: string;
LOGO_DEFAULT_TITLE = 'YouTube-Client';

export let MILLISECONDS_IN_ONE_SECOND: number;
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
export const MILLISECONDS_IN_ONE_WEEK: number = MILLISECONDS_IN_ONE_DAY * DAYS_IN_ONE_WEEK;
export const MILLISECONDS_IN_ONE_MONTH: number = MILLISECONDS_IN_ONE_DAY * DAYS_IN_ONE_MONTH;
export const MILLISECONDS_IN_SIX_MONTHS: number = MILLISECONDS_IN_ONE_MONTH * 6;

export enum COLOR_BY_POSTDATE {
  weekly = '#2f80ed',
  monthly = '#27ae60',
  old = '#eb5757',
  default = '#f2c94c'
}

export enum ERROR_MESSAGES {
  SEARCH_REQUEST = 'Please, enter valid search request',
  NOT_FOUND_PAGE = 'Sorry, something went wrong...',
}

export enum LABELS_ICONS {
  views = 'visibility',
  likes = 'favorite',
  dislikes = 'thumb_down',
  comments = 'chat',
}

export let STATISTIC_ITEMS_LABELS: string[] = [];

for (let statisticItem in LABELS_ICONS) {
  if (LABELS_ICONS.hasOwnProperty(statisticItem)) {
    STATISTIC_ITEMS_LABELS.push(statisticItem);
  }
}
