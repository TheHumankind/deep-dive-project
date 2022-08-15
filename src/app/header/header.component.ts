import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() switchFeature = new EventEmitter<string>();

  constructor() { }

  onSelect(feat: string) {
    this.switchFeature.emit(feat);
  }



}
