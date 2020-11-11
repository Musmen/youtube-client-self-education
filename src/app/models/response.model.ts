export interface ResponseList {
  kind: string,
  etag: string,
  pageInfo: {
    totalResults: number,
    resultsPerPage: number,
  },
  items: ResponseItem[],
}

export interface ResponseItem {
  kind: string,
  etag: string,
  id: string,
  snippet: {
    publishedAt: string,
    channelId: string,
    title: string,
    description: string,
    thumbnails: Thumbnails,
    channelTitle: string,
    tags: string[],
    categoryId: string,
    liveBroadcastContent: string,
    defaultLanguage?: string,
    localized: {
      title: string,
      description: string,
    },
    defaultAudioLanguage: string,
  },
  statistics: {
    viewCount: string,
    likeCount: string,
    dislikeCount: string,
    favoriteCount: string,
    commentCount: string,
  }
};

export interface Thumbnails {
  default: Thumbnail,
  medium: Thumbnail,
  high: Thumbnail,
  standard: Thumbnail,
  maxres: Thumbnail
};

export interface Thumbnail {
  url: string,
  width: number,
  height: number
};
