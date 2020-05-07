import { Component, OnInit } from '@angular/core';
import { Node } from '../../models/node';
import { NodeComponent } from '../node/node.component';
import { DependenciesService } from 'src/app/services/dependencies.service';

const ANIMATION_WAIT = 1;

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
  start:number[];
  finish:number[];
  constructor(private dependenciesService:DependenciesService) { }

  ngOnInit(): void {
    this.dependenciesService.setGraph(this);
    this.start = this.dependenciesService.getStart();
    this.finish = this.dependenciesService.getFinish();
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
        if (row === this.start[0] && col == this.start[1]) {
          current.isStart = true;
        }
        //check if it's end node
        if (row === this.finish[0] && col == this.finish[1]) {
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
    this.dependenciesService.setAnimationInProgress(false);
  }

  async animatedVisitedNodes(){
    let visitedNodesInOrder:Node[] = this.dependenciesService.getVisitedNodesInOrder();
    //find finish node animation
    for (let i = 0; i < visitedNodesInOrder.length; i++) {
      let row:number = visitedNodesInOrder[i].row;
      let column:number = visitedNodesInOrder[i].column;
      this.graph[row][column] = visitedNodesInOrder[i];
      await this.wait(ANIMATION_WAIT);
    }
  }

  async animatePath(){ 
    let path:Node[] = this.dependenciesService.getPath();
    //shortest path found animation
    for (let i = 0; i < path.length; i++) {
      let row:number = path[i].row;
      let column:number = path[i].column;
      this.graph[row][column] = path[i];
      await this.wait(ANIMATION_WAIT);
    }
  }

  wait(time: number) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

}
