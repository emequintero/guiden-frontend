import { Component, OnInit } from '@angular/core';
import { AlgoService } from 'src/app/services/algo.service';
import { DependenciesService } from 'src/app/services/dependencies.service';
import { Node } from '../../models/node';
import { MDCSnackbar } from '@material/snackbar';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  algoDescription: string = "Please select an algorithm.";
  algorithms: string[] = ["Dijkstra's Algorithm", "A*", "Best First Search",
    "Breadth First Search", "Depth First Search"];
  selectedAlgo: string = "";
  alert: MDCSnackbar;
  constructor(private algoService: AlgoService, private dependenciesService: DependenciesService) { }

  ngOnInit(): void {
    this.alert = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
  }

  findPath() {
    if (this.selectedAlgo !== "") {
      this.algoService.findPath(this.selectedAlgo,
        this.dependenciesService.getStart(), this.dependenciesService.getFinish(),
        this.dependenciesService.getRows(), this.dependenciesService.getColumns(),
        this.dependenciesService.getWalls())
        .subscribe(algoResponse => {
          //set visited nodes in order
          let visitedNodesInOrder: Node[] = algoResponse["visitedNodesInOrder"].map(node => {
            let currentNode: Node = new Node(node["row"], node["column"]);
            currentNode.distance = node["distance"];
            currentNode.isFinish = node["finish"];
            currentNode.isStart = node["start"];
            currentNode.isWall = node["wall"];
            currentNode.isVisited = true;
            return currentNode;
          });
          this.dependenciesService.setVisitedNodesInOrder(visitedNodesInOrder);
          //path (final path animation)
          let path = algoResponse["path"].map(node => {
            let currentNode: Node = new Node(node["row"], node["column"]);
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
          this.alert.labelText = `Executing ${this.selectedAlgo.toLowerCase()} in the grid!`;
          this.alert.open();
          this.dependenciesService.setAnimationInProgress(true);
        });
    }
    else {
      this.alert.labelText = "Please select an algorithm before sorting.";
      this.alert.open();
    }
  }

  resetGraph() {
    if (!this.dependenciesService.getAnimationInProgress()) {
      this.alert.labelText = "Reset graph to initial state!";
      this.alert.open();
      //reset graph
      this.dependenciesService.resetGraph();
      //reset walls
      this.dependenciesService.resetWalls();
      //reset starting node
      this.dependenciesService.setStart([5, 11]);
      //reset finish node
      this.dependenciesService.setFinish([5, 28]);
    }
    else{
      this.alert.labelText = "Please wait until the visualization completes.";
      this.alert.open();
    }
  }

  setAlgorithm(algo: string) {
    switch (algo.trim()) {
      case "Dijkstra's Algorithm": {
        algo = "dijkstra";
        this.algoDescription = `<strong>Dijkstra's Algorithm</strong> guarantees the shortest path and is <em><strong>weighted
        </strong></em>. <a href="https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm" target="_blank">
        Learn more.</a>`;
        break;
      }
      case "A*": {
        algo = "a*";
        this.algoDescription = `<strong>A*</strong> guarantees the shortest path, is <em><strong>weighted
        </strong></em> and uses <em><strong>heuristics</strong></em>. 
        <a href="https://en.wikipedia.org/wiki/A*_search_algorithm" target="_blank">Learn more.</a>`;
        break;
      }
      case "Best First Search": {
        algo = "best first search";
        this.algoDescription = `<strong>Best First Search</strong> does not guarantee the shortest path, 
        is <em><strong>weighted</strong></em> and uses <em><strong>heuristics</strong></em>. 
        <a href="https://en.wikipedia.org/wiki/Best-first_search" target="_blank">Learn more.</a>`;
        break;
      }
      case "Depth First Search": {
        algo = "dfs";
        this.algoDescription = `<strong>Depth First Search</strong> does not guarantee the shortest path and 
        is <em><strong>not weighted</strong></em>. 
        <a href="https://en.wikipedia.org/wiki/Depth-first_search" target="_blank">Learn more.</a>`;
        break;
      }
      case "Breadth First Search": {
        algo = "bfs";
        this.algoDescription = `<strong>Breadth First Search</strong> guarantees the shortest path and 
        is <em><strong>not weighted</strong></em>. 
        <a href="https://en.wikipedia.org/wiki/Breadth-first_search" target="_blank">Learn more.</a>`;
        break;
      }
    }
    this.selectedAlgo = algo;
  }

}
