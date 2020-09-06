import { Component, OnInit } from '@angular/core';
import { HighlightService } from "./../../../../services/highlight/highlight.service";

@Component({
  selector: 'app-js-angular-ngrx',
  templateUrl: './js-angular-ngrx.component.html',
  styleUrls: ['./js-angular-ngrx.component.css']
})
export class JsAngularNgrxComponent implements OnInit {
  private highlighted: boolean = false;
  code: any;

  constructor(private highlightService: HighlightService) { }

  ngOnInit(): void {
  	this.code = CODE;
  }

  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }
}

export const CODE = {
  code_1:`export class Customer {
	name: String = "";
}`,
	code_2: `import { Action } from "@ngrx/store";

export enum CustomerActionTypes {
	Add = "[Customer Component] Add",
	Remove = "[Customer Component] Remove"
}

export class ActionEx implements Action {
	readonly type;
	payload: any;
}

export class CustomerAdd implements ActionEx {
	readonly type = CustomerActionTypes.Add;

	constructor(public payload: any){

	}
}

export class CustomerRemove implements ActionEx {
	readonly type = CustomerActionTypes.Remove;
	constructor(public payload: any){
		
	}
}`,
	code_3: `import { ActionEx, CustomerActionTypes } from "./customer.actions";

export const initilState = [];

export function CustomerReducer(state = initilState, action: ActionEx) {
	switch (action.type) {
		case CustomerActionTypes.Add:
			return [...state, action.payload];
		case CustomerActionTypes.Remove:
			return [
				...state.slice(0, action.payload),
				...state.slice(action.payload + 1)
			];
		default:
			return state;
	}
}`,
	code_4: `import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule } from '@angular/core'; 
import { AppComponent } from './app.component'; 
import { StoreModule } from '@ngrx/store'; 
import { CustomerReducer } from './customer.reducer'; 
import { AppRoutingModule } from './app-routing.module';
@NgModule({ 
  declarations: [ 
    AppComponent 
  ], 
  imports: [ 
    BrowserModule, 
    StoreModule.forRoot({ customers: CustomerReducer }) 
  ], 
  providers: [], 
  bootstrap: [AppComponent] 
}) 
export class AppModule { }`,
	code_5: `import { Component, OnInit } from '@angular/core';
import { Customer } from "./../models/customer";
import {Observable} from 'rxjs';
import { select, Store } from "@ngrx/store";
import {CustomerRemove} from './../customer.actions';

@Component({
  selector: 'app-customers-view',
  templateUrl: './customers-view.component.html',
  styleUrls: ['./customers-view.component.css']
})
export class CustomersViewComponent implements OnInit {
  customers: Observable<Customer[]>;
  constructor(private store: Store<{customers: Customer[]}>) { 
  	this.customers = store.pipe(select("customers"));
  }

  ngOnInit(): void {
  }
}`,
	code_6: `<h4>List of Customers</h4>
<ul class="customers">
  <li *ngFor="let customer of customers | async; let i=index">
    <span >{{i+1}}.</span> {{customer.name}}   
  </li>
</ul>`,
	code_7: `customers { 
  margin: 0 0 2em 0; 
  list-style-type: none; 
  padding: 0; 
  width: 15em; 
} 
.customers li { 
  background-color: steelblue; 
  color: white; 
  border-radius: 4px; 
  padding: 4px; 
  margin: 2px; 
}`,
	code_8: `import { Component, OnInit } from '@angular/core';

import {select, Store} from '@ngrx/store'; 
import {Customer} from './../models/customer'; 
import {Observable} from 'rxjs'; 
import {CustomerAdd} from './../customer.actions'; 

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  customers: Observable<Customer[]>; 
  constructor(private store: Store<{ customers: Customer[] }>) { 
    this.customers = store.pipe(select('customers')); 
  } 

  ngOnInit(): void {
  }

  AddCustomer(customerName: string) { 
  	console.log(customerName);
    const customer = new Customer(); 
    customer.name = customerName; 
    this.store.dispatch(new CustomerAdd(customer)); 
  }
}`,
	code_9: `<h4>Add New Customer</h4>
<input #box ><button (click)="AddCustomer(box.value)">Add</button>`,
	code_10: `<div style="text-align:center">
  <h1>
    Welcome to {{ title }}!
  </h1>
</div>
<app-customers-view></app-customers-view>
<app-customer-add></app-customer-add>`,
	code_11: `removeCustomer(customerIndex) {
  this.store.dispatch(new CustomerRemove(customerIndex));
}`,
	code_12: `<h4>List of Customers</h4>
<ul class="customers">
  <li *ngFor="let customer of customers | async; let i=index">
    <span >{{i+1}}.</span> {{customer.name}}   
    <button style="float: right" (click)="removeCustomer(i)">Remove</button>
  </li>
</ul>`
}