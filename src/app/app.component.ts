import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Budget } from './budget';
import { Category } from './category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  rowCount: number = 1;
  budget: Budget = new Budget();
  budgets: Budget[] = [];
  error: Error;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getAllBudgets();
  }

  increment(): void {
    this.rowCount++;
    console.log("rowCount: " + this.rowCount);
  }

  getAllBudgets(): void {
    this.appService.getAllBudgets()
      .then(budgets => this.budgets = budgets)
      .catch(error => this.error = error);
  }

  onSubmit(budget: Budget): void {
    this.appService.saveBudget(budget)
      .then(success => {
        this.getAllBudgets();
      })
      .catch(error => this.error = error);
  }

  reset(): void {
    this.appService.resetBudget()
      .then(budgets => budgets = budgets)
      .catch(error => this.error = error);
  }

}
