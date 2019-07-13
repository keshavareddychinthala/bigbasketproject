import { Component, OnInit } from '@angular/core';
import { GroupService } from '../group.service';

@Component({
  selector: 'app-organic',
  templateUrl: './organic.component.html',
  styleUrls: ['./organic.component.css']
})
export class OrganicComponent implements OnInit {
  details;
  constructor(private p:GroupService) { }

  ngOnInit() {
    this.p.org().subscribe(res=>this.details=res);
  }

}
