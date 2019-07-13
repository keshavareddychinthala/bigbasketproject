import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  n: any;
  p: any;

  constructor(private ar:ActivatedRoute) {
   
   }

  ngOnInit() {
    this.n=this.ar.snapshot.queryParams.id;
    this.p=this.ar.snapshot.queryParams.pic;
  }

}
