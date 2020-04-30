export class Node{
    constructor(row:number, column:number){
            this.column = column;
            this.row = row;
        }
    column:number;
    row:number;
    distance:number = Infinity;
    isFinish:boolean = false;
    isStart:boolean = false;
    isWall:boolean = false;
    isInShortestPath:boolean = false;
    isVisited:boolean = false;
    previousNode:Node = null;
}