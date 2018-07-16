import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-team-poll',
  templateUrl: './team-poll.component.html',
  styleUrls: ['./team-poll.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TeamPollComponent implements OnInit {

  poll: any = {
    rm: 0,
    bcn: 0,
    others: 0
  };

  pollResults: any = {
    rm: 0,
    bcn: 0,
    others: 0
  };

  total: number = 0;
  results: boolean = false;

  constructor() { }

  ngOnInit() { }

  vote = (option: string) => {
    this.poll[option]++;
    this.total++;
    this.calculatePool();
  }

  calculatePool = () => {
    this.pollResults.rm = (this.poll.rm / this.total) * 100;
    this.pollResults.bcn = (this.poll.bcn / this.total) * 100;
    this.pollResults.others = (this.poll.others / this.total) * 100;
    this.results = !this.results;
  }

}
