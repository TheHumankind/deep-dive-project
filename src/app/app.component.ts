import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currentFeature = 'recipes';

  onSelectEvent(feat: string) {
    this.currentFeature = feat;
  }
}
