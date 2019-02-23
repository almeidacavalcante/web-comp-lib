import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'grt-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {
  content = '';
  @ViewChild('but') public element;

  constructor() { }

  ngOnInit() {
    this.content = this.element.nativeElement.innerText;
  }

  private disable() {
    this.element.nativeElement.disabled = true;
  }

  private enable() {
    this.element.nativeElement.disabled = false;
  }

  public activate() {
    this.element.nativeElement.classList.add('onclic');
    this.element.nativeElement.innerText = '';
    this.disable();
  }

  public validate() {
    this.element.nativeElement.classList.remove('onclic');
    this.element.nativeElement.classList.add('validate');
  }

  public restore(delay: number) {
    setTimeout(() => {
      this.element.nativeElement.classList.remove('validate');
      this.element.nativeElement.innerText = this.content;
      this.enable();
    }, delay);
  }

}
