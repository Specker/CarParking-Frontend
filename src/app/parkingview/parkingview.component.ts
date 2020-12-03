import { Component, OnInit } from '@angular/core';
import { faLockOpen,faLock,faCamera } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-parkingview',
  templateUrl: './parkingview.component.html',
  styleUrls: ['./parkingview.component.scss']
})
export class ParkingviewComponent implements OnInit {
  faLockOpen = faLockOpen
  faLock = faLock
  faCamera = faCamera
  
  title = 'Parking View';

  

  constructor() { }

  ngOnInit(): void {
  }

}
