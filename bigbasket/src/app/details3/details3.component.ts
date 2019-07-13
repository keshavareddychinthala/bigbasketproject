import { Component, OnInit } from '@angular/core';
import { GroupService } from '../group.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details3',
  templateUrl: './details3.component.html',
  styleUrls: ['./details3.component.css']
})
export class Details3Component implements OnInit {
  i;
  details;
  status=false;
  constructor(private g:GroupService,private r:ActivatedRoute,private P:Router) { }

  ngOnInit() {
    this.i=this.r.snapshot.params.id;
    console.log(this.i);
    this.g.deal(this.i).subscribe(res=>this.details=res)
  }
  fn() {
    this.status=true;
     this.P.navigate(['cart'])

  }

}
