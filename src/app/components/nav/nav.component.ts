import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { AlgoService } from 'src/app/services/algo.service';
import {Node} from '../../models/node';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() path:Node[];
  @Output() pathChange:EventEmitter<Node[]> = new EventEmitter<Node[]>();
  @Input() visitedNodesInOrder:Node[];
  @Output() visitedNodesInOrderChange:EventEmitter<Node[]> = new EventEmitter<Node[]>();
  @Input() rows:number;
  @Input() columns:number;
  @Input() start:number[];
  @Input() end:number[];
  @Input() reset:boolean;
  @Output() resetChange:EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private algoService:AlgoService) { }

  ngOnInit(): void {
  }

  findPath(){
    this.algoService.findPath("dijkstra", this.start, this.end, this.rows, this.columns).subscribe(algoResponse=>{
      //visitedNodesInOrder (search animation)
      this.visitedNodesInOrder = algoResponse["visitedNodesInOrder"].map(node=>{
        let currentNode:Node = new Node(node["row"],node["column"]);
        currentNode.distance = node["distance"];
        currentNode.isFinish = node["finish"];
        currentNode.isStart = node["start"];
        currentNode.isVisited = true;
        return currentNode;
      });
      //bubble up event
      this.visitedNodesInOrderChange.emit(this.visitedNodesInOrder);
      //shortestPath (final path animation)
      this.path = algoResponse["path"].map(node=>{
        let currentNode:Node = new Node(node["row"],node["column"]);
        currentNode.distance = node["distance"];
        currentNode.isFinish = node["finish"];
        currentNode.isStart = node["start"];
        currentNode.isInShortestPath = true;
        return currentNode;
      });
      //bubble up event
      this.pathChange.emit(this.path);
    });
  }

  resetGraph(){
    this.reset = !this.reset;
    this.resetChange.emit(this.reset);
  }

}
