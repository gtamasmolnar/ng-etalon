import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {
    @Input('class') myClass: string;
    @Input('id') myId: string;
    @Input('p-title') pTitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}
