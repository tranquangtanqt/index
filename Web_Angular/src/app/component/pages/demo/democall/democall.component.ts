import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-democall',
  templateUrl: './democall.component.html',
  styleUrls: ['./democall.component.css']
})
export class DemocallComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectAdd(){
  	this.router.navigate(['/demo/demo']);
  }

  redirectEdit(id){
	this.router.navigate(['/demo/demo', id]);
  }
}
