import { Component, OnInit } from '@angular/core';
import { faCogs } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-carview',
  templateUrl: './carview.component.html',
  styleUrls: ['./carview.component.scss']
})
export class CarviewComponent implements OnInit {
  faCogs = faCogs;
  title = 'Car View';

  webcamURL = "https://alduin.speckur.duckdns.org/webcam/";

  temperature = 0;
  humidity = 0;
  pressure = 0;
  light = 0;
  distance = 0;

  driver='Miłosz Tester';
  speed='ALOT!';
  carlights='Always OFF';
  
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.temperature = Math.random() * (25 - 20) + 20
      this.humidity = Math.random() * (55 - 50) + 50
      this.pressure = Math.random() * (1020 - 1000) + 1000
      this.light = Math.random() * (100)
      this.distance = this.distance + 1
    }, 1000);
  }
  

  saveSettings() {
    
    this.webcamURL = (document.getElementById("webcamURL") as HTMLInputElement).value ;
  }
}
