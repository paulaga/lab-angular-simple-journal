import { Component, OnInit } from "@angular/core";
import { JournalService } from "../../services/journal.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-single-entry",
  templateUrl: "./single-entry.component.html",
  styleUrls: ["./single-entry.component.css"]
})
export class SingleEntryComponent implements OnInit {
  id: number;
  news: any;

  constructor(
    public JournalService: JournalService,
    public router: ActivatedRoute
  ) {
    this.router.params.subscribe(params => {
      this.JournalService.getSingleNews(params.id).subscribe(news => {
        this.news = news;
      });
    });
  }

  ngOnInit() {}
}
