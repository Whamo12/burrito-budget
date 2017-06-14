import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';
import { Budget } from '../budget';
import { Category } from '../category';


@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {
  @Input() jumboTotalBurritos: number = 0;

  constructor(private appService: AppService) {}

  ngOnInit() { }

}
