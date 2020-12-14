import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  id: any;
  private sub: any;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  	this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 
      
      if(this.id){
      	console.log("Chuc nang hien tai = sua: id: " + this.id)
        console.log("lay du lieu tu db theo this.id");
      } else {
      	console.log("Chuc nang hien tai = add:  id: " + this.id)
        console.log("gan du lieu la empty");
      }
    });
  }

  private ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
