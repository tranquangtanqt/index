import { Component, OnInit } from '@angular/core';
import { NEW_WORD_UNIT_1 } from "./../../../../data/japan/vocabulary/unit_1";
import { NEW_WORD_UNIT_2 } from "./../../../../data/japan/vocabulary/unit_2";
import { IWords } from "./../../../../data/interface";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jp-vocabulary',
  templateUrl: './jp-vocabulary.component.html',
  styleUrls: ['./jp-vocabulary.component.css']
})
export class JpVocabularyComponent implements OnInit {
  /* receive param */
  paramUnitNumber: any;
  private sub: any;
  
  dataWord_Unit1: IWords [];
  dataWord_Unit2: IWords [];
  dataWord_Unit3: IWords [];
  dataWord_Unit4: IWords [];
  dataWord_Unit5: IWords [];
  dataWord_Unit6: IWords [];
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  	this.sub = this.route.params.subscribe(params => {
      this.paramUnitNumber = +params['unitNumber']; 
      if(this.paramUnitNumber){
      	console.log("Chuc nang hien tai = sua: id: " + this.paramUnitNumber)
      } else {
      	console.log("Chuc nang hien tai = add:  id: " + this.paramUnitNumber)
      }
    });
  	this.dataWord_Unit1 = NEW_WORD_UNIT_1;
  	this.dataWord_Unit2 = NEW_WORD_UNIT_2;
  }

  private ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
