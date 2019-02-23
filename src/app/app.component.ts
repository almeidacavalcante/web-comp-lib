import { Component, ViewChild } from '@angular/core';
import { DownloadComponent } from 'projects/web-comp-lib/src/public_api';
import { HttpClient } from '@angular/common/http';
import { Server } from 'selenium-webdriver/safari';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'comp-lib';
  @ViewChild('downloadButton') downloadButton: DownloadComponent;

  constructor(
    private server: HttpClient
  ) { }

  callApi() {
    const api = 'https://75b3dbe8-9177-4c8c-a870-9ba9567c43ad.mock.pstmn.io/api/';
    this.downloadButton.activate();
    this.server.get(api + 'download').subscribe(res => {
      this.downloadButton.validate();
      const delay = 4000;
      this.downloadButton.restore(delay);
    });
  }
}
