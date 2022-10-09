import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root-page',
  templateUrl: './root-page.component.html',
  styleUrls: ['./root-page.component.scss'],
})
export class RootPageComponent implements OnInit {
  optimistic = 5;
  mode = 8;
  pessimistic = 15;

  constructor() {}

  ngOnInit() {}
}
