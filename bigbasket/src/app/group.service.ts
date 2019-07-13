import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private ht:HttpClient,private a:ActivatedRoute) { }
  mango(val?:number) {

    if(val){
      return this.ht.get(`http://localhost:3000/mango/${val}`);
    }
    else{
      return this.ht.get("http://localhost:3000/mango");
    }

   }
   deal(val1?:number) {

    if(val1){
      return this.ht.get(`http://localhost:3000/deal/${val1}`);
    }
    else{
      return this.ht.get("http://localhost:3000/deal");
    }

   }
   org(val2?:number) {

    if(val2){
      return this.ht.get(`http://localhost:3000/org/${val2}`);
    }
    else{
      return this.ht.get("http://localhost:3000/org");
    }

   }
}
