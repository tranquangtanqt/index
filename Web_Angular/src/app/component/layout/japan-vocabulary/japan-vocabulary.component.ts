import { Component, OnInit, Input } from '@angular/core';
import { IWords } from "./../../../data/interface";

import { Router } from '@angular/router';

@Component({
  selector: 'app-japan-vocabulary',
  templateUrl: './japan-vocabulary.component.html',
  styleUrls: ['./japan-vocabulary.component.css']
})
export class JapanVocabularyComponent implements OnInit {
  @Input() data: IWords[];
  @Input() unitNumber: number;
  // data: IWords [];
  /* chi so cau tra loi dung */
  indexAnswer: number = 0;
  /* Mang chua cau tra loi */
  arrAnswer: any;
  /* Hien thi icon khi tra loi dung */
  flagAnswerCorrect: boolean = false;
  /* Hien thi icon khi tra loi sai */
  flagAnswerWrong: boolean = false;
  /* khi da chon cau tra loi => khong cho click tiep dap an */
  enableClick: boolean = true;
  /* hien thi loading */
  show: boolean = false;
  /* Phan tram dung */
  percenCorrect: number = 0;
  /* So cau dung */
  scoreCorrect: number = 0;
  /* So cau sai */
  scoreWrong: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
  	this.arrAnswer = new Array();
  	this.show = false;
  	this.makeAnswer();
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
	  	[a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  onAnswer(index){
  	this.enableClick = false;
  	if(index == this.indexAnswer){
  		this.flagAnswerCorrect = true;
  		this.scoreCorrect++;
  	} else {
  		this.flagAnswerWrong = true;
  		this.scoreWrong++;
  	}
  	this.percenCorrect = Math.round(this.scoreCorrect/(this.scoreCorrect + this.scoreWrong) * 100);
  	setTimeout(() => {
  		this.flagAnswerWrong = false;
  		this.flagAnswerCorrect = false;
  		this.enableClick = true;
  		this.makeAnswer();
  	}, 1500); 
  	
  }

  makeAnswer(){
  	this.arrAnswer.length = 0;
  	this.indexAnswer = 0;
  	this.show = true;
  	this.indexAnswer = Math.floor(this.data.length * Math.random());
  	this.arrAnswer.push(this.indexAnswer);
  	while(true){
  		let randomIndex = Math.floor(this.data.length * Math.random());
  		if(this.arrAnswer.includes(randomIndex)){
  			continue;
  		} else {
  			this.arrAnswer.push(randomIndex);
  			if(this.arrAnswer.length === 4){
  				this.shuffle(this.arrAnswer);
  				setTimeout(() => {
	  				this.show = false;
				}, 500);
				break;
  			}
  		}
  	}
  }

 
}
