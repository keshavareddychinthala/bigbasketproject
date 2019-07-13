import { Component, OnInit } from '@angular/core';
import { GroupService } from '../group.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dealsoftheweek',
  templateUrl: './dealsoftheweek.component.html',
  styleUrls: ['./dealsoftheweek.component.css']
})
export class DealsoftheweekComponent implements OnInit {
  details;
  i;
  constructor(private g:GroupService,private r:ActivatedRoute,private h:HttpClient) { }

  ngOnInit() {
    this.g.deal().subscribe(resp=>this.details=resp);
  }

}
