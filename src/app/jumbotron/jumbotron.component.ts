import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  constructor(private appService: AppService) {}

  ngOnInit() {}

  showTable() {
    this.appService.activateTable();
  }

}
