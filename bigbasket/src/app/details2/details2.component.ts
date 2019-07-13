import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HKserviceService } from '../hkservice.service';

@Component({
  selector: 'app-details2',
  templateUrl: './details2.component.html',
  styleUrls: ['./details2.component.css']
})
export class Details2Component implements OnInit {
  num;picture;
  detail;
  pic;
  name;
  status:boolean=false;
  constructor(private ar1:ActivatedRoute,private s: HKserviceService,private p:Router) { }

  ngOnInit() {
    let idd=this.ar1.snapshot.params.id;

   console.log(idd)
    this.s.homekitchen(idd).subscribe(resp=>{console.log(resp);
      this.detail=resp;
      console.log(this.detail)
     
      })
      

  }
  fn()
  {
    this.status=true;
   
    this.p.navigate(['cart']
      
    )
  }

  }
  


