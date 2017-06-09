import { Component } from '@angular/core';
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

  constructor(private appService: AppService) {

  }

  increment(): void {
    this.rowCount++;
    console.log("rowCount: " + this.rowCount);
  }

  onSubmit(budget: Budget): void {
    console.log(budget);
    this.appService.saveBudget(budget);
  }

  cancel(): void {
    
  }

}
