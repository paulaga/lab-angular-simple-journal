import { Component, OnInit } from '@angular/core';
import { JournalService } from '../../services/journal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})

export class EntryListComponent implements OnInit {

  news: Array<Object> = [];

  constructor(public JournalService : JournalService, public router : Router) {

    this.JournalService.getNews()
      .subscribe((news) => {
        this.news = news;
      });
  }

  ngOnInit() {

  }

}
