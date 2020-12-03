import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUser,faKey } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-carlogin',
  templateUrl: './carlogin.component.html',
  styleUrls: ['./carlogin.component.scss']
})

export class CarloginComponent implements OnInit {
  faUser = faUser;
  faKey = faKey;
  title = 'Car Login';

  constructor(private router: Router){}

  ngOnInit(): void {
  }
}
