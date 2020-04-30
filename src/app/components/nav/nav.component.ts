import { Component, OnInit } from '@angular/core';
import { AlgoService } from 'src/app/services/algo.service';
import { DependenciesService } from 'src/app/services/dependencies.service';
import {Node} from '../../models/node';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(private algoService:AlgoService, private dependenciesService:DependenciesService) { }

  ngOnInit(): void {
  }

  findPath(){
    this.algoService.findPath("dijkstra", 
    this.dependenciesService.getStart(), this.dependenciesService.getEnd(), 
    this.dependenciesService.getRows(), this.dependenciesService.getColumns(), 
    this.dependenciesService.getWalls())
    .subscribe(algoResponse=>{
      //set visited nodes in order
      let visitedNodesInOrder:Node[] = algoResponse["visitedNodesInOrder"].map(node=>{
        let currentNode:Node = new Node(node["row"],node["column"]);
        currentNode.distance = node["distance"];
        currentNode.isFinish = node["finish"];
        currentNode.isStart = node["start"];
        currentNode.isWall = node["wall"];
        currentNode.isVisited = true;
        return currentNode;
      });
      this.dependenciesService.setVisitedNodesInOrder(visitedNodesInOrder);
      //path (final path animation)
      let path = algoResponse["path"].map(node=>{
        let currentNode:Node = new Node(node["row"],node["column"]);
        currentNode.distance = node["distance"];
        currentNode.isFinish = node["finish"];
        currentNode.isStart = node["start"];
        currentNode.isWall = node["wall"];
        currentNode.isInShortestPath = true;
        return currentNode;
      });
      this.dependenciesService.setPath(path);
      //animate algorithm
      this.dependenciesService.animate();
    });
  }

  resetGraph(){
    //reset graph
    this.dependenciesService.resetGraph();
    //reset walls
    this.dependenciesService.resetWalls();
  }

}
