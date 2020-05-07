import { Component, Inject , OnInit} from '@angular/core';
import {
  MdcDialogRef,
  MDC_DIALOG_DATA
} from '@angular-mdc/web';
import { Step } from '../../models/step';
import { TutorialService } from 'src/app/services/tutorial.service';
import { Pagination } from 'src/app/models/pagination';

@Component({
  selector: 'app-tutorial-dialog',
  templateUrl: './tutorial-dialog.component.html',
  styleUrls: ['./tutorial-dialog.component.css']
})
export class TutorialDialogComponent implements OnInit {
  currentStep: Step;
  pagination: Pagination;
  imgWidth: number = 180;
  constructor(public dialogRef: MdcDialogRef<TutorialDialogComponent>,
    @Inject(MDC_DIALOG_DATA) public data: DialogData,
    private tutorialService: TutorialService) { }

  ngOnInit(): void {
  }

  nextStep() {
    this.currentStep = this.tutorialService.next();
    this.pagination = this.tutorialService.getPagination();
    switch (this.currentStep.image) {
      case "Nodes.PNG": {
        this.imgWidth = 292;
        break;
      }
      case "Menu.PNG": {
        this.imgWidth = 183;
        break;
      }
      case "Walls.PNG": {
        this.imgWidth = 419;
        break;
      }
      case "Path.PNG": {
        this.imgWidth = 420;
        break;
      }
      default: {
        this.imgWidth = 180;
        break;
      }
    }
    if (this.currentStep) {
      let data = {
        title: this.currentStep.title,
        subtitle: this.currentStep.subtitle,
        content: this.currentStep.content,
        image: this.currentStep.image,
        pagination: {
          current: this.pagination.current,
          length: this.pagination.length
        }
      } as DialogData;
      this.dialogRef.componentInstance.data = data;
    }
  }

  prevStep() {
    this.currentStep = this.tutorialService.previous();
    this.pagination = this.tutorialService.getPagination();
    switch (this.currentStep.image) {
      case "Sorted.PNG": {
        this.imgWidth = 578;
        break;
      }
      case "Menu.PNG": {
        this.imgWidth = 163;
        break;
      }
      default: {
        this.imgWidth = 180;
        break;
      }
    }
    if (this.currentStep) {
      let data = {
        title: this.currentStep.title,
        subtitle: this.currentStep.subtitle,
        content: this.currentStep.content,
        image: this.currentStep.image,
        pagination: {
          current: this.pagination.current,
          length: this.pagination.length
        }
      } as DialogData;
      this.dialogRef.componentInstance.data = data;
    }
  }
}

export interface DialogData {
  title: string,
  subtitle: string,
  content: string,
  image: string
  pagination: {
    current: number,
    length: number
  }
  imgWidth: number
}
