import { YouTubeGetConfig } from '../models/endpoints-configs.model';

export let HTTP_GET_CONFIG: YouTubeGetConfig = {
  SEARCH: {
    URL: 'search',
    PARAMS: {
      part: 'snippet',
      maxResults: '15',
      type: 'video',
    },
  },
  VIDEOS: {
    URL: 'videos',
    PARAMS: {
      part: ['snippet', 'statistics'],
    },
  },
};
