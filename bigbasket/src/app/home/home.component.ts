import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  images = [{
    pic: "assets/h3.JPG"
  },
  {
    pic: "assets/h4.JPG"
  },
  {
    pic: "assets/h5.JPG"
  },
  {
    pic: "assets/home1.JPG"
  }]
  images1=[{
    pic:"assets/b11.JPG",
    link :"https://www.bigbasket.com/hdfc-bigdays//"

  },
  {
    pic:"assets/b12.JPG"
    ,
    link :"https://www.bigbasket.com/hdfc-bigdays//"
  },
  {
    pic:"assets/b12.JPG",
    link :"https://www.bigbasket.com/hdfc-bigdays//"
  },
  {
    pic:"assets/b11.JPG",
    link :"https://www.bigbasket.com/hdfc-bigdays//"
  }]

}
