import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {
value:number;
datavalue=new BehaviorSubject(null);
  constructor() { 
    this.value=0;
    this.datavalue.next(0);
  }

  increase()
  {
this.value++;
this.datavalue.next(this.value);
  }
  decrese()
  {
this.value--;
this.datavalue.next(this.value);
  }
  getData() {
    return this.datavalue.asObservable();
  }
}  
