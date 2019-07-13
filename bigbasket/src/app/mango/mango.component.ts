import { Component, OnInit } from '@angular/core';
import { GroupService } from '../group.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mango',
  templateUrl: './mango.component.html',
  styleUrls: ['./mango.component.css']
})
export class MangoComponent implements OnInit {
  details;
  i;
  constructor(private g:GroupService,private r:ActivatedRoute,private h:HttpClient) { }

  ngOnInit() {
    this.g.mango().subscribe(resp=>this.details=resp);
  }

}
