import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.css']
})
export class HomeIndexComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  	// let a = document.querySelector("#first .listol ol");
  	// a.style.
  	// document.querySelector("#first .listol ol").style.listStyleImage="url('smiley.gif')"
  }
  ngAfterViewInit() {
    // (document.querySelector('#first .listol ol') as HTMLElement).style.listStyleImage="url('/assets/images/pages/nested.png')";
  }

}
