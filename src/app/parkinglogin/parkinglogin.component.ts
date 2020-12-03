import { Component, OnInit } from '@angular/core';
import { faUser,faKey } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-parkinglogin',
  templateUrl: './parkinglogin.component.html',
  styleUrls: ['./parkinglogin.component.scss']
})
export class ParkingloginComponent implements OnInit {
  faUser = faUser;
  faKey = faKey;
  title = 'Parking Login';

  constructor() { }

  ngOnInit(): void {
  }

}
