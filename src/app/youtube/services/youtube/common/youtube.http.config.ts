import { YouTubeGetConfig } from '../models/endpoints-configs.model';

export let BASE_URL: string;
BASE_URL = 'https://youtube.googleapis.com/youtube/v3/';

export let YOUTUBE_KEY: string;
YOUTUBE_KEY = 'AIzaSyAI-D1P0OH_z7m5_RzSiQgWz22lmXZ8ZAw';

export let HTTP_GET_CONFIG: YouTubeGetConfig = {
  SEARCH: {
    URL: 'search',
    PARAMS: {
      part: 'snippet',
      maxResults: '15',
      type: 'video',
      key: YOUTUBE_KEY,
    },
  },
  VIDEOS: {
    URL: 'videos',
    PARAMS: {
      part: ['snippet', 'statistics'],
      key: YOUTUBE_KEY,
    },
  },
};
