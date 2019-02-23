import { NgModule } from '@angular/core';
import { WebCompLibComponent } from './web-comp-lib.component';
import { DownloadComponent } from './download/download.component';

@NgModule({
  declarations: [WebCompLibComponent, DownloadComponent],
  imports: [
  ],
  exports: [WebCompLibComponent, DownloadComponent]
})
export class WebCompLibModule { }
