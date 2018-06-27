import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mondrian',
  templateUrl: './mondrian.component.html',
  styleUrls: ['./mondrian.component.scss']
})
export class MondrianComponent implements OnInit {

  @Input() list: string;

  constructor() { }

  ngOnInit() {
  }

}
