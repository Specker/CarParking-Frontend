import { Component, OnInit, HostListener } from '@angular/core';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import * as io from 'socket.io-client'

const SOCKET_ENDPOINT = 'http://localhost:9000'
@Component({
  selector: 'app-carview',
  templateUrl: './carview.component.html',
  styleUrls: ['./carview.component.scss']
})
export class CarviewComponent implements OnInit {
  socket = io.Socket;
  
  faCogs = faCogs;
  title = 'Car View';
  
  carID = "TestCar" // later car specified by the driver

  webcamURL = "https://alduin.speckur.duckdns.org/webcam/"; // later camera url taken from db

  temperature = 0; // changed by socket.IO
  humidity = 0; // changed by socket.IO
  pressure = 0; // changed by socket.IO
  light = 0; // need to set up Light sensor
  distance = 0; // need to set up Ultrasonic sensor

  driver='Miłosz Tester'; // Later taken from db when driver log in
  speed='ALOT!'; // need to set up Accelerometer
  carlights='Always OFF'; // check if lights are on/off
  

  constructor() {this.socket = io.connect(SOCKET_ENDPOINT)}

  ngOnInit(): void {
    this.socket.on(`Car/${ this.carID }/Sensors/Temperature`,(data:number) => {
      this.temperature = data;
    })
    this.socket.on(`Car/${ this.carID }/Sensors/Humidity`,(data:number) => {
      this.humidity = data;
    })
    this.socket.on(`Car/${ this.carID }/Sensors/Pressure`,(data:number) => {
      this.pressure = data;
    })
  }
  


  //Change camera feed url
  saveSettings() {
    this.webcamURL = (document.getElementById("webcamURL") as HTMLInputElement).value ;
  }
   

  // Steering Events
  map = {};
  @HostListener('document:keyup', ['$event'])
  @HostListener('document:keydown', ['$event'])
  keUp(e) {
    this.map[e.keyCode] = e.type == 'keydown';
    this.map[e.keyCode] = e.type == 'keydown';

    if( this.map[87] && this.map[83]) {
      this.socket.emit(`Car/${ this.carID }/Steering`,'WS');
    }
    else if( this.map[87] && this.map[65]) {
      this.socket.emit(`Car/${ this.carID }/Steering`,'WA');
    }
    else if( this.map[87] && this.map[68]) {
      this.socket.emit(`Car/${ this.carID }/Steering`,'WD');
    }
    else if( this.map[83] && this.map[68]) {
      this.socket.emit(`Car/${ this.carID }/Steering`,'SD');
    }
    else if( this.map[83] && this.map[65]) {
      this.socket.emit(`Car/${ this.carID }/Steering`,'SA');
    }
    else if( this.map[87]) {
      this.socket.emit(`Car/${ this.carID }/Steering`,'W');
    }
    else if(this.map[83]) {
      this.socket.emit(`Car/${ this.carID }/Steering`,'S');
    }
    else if( this.map[65]) {
      this.socket.emit(`Car/${ this.carID }/Steering`,'A');
    }
    else if(this.map[68]) {
      this.socket.emit(`Car/${ this.carID }/Steering`,'D');
    }
    else{
      this.socket.emit(`Car/${ this.carID }/Steering`,'');
    }

    
  }
}