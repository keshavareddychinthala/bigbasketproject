import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HKserviceService {

  constructor(private ht:HttpClient) { }
  homekitchen(i?:number)
  {
    if(i){
   return this.ht.get("http://localhost:3000/homekitchen/"+i);
  }
  else{
    return this.ht.get("http://localhost:3000/homekitchen");
  }
  
  }
}
