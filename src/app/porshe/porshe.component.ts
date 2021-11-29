import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-porshe',
  templateUrl: './porshe.component.html',
  styleUrls: ['./porshe.component.css']
})
export class PorsheComponent {

  users = [
    {id: 1, name: 'Porshe Cayanne'},
    {id: 2, name: 'Porshe Macan'},
    {id: 3, name: 'Porshe Panamera'},
    {id: 4, name: 'Porshe 911'},
    {id: 5, name: 'Porshe 718 Boxster'},
    {id: 6, name: 'Porshe 911 Cabriolet'},
    {id: 7, name: 'Porshe 718 Cayman'},
    {id: 8, name: 'Porshe Taycan'},
    {id: 9, name: 'Porshe Taycan Boxter'},
    {id: 10, name: 'Porshe Macan Cabriolet'}

  ]

}
