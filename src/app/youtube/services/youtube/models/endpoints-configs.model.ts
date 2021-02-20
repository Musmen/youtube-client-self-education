interface YouTubeEndpointConfig {
  URL: string;
  PARAMS: {
    part: string | string[],
    maxResults?: string,
    type?: string,
    id?: string | string[],
    q?: string,
  };
}

export interface YouTubeGetConfig {
  SEARCH?: YouTubeEndpointConfig;
  VIDEOS?: YouTubeEndpointConfig;
}
