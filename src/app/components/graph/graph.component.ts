import { Component, OnInit } from '@angular/core';
import { Node } from '../../models/node';
import { NodeComponent } from '../node/node.component';
import { DependenciesService } from 'src/app/services/dependencies.service';

const ANIMATION_WAIT = 5;

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  //2d matrix representing the graph
  graph: Node[][] = [];
  //pointer to previous node while moving start/end
  prevNode:NodeComponent;
  constructor(private dependenciesService:DependenciesService) { }

  ngOnInit(): void {
    this.dependenciesService.setGraph(this);
    this.initGraph();
  }

  initGraph() {
    //initialize graph
    this.graph = [[]];
    //add nodes to graph
    for (let row = 0; row < this.dependenciesService.getRows(); row++) {
      //push new row
      this.graph.push([]);
      for (let col = 0; col < this.dependenciesService.getColumns(); col++) {
        let current: Node = new Node(row, col);
        //check if it's starting node
        if (row === this.dependenciesService.getStart()[0] && col == this.dependenciesService.getStart()[1]) {
          current.isStart = true;
        }
        //check if it's end node
        if (row === this.dependenciesService.getEnd()[0] && col == this.dependenciesService.getEnd()[1]) {
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
    let visitedNodesInOrder:Node[] = this.dependenciesService.getVisitedNodesInOrder();
    //find finish node animation
    for (let i = 0; i < visitedNodesInOrder.length; i++) {
      let row = visitedNodesInOrder[i].row;
      let column = visitedNodesInOrder[i].column;
      this.graph[row][column] = visitedNodesInOrder[i];
      await this.wait(ANIMATION_WAIT);
    }
  }

  async animatePath(){
    let path = this.dependenciesService.getPath();
    //shortest path found animation
    for (let i = 0; i < path.length; i++) {
      let row = path[i].row;
      let column = path[i].column;
      this.graph[row][column] = path[i];
      await this.wait(ANIMATION_WAIT);
    }
  }

  wait(time: number) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

}
