import { TestBed } from '@angular/core/testing';

import { YouTubeHttpInterceptor } from './youtube-http.interceptor';

describe('YoutubeHttpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      YouTubeHttpInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: YouTubeHttpInterceptor = TestBed.inject(YouTubeHttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
