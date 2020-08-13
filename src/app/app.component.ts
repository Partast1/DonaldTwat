import { Component, Input } from '@angular/core';
import { Tweet  } from './tweet';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'All Heil the might Donald';
  @Input() tweet: Tweet;
}
