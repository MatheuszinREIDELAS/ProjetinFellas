import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hyundai',
  templateUrl: './hyundai.component.html',
  styleUrls: ['./hyundai.component.css']
})
export class HyundaiComponent {

  users = [
    {id: 1, name: 'Hyundai Azera'},
    {id: 2, name: 'Hyundai Creta'},
    {id: 3, name: 'Hyundai Elantra'},
    {id: 4, name: 'Hyundai HB20'},
    {id: 5, name: 'Hyundai HB20S'},
    {id: 6, name: 'Hyundai HB20X'},
    {id: 7, name: 'Hyundai Santa FÉ'},
    {id: 8, name: 'Hyundai Tucson'},
    {id: 9, name: 'Hyundai Ix35'},
    {id: 10, name: 'Hyundai Ix35-SPORT'}

  ]

}
