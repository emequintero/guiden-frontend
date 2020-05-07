export class Pagination{
    constructor(current:number, length:number){
        this.current = current;
        this.length = length;
    }
    length:number;
    current:number;
}