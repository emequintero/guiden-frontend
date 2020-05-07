import { Injectable, SimpleChanges } from '@angular/core';
import { GraphComponent } from '../components/graph/graph.component';
import { Node } from '../models/node';

@Injectable({
  providedIn: 'root',
})
export class DependenciesService {
  private start: number[] = [5, 11];
  private finish: number[] = [5, 28];
  private rows: number = 13;
  private columns: number = 40;
  private walls: number[][] = [];
  private graph: GraphComponent = null;
  private path: Node[];
  private visitedNodesInOrder: Node[];
  private animationInProgress:boolean;
  constructor() { }

  getStart(): number[] {
    return this.start;
  }

  setStart(start: number[]) {
    this.start = start;
  }

  getFinish(): number[] {
    return this.finish;
  }

  setFinish(finish: number[]) {
    this.finish = finish;
  }

  setRows(rows: number) {
    this.rows = rows;
  }

  getRows(): number {
    return this.rows;
  }

  setColumns(columns: number) {
    this.columns = columns;
  }

  getColumns(): number {
    return this.columns;
  }

  getWalls(): number[][] {
    return this.walls;
  }

  addWall(wall: number[]) {
    this.walls.push(wall);
  }

  resetWalls() {
    this.walls = [];
  }

  setGraph(graph: GraphComponent) {
    this.graph = graph;
  }

  resetGraph() {
    this.graph.initGraph();
  }

  setVisitedNodesInOrder(visitedNodesInOrder: Node[]) {
    this.visitedNodesInOrder = visitedNodesInOrder;
  }

  getVisitedNodesInOrder(): Node[] {
    return this.visitedNodesInOrder;
  }

  setPath(path: Node[]) {
    this.path = path;
  }

  getPath(): Node[] {
    return this.path;
  }

  animate(){
    this.graph.animateAlgo();
  }

  setAnimationInProgress(animationInProgress:boolean){
    this.animationInProgress = animationInProgress;
  }

  getAnimationInProgress():boolean{
    return this.animationInProgress;
  }
}
