import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss']
})
export class PageContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public welcomeMessage = "Welcome to jStyleGuide. Feel free to explore the elements. Project is based on Angular 8";

}
