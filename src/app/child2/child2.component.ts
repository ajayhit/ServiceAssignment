import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  number: number
  constructor(private hs:Service1Service ) {
    this.number=0;
   }

  ngOnInit(): void {
    this.hs.getData().subscribe((n:number)=> {
      this.number=n;
    });
  }
  onClick()
  {
    this.hs.decrese();
  }
}
