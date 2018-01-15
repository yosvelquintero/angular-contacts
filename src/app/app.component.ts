import { Component, OnInit } from '@angular/core';

import { Constants } from '@app/app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public appName: string;

  public ngOnInit() {
    this.appName = Constants.APP_NAME;
  }

}
