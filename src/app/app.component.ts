import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  time = 0;
  showMondrian = false;
  showSelector = false;
  showLoading = false;
  showTitle = false;
  selectedCompany: object;

  companies = [
    { name: 'Novartis' },
    { name: 'Walmart' },
    { name: 'Wegmans' }
  ];

  data = [
    {
      title: 'Manage Users',
      path: '/manage/users',
      icon: 'assets/manage users.svg',
    },
    {
      title: 'Orders & Subscriptions',
      path: '/manage/orders',
      icon: 'assets/orders and subscriptions.svg',
    },
    {
      title: 'Data Upload',
      path: '/manage/data',
      icon: 'assets/data upload.svg',
    },
    {
      title: 'Module Settings',
      path: '/manage/orders',
      icon: 'assets/module settings.svg',
    },
    {
      title: 'Organization Content',
      path: '/manage/content',
      icon: 'assets/organization content.svg',
    },
    {
      title: 'Content Library Manager',
      path: '/manage/library',
      icon: 'assets/content library.svg',
    },
  ];

  constructor() {

  }

  ngOnInit() {

    /*
    THIS TIMEOUT CONTROLS THE ORER OF THINGS APPEARING ON THE PAGE
     */
    let timeoutId = setInterval(() => {
      console.log(this.time);
      switch(this.time){
        case 0:
          this.showLoading = true;
          break;
        case 2:
          this.showLoading = false;
          this.showTitle = true;
          break;
        case 3:
          this.showSelector = true;
          break;
        case 4:
          this.showMondrian = true;
      }
      this.time++;
    }, 1000);
  }

  /*
  THIS IS USED TO HANDLE SELECTION FROM THE DROP DOWN
   */
  onSelectCompany (event) {
    console.log('from parent', event);
    this.showMondrian = true;
  }
}
