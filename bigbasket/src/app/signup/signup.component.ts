import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup=new FormGroup({
    'username':new FormControl('',[Validators.required,Validators.minLength(4),Validators.pattern('[a-zA-Z]*')]),
    'password':new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern('[a-zA-Z]*')]),
    'contact':new FormControl('',[Validators.required,Validators.minLength(10),Validators.pattern('[0-9]*'),Validators.maxLength(10)]),
    'address':new FormControl('',[Validators.required,Validators.minLength(10),Validators.pattern('[a-zA-Z]*')]),

  })
  details: Object;
  constructor(private ht:HttpClient,private r:Router) { }

  ngOnInit() {
  }
  
f(e){
  var obj={
    username:e.username,
    password:e.password,
    contact:e.contact,
    address:e.address
  }
  this.ht.post("http://localhost:3000/signup/",obj).subscribe(resp=>this.details=resp)
  // this.r.navigate(['navbar'],{
  //   queryParams:{
  //     name:e.username
  //   }
  // })
  this.r.navigate(['login'])
}


}
