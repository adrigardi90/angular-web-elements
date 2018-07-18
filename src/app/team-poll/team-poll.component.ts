import { Component, OnInit, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-team-poll',
  templateUrl: './team-poll.component.html',
  styleUrls: ['./team-poll.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TeamPollComponent implements OnInit {

  @Input() title;
  @Output() vote = new EventEmitter<string>();

  results: boolean = false;
  pollResults;

  options = {
    rm: 'Real Madrid',
    bcn: 'FC Barcelona',
    others: 'Otro equipo'
  };

  constructor() { }

  ngOnInit() { }

  _vote = (option: string) => this.vote.next(this.options[option]);

}
