import { AppService } from './app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tables: string[] = [];

  constructor(private appService: AppService) {

  }
  search(schemaName) {
    this.appService.getTableNames(schemaName).subscribe(data => {
      this.tables = data;
    })
  }


}
