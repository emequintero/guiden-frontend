import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'guiden',
  templateUrl: './guiden.component.html',
  styleUrls: ['./guiden.component.css']
})
export class GuidenComponent implements OnInit {
  path:Node[];
  visitedNodesInOrder:Node[];
  rows:number = 12;
  columns:number = 30;
  start:number[] = [3,7];
  end:number[] = [10,25];
  reset:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
