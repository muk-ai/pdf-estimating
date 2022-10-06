import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root-page',
  templateUrl: './root-page.component.html',
  styleUrls: ['./root-page.component.scss'],
})
export class RootPageComponent implements OnInit {
  optimistic = 10;
  mode = 18;
  pessimistic = 30;

  constructor() {}

  ngOnInit() {}
}
