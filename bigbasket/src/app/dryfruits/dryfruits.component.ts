import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DbserviceService } from '../dbservice.service';

@Component({
  selector: 'app-dryfruits',
  templateUrl: './dryfruits.component.html',
  styleUrls: ['./dryfruits.component.css']
})
export class DryfruitsComponent implements OnInit {
  detail:object;
  constructor(private ht:HttpClient,private s:DbserviceService) { }

  ngOnInit() {
    this.s.getdryfruits()
    .subscribe(resp=>{console.log(resp);
    this.detail=resp;
    })
  }

}
