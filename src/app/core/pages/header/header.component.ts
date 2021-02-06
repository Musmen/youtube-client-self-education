import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { LoginService } from '@auth/services/login/login.service';
import { ResponseList } from '@youtube/models/response.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private loginService: LoginService, private http: HttpClient) { }

  public ngOnInit(): void {
    this.loginService.getLoginCredentialsFromLS();

    // this.http.get('https://youtube.googleapis.com/youtube/v3/search', {
    //   params: {
    //     'part': 'snippet',
    //     'maxResults': '15',
    //     'type': 'video',
    //     'q': 'JS',
    //     'key': 'AIzaSyAI-D1P0OH_z7m5_RzSiQgWz22lmXZ8ZAw',
    //   },
    // }).subscribe((responce: any) => {
    //   const idList: string[] = responce.items.map((item) => item.id.videoId);
    //   debugger;

    //   this.http.get('https://youtube.googleapis.com/youtube/v3/videos', {
    //   params: {
    //     'part': ['snippet', 'statistics'],
    //     'id': idList,
    //     'key': 'AIzaSyAI-D1P0OH_z7m5_RzSiQgWz22lmXZ8ZAw',
    //   },
    //   }).subscribe((data) => {
    //     console.log(data);
    //     debugger;
    //   });

    // });
  }
}
