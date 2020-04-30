import { Injectable, SimpleChanges } from '@angular/core';
import { GraphComponent } from '../components/graph/graph.component';
import { Node } from '../models/node';

@Injectable({
  providedIn: 'root',
})
export class DependenciesService {
  private start: number[] = [3, 7];
  private end: number[] = [10, 25];
  private rows: number = 12;
  private columns: number = 30;
  private walls: number[][] = [];
  private graph: GraphComponent = null;
  private path: Node[];
  private visitedNodesInOrder: Node[];
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  getStart(): number[] {
    return this.start;
  }

  setStart(start: number[]) {
    this.start = start;
  }

  getEnd(): number[] {
    return this.end;
  }

  setEnd(end: number[]) {
    this.end = end;
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
}
