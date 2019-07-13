import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  nam: any;
  

  constructor(private p:Router,private ht:HttpClient,private ar:ActivatedRoute) { }

  ngOnInit() {
this.nam=this.ar.snapshot.queryParams.name;
  }
  login=new FormGroup({
    'username':new FormControl('',[Validators.required,Validators.minLength(2),Validators.pattern('[a-zA-Z]*')]),
    'password':new FormControl('',[Validators.required,Validators.minLength(2),Validators.pattern('[a-zA-Z0-9]*')])
    
  })
 
sh(s){
  // console.log(s);
  if(s.search==="dryfruits" ||s.search==="dry" ||s.search==="dryfr"  ){
 this.p.navigate(['dryfruits'])
  }
  if(s.search==="mango" ||s.search==="mangoes" ||s.search==="man"  ){
    this.p.navigate(['mango'])
     }
     if(s.search==="home" ||s.search==="kitchen" ||s.search==="home&kitchen"  ){
      this.p.navigate(['kitchen'])
       }
       if(s.search==="exotic" ||s.search==="fv" ||s.search==="exotic&fv"  ||s.search==="beauty"  ){
        this.p.navigate(['beauty'])
         }
         if(s.search==="organic" ||s.search==="or" ||s.search==="natural"  ||s.search==="desi"  ){
          this.p.navigate(['organic'])
           }
           if(s.search==="deals" ||s.search==="offers" ||s.search==="dealsoftheweek"  ||s.search==="discounts"  ){
            this.p.navigate(['deals'])
             }
            //  else {
            //    this.p.navigate(['home'])
            //  }  
}
  


}



