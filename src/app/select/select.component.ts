import { ElementRef, HostBinding, Component, OnChanges, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { AUTO_STYLE, animate, style, transition, trigger, state } from "@angular/animations";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  animations: [
    trigger('expandCollapse',[
      state('collapsed', style({
        height: '{{min_height}}',
      }), {params: {min_height: '0px'}}),
      state('expanded', style({
        height: AUTO_STYLE
      })),
      transition('collapsed <=> expanded', animate('0.5s ease'))
    ])
  ]
})
export class SelectComponent implements OnInit {

  @Input() options: Array<any>;
  @Output() selectedCompany = new EventEmitter<object>();

  selection = { name: '- select -' };
  collapsed = true;
  minHeight: string = '0px';
  dropdownState: string = 'collapsed';

  constructor(private element: ElementRef) {

  }

 setStartHeight(){
   this.minHeight = '0px';
 }


  ngOnInit() {
    console.log(this.options);
  }

  toggleChoices () {
    this.collapsed = !this.collapsed;
    this.expandText();
  }

  setSelected (choice: object) {
    this.options.forEach((item, index) => {
      item['selected'] = false;
    });
    choice['selected'] = true;
    this.selectedCompany.emit(choice);
    console.log(choice);
  }

  expandText(){
    this.setStartHeight();
   this.dropdownState = this.dropdownState === 'expanded' ? 'collapsed' : 'expanded';
   console.log(this.dropdownState);
 }

}
