import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';
import { Budget } from '../budget';
import { Category } from '../category';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  //@Input() count: number;
  budget: Budget[] = [];
  newBudget: Budget;
  canSubmit: boolean;

  constructor(appService: AppService) {

  }

  ngOnInit(): void {
    console.log(this.budget);
  }

  addExpense(): void {
    let newBudget: Budget;
    this.budget.push(newBudget);
    this.canSubmit = true;
  }

  submit(): void {
    this.canSubmit = false;
  }

}
