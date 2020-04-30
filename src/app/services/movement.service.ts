import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovementService {
  private movingStartNode:boolean;
  private movingEndNode:boolean;
  private updatingNodes:boolean;
  constructor() { }

  setMovingStartNode(movingStartNode:boolean){
    this.movingStartNode = movingStartNode;
  }

  getMovingStartNode():boolean{
    return this.movingStartNode;
  }

  setMovingEndNode(movingEndNode:boolean){
    this.movingEndNode = movingEndNode;
  }

  getMovingEndNode():boolean{
    return this.movingEndNode;
  }

  setUpdatingNodes(updatingNodes:boolean){
    this.updatingNodes = updatingNodes;
  }

  getUpdatingNodes():boolean{
    return this.updatingNodes;
  }

}
