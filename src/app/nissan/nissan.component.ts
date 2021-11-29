import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nissan',
  templateUrl: './nissan.component.html',
  styleUrls: ['./nissan.component.css']
})
export class NissanComponent {

  users = [
    {id: 1, name: 'Nissan Frontier'},
    {id: 2, name: 'Nissan GTR'},
    {id: 3, name: 'Nissan Kicks'},
    {id: 4, name: 'Nissan Leaf'},
    {id: 5, name: 'Nissan March'},
    {id: 6, name: 'Nissan Sentra'},
    {id: 7, name: 'Nissan Versa'},
    {id: 8, name: 'Nissan V drive'},
    {id: 9, name: 'Nissan Livina'},
    {id: 10, name: 'Nissan Silvia'}
  ]

}
