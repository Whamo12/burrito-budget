import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class AppService {

  // Observable string sources
  private showTable = new Subject<boolean>();
  private row = new Subject<boolean>();

  // Observable string streams
  showTable$ = this.showTable.asObservable();
  addRow$ = this.row.asObservable();

  // Service message commands
  activateTable() {
    this.showTable.next(true);
  }

  deactivateTable() {
    this.showTable.next(false);
  }

  addRow() {
    
  }

}
