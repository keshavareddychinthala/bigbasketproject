import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { empty } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login=new FormGroup({
    'username':new FormControl('',[Validators.required,Validators.minLength(2),Validators.pattern('[a-zA-Z]*')]),
    'password':new FormControl('',[Validators.required,Validators.minLength(2),Validators.pattern('[a-zA-Z0-9]*')])
    
  })
  constructor(private p:Router,private ht:HttpClient,private ar:ActivatedRoute) { }

  ngOnInit() {

  }
reg(){
  this.p.navigate(['signup'])
}

 val=false;
f(e){
console.log(e);
this.ht.get("http://localhost:3000/signup?username="+e.username+"&&password="+e.password).subscribe(resp=>{console.log(resp)
if(resp==0){
  this.val=true;
}
else{
  
  this.p.navigate(['home']);
  this.val=false;
  }})


  
  }
  }
