import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrls: ['./ford.component.css']
})
export class FordComponent {

  users = [
    {id: 1, name: 'Ford Ranger'},
    {id: 2, name: 'Ford Territory'},
    {id: 3, name: 'Ford Bronco SPORT'},
    {id: 4, name: 'Ford Mustang'},
    {id: 5, name: 'Ford Trasist'},
    {id: 6, name: 'Ford Maverick'},
    {id: 7, name: 'Ford Focus'},
    {id: 8, name: 'Ford Ecospost'},
    {id: 9, name: 'Ford Fusion'},
    {id: 10, name: 'Ford Fiesta'}

  ]

}
