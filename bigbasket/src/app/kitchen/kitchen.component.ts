import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HKserviceService } from '../hkservice.service';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {
  detail:object;
  constructor(private ht:HttpClient,private s:HKserviceService) { }

  ngOnInit() {
    this.s.homekitchen()
    .subscribe(resp=>{console.log(resp);
    this.detail=resp;
    })
  }

}
