import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmw',
  templateUrl: './bmw.component.html',
  styleUrls: ['./bmw.component.css']
})
export class BMWComponent {

  users = [
    {id: 1, name: 'BMW 1'},
    {id: 2, name: 'BMW M1'},
    {id: 3, name: 'BMW M3'},
    {id: 4, name: 'BMW i3 2013'},
    {id: 5, name: 'BMW serie 8'},
    {id: 6, name: 'BMW X7'},
    {id: 7, name: 'BMW M4'},
    {id: 8, name: 'BMW Vision'},
    {id: 9, name: 'BMW X2'},
    {id: 10, name: 'BMW Z4'}

  ]

}
