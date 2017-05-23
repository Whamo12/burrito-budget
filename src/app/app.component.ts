import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showTable: boolean = false;

  constructor(appService: AppService) {
    appService.showTable$.subscribe(result => {
      this.showTable = result;
    });
  }

}
