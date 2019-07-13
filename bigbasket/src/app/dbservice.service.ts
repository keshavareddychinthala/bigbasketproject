import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  constructor(private ht:HttpClient) { 

    
  }
  getdryfruits(idval?:number)
  {
    if(idval){
   return this.ht.get(`http://localhost:3000/dryfruits/${idval}`);
  }
  else{
    return this.ht.get("http://localhost:3000/dryfruits");
  }
  
  }
  
}
