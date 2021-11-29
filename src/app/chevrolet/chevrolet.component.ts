import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chevrolet',
  templateUrl: './chevrolet.component.html',
  styleUrls: ['./chevrolet.component.css']
})
export class ChevroletComponent {

  users = [
    {id: 1, name: 'Chevrolet 1'},
    {id: 2, name: 'Onix'},
    {id: 3, name: 'Cruze'},
    {id: 4, name: 'Spin'},
    {id: 5, name: 'Tracker'},
    {id: 6, name: 'Trailblazer'},
    {id: 7, name: 'S10'},
    {id: 8, name: 'Camaro'},
    {id: 9, name: 'Bolt'},
    {id: 10, name: 'Equinox'}
  ]

}
