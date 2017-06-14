import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Budget } from './budget';
import { Category } from './category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  budget: Budget = new Budget();
  budgets: Budget[] = [];
  categories: Category[] = [];
  error: Error;
  totalBurritos: number = 0;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getAllBudgets();
    this.getCategories();
  }

  getCategories(): void {
    this.appService.getCategories()
      .then(categories => this.categories = categories)
      .catch(error => this.error = error);
  }

  getAllBudgets(): void {
    this.appService.getAllBudgets()
      .then(budgets => this.budgets = budgets)
      .catch(error => this.error = error)
      .then(success => {
        for (let budget of this.budgets) {
          this.totalBurritos += (budget.cost / 9.5);
        }
      })
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
    if (confirm("Are you sure to reset your burrito budget?")) {
      for (let budget of this.budgets) {
        this.appService.resetBudget(budget.id)
          .then(success => {
            this.getAllBudgets();
            this.totalBurritos = 0;
          })
          .catch(error => this.error = error);
      }
    }
  }

  getStyle(id: number) {
    if (id != 1) {
      return "red";
    }
    else {
      return "green";
    }
  }

}
