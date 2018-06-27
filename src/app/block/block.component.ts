import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {

  @Input() title: string;
  @Input() delay: number;
  @Input() path: string;
  @Input() icon: string;
  @Input() content: string;
  @Input() size: number;

  constructor() { }

  ngOnInit() {
    console.log(this.title);
    console.log(this.delay);
  }

  getDelay() {
    return this.delay * 50 + 'ms';
  }

}
