import { Injectable } from '@angular/core';
import { Step } from '../models/step';
import { Pagination } from '../models/pagination';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  private steps: Step[] = [];
  private stepPointer: number = 0;
  constructor() {
    this.steps.push(new Step("Welcome to Guiden!",
      "This brief guide takes you through all of this application's features.",
      `If you'd rather get started now, hit the <em><strong>"Skip Tutorial"</strong></em> 
                    button below. 
                    To continue with the tutorial click <em><strong>"Next!"</strong></em>`,
      "Logo.png"));
    this.steps.push(new Step("What is a pathfinding algorithm?",
      `A Pathfinding Algorithm is used to identify the path that meets requirements
       between two points.`,
      `<em><strong>Nodes</strong></em> will be used to represent two points in this application.`,
      "Nodes.PNG"));
    this.steps.push(new Step("Choosing an algorithm",
      `Select an algorithm from the "Algorithms" drop-down menu.`,
      `Make sure to try them all! Each one varies in efficiency depending on the size of the input
                     array.`,
      "Menu.PNG"));
    this.steps.push(new Step("Which can you choose from?",
      `Algorithms have flaws too!`,
      `
      <strong>Dijkstra's Algorithm</strong> guarantees the shortest path and is <em><strong>weighted
      </strong></em>.<br>
      <strong>A*</strong> guarantees the shortest path, is <em><strong>weighted
      </strong></em> and uses <em><strong>heuristics</strong></em>.<br>
      <strong>Best First Search</strong> does not guarantee the shortest path, 
      is <em><strong>weighted</strong></em> and uses <em><strong>heuristics</strong></em>.<br>
      <strong>Depth First Search</strong> does not guarantee the shortest path and 
      is <em><strong>not weighted</strong></em>.<br> 
      <strong>Breadth First Search</strong> guarantees the shortest path and 
      is <em><strong>not weighted</strong></em>.`,
      "Algorithms.png"));
      this.steps.push(new Step("What can I do?",
        `Grid & Node alterations`,
        `Drag the <em><strong>nodes</strong></em> accross the grid to change the start/end placement. 
        Click and drag on an empty spot to create <em><strong>walls</strong></em> that the algorithm will
        have to dodge.`,
        "Walls.PNG"));
    this.steps.push(new Step("How do I work this thing?",
      `Getting started with the app`,
      `Select an option from the <em><strong>"ALGORITHMS"</strong></em> drop down menu and click 
      <em><strong>"FIND PATH!"</strong></em>`,
      "Path.PNG"));
    this.steps.push(new Step("Have fun!",
      `I know that you'll have lots of fun using this visualization tool!`,
      `If you're curious, the code for this application is publicly available on my 
                    <a href="https://github.com/matthiasquintero/guiden-frontend" target="_blank">Github</a>.`,
      "Begin.png"));
  }

  getSteps(): Step[] {
    return this.steps;
  }

  setSteps(steps: Step[]) {
    this.steps = steps;
  }

  peek(): Step {
    return this.steps[this.stepPointer];
  }

  next(): Step {
    let step: Step = null;
    //check if the pointer is out of max bound
    if (this.stepPointer >= this.steps.length - 1) {
      //set pointer back to the end if it was out of bounds
      this.stepPointer = this.steps.length - 1;
      //don't increase the pointer
      step = this.steps[this.stepPointer];
    }
    else {
      step = this.steps[++this.stepPointer];
    }
    return step;
  }

  previous(): Step {
    let step: Step = null;
    //check if the pointer is out of min bound
    if (this.stepPointer <= 0) {
      //set pointer back to 0 if it was out of bounds
      this.stepPointer = 0;
      //don't increase the pointer
      step = this.steps[this.stepPointer];
    }
    else {
      step = this.steps[--this.stepPointer];
    }
    return step;
  }

  getPagination(): Pagination {
    return new Pagination(this.stepPointer+1, this.steps.length);
  }
}
