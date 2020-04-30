import { Component, OnInit , Input} from '@angular/core';
import {Node} from '../../models/node';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {
  @Input() node:Node;
  className:string;
  constructor() { }

  ngOnInit(): void {
    if(this.node.isInShortestPath === true){
      this.className = "node path";
    }
    else if(this.node.isStart === true){
      this.className = "node start";
    }
    else if(this.node.isFinish === true){
      this.className = "node finish";
    }
    else if(this.node.isVisited === true){
      this.className = "node visited";
    }
    else{
      this.className = "node";
    }
  }

}
