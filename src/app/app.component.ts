import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CarParking-Frontend';

  constructor(private router: Router){}

  goToPage(page:string):void {
    this.router.navigate([`${page}`])
  }

}
