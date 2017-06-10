import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Budget } from '../budget';
import { Category } from '../category';


@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {
  buttonName: string = "Click to Begin!";
  cancelButton: string ="Cancel";
  showButton1: boolean = true;
  showButton2: boolean = false;

  constructor(private appService: AppService) {}

  ngOnInit() {}

  showTable() {
    //this.appService.activateTable();
    this.showButton1 = false;
    this.showButton2 = true;
    if(this.showButton2) {
      this.buttonName = "Add Expense";
    }
  }

  addExpense() {
    this.showButton2 = true;
    //this.appService.addRow();
  }

  cancel() {
    this.appService.deactivateTable();
    this.showButton1 = true;
    this.showButton2 = false;
    this.buttonName = "Click to Begin!";
  }

}
