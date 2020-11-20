const MILLISECONDS_IN_ONE_SECOND: number = 1000;
const SECONDS_IN_ONE_MINUTE: number = 60;
const MINUTES_IN_ONE_HOUR: number = 60;
const HOURS_IN_ONE_DAY: number = 24;
const DAYS_IN_ONE_WEEK: number = 7;
const DAYS_IN_ONE_MONTH: number = 30;

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

export let getBottomBorderColor = (postDate): string => {
  let passedMilliseconds = Date.now() - new Date(postDate).getTime();

  if (passedMilliseconds < MILLISECONDS_IN_ONE_WEEK) return ColorSetByPostDate.weekly;
  if (passedMilliseconds < MILLISECONDS_IN_ONE_MONTH) return ColorSetByPostDate.monthly;
  if (passedMilliseconds > MILLISECONDS_IN_SIX_MONTHS) return ColorSetByPostDate.old;

  return ColorSetByPostDate.default;
}
