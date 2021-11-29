import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volkswagen',
  templateUrl: './volkswagen.component.html',
  styleUrls: ['./volkswagen.component.css']
})
export class VolkswagenComponent {

  users = [
    {id: 1, name: 'Volkswagen Gol'},
    {id: 2, name: 'Volkswagen Voyage'},
    {id: 3, name: 'Volkswagen Polo'},
    {id: 4, name: 'Volkswagen Virtus'},
    {id: 5, name: 'Volkswagen Nivus'},
    {id: 6, name: 'Volkswagen T-Cross'},
    {id: 7, name: 'Volkswagen Taos'},
    {id: 8, name: 'Volkswagen Jetta'},
    {id: 9, name: 'Volkswagen Saveiro'},
    {id: 10, name: 'Volkswagen Amarok'}

  ]

}
