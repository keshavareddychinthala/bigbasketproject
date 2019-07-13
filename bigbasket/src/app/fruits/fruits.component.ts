import { Component, OnInit } from '@angular/core';
import { GroupService } from '../group.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
  i;
  details;
  status=false;
  constructor(private g:GroupService,private r:ActivatedRoute) { }

  ngOnInit() {
    this.i=this.r.snapshot.params.id;
    console.log(this.i);
    this.g.mango(this.i).subscribe(res=>this.details=res)
  }
  fn() {
    this.status=true;

  }
}
