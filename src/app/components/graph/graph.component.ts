import { Component, OnInit, SimpleChanges, Input} from '@angular/core';
import { Node } from '../../models/node';

const ANIMATION_WAIT = 20;

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  graph: Node[][] = [];
  @Input() path: Node[];
  @Input() start: number[];
  @Input() end: number[];
  @Input() rows: number;
  @Input() columns: number;
  @Input() visitedNodesInOrder: Node[];
  @Input() reset: boolean;
  constructor() { }

  ngOnInit(): void {
    this.resetGraph();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (typeof changes["path"] !== "undefined" && typeof changes["path"].currentValue !== "undefined" &&
    typeof changes["visitedNodesInOrder"] !== "undefined" && typeof changes["visitedNodesInOrder"].currentValue !== "undefined") {
      this.animateAlgo();
    }
    if (typeof changes["reset"] !== "undefined") {
      this.resetGraph();
    }
  }

  resetGraph() {
    //initialize graph
    this.graph = [[]];
    //add nodes to graph
    for (let row = 0; row < this.rows; row++) {
      //push new row
      this.graph.push([]);
      for (let col = 0; col < this.columns; col++) {
        let current: Node = new Node(row, col);
        //check if it's starting node
        if (row === this.start[0] && col == this.start[1]) {
          current.isStart = true;
        }
        //check if it's end node
        if (row === this.end[0] && col == this.end[1]) {
          current.isFinish = true;
        }
        //push new column
        this.graph[row].push(current);
      }
    }
  }

  async animateAlgo() {
    await this.animatedVisitedNodes();
    await this.animatePath();
  }

  async animatedVisitedNodes(){
    //find finish node animation
    for (let i = 0; i < this.visitedNodesInOrder.length; i++) {
      let row = this.visitedNodesInOrder[i].row;
      let column = this.visitedNodesInOrder[i].column;
      this.graph[row][column] = this.visitedNodesInOrder[i];
      await this.wait(ANIMATION_WAIT);
    }
  }

  async animatePath(){
    //shortest path found animation
    for (let i = 0; i < this.path.length; i++) {
      let row = this.path[i].row;
      let column = this.path[i].column;
      this.graph[row][column] = this.path[i];
      await this.wait(ANIMATION_WAIT);
    }
  }

  wait(time: number) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

}
