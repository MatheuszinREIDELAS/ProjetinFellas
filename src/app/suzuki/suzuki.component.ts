import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suzuki',
  templateUrl: './suzuki.component.html',
  styleUrls: ['./suzuki.component.css']
})
export class SuzukiComponent {

  users = [
    {id: 1, name: 'Suzuki Baleno'},
    {id: 2, name: 'Suzuki Grand Vitara'},
    {id: 3, name: 'Suzuki Ignis'},
    {id: 4, name: 'Suzuki Jimny'},
    {id: 5, name: 'Suzuki S-Cross'},
    {id: 6, name: 'Suzuki Swift'},
    {id: 7, name: 'Suzuki Sx4'},
    {id: 8, name: 'Suzuki Vitara'},
    {id: 9, name: 'Suzuki Wangon'},
    {id: 10, name: 'Suzuki Vitara Sport'}

  ]

}
