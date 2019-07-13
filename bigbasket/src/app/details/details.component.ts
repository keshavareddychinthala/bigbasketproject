import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbserviceService } from '../dbservice.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  obj1;
  status:boolean=false;
  constructor(private ar:ActivatedRoute,private s:DbserviceService,private p:Router) { }

  ngOnInit() {
    let id=this.ar.snapshot.params.id;
    this.s.getdryfruits(id).subscribe(resp=>{console.log(resp);
      this.obj1=resp;
      })
  }

  
fn()
{
  this.status=true;
  this.p.navigate(['cart'],{
    queryParams:{
      id:this.obj1.id,
      pic:this.obj1.pic

    }
    
  }
)
}

}
