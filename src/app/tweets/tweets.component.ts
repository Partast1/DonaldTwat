import { Component, OnInit, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Tweet } from '../tweet';
import { TweetsService } from '../tweets.service';
import { Pipe, PipeTransform } from '@angular/core';
import { AppComponent } from '../app.component';
import { NumberSymbol } from '@angular/common';


@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']

})

export class TweetsComponent implements OnInit {
  @Input() Search: string;
  twat: Tweet[];
  searchText: string;
  ngOnInit() {
  }
  constructor(tService: TweetsService) {
    this.twat = tService.tweets;
    console.log(this.twat.length);
  }
  save(text: string) {
    this.searchText = text;
  }

  match(text: string) {
    if (text.includes(this.searchText)) {
      return true;
    } else if (this.searchText === undefined) {
      return true;
    } else {
      return false;
    }



  }
}

