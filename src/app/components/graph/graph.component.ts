import { Component, OnInit } from '@angular/core';
import { Node } from '../../models/node';

const ROWS = 16;
const COLUMNS = 38;

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  graph: Node[][] = [];
  constructor() { }

  ngOnInit(): void {
    //initialize graph
    for(let row = 0; row < ROWS; row++){
      //push new row
      this.graph.push([]);
      for(let col = 0; col < COLUMNS; col++){
        //push new column
        this.graph[row].push(new Node(row, col));
      }
    }
  }

}
