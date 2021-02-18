export interface SearchResultCard {
  id: string | {
    kind: string,
    videoId: string,
  };
  posterUrl: string;
  views: number | string;
  likes: number | string;
  dislikes: number | string;
  comments: number | string;
  title: string;
  date: string;
  description: string;
}
