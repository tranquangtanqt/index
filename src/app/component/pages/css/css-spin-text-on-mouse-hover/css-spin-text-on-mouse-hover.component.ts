import { Component, OnInit } from '@angular/core';
import { HighlightService } from "./../../../../services/highlight/highlight.service";

@Component({
  selector: 'app-css-spin-text-on-mouse-hover',
  templateUrl: './css-spin-text-on-mouse-hover.component.html',
  styleUrls: ['./css-spin-text-on-mouse-hover.component.css']
})
export class CssSpinTextOnMouseHoverComponent implements OnInit {
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
	code_1: `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Spin Text On Mouse Hover</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
	<ul>
		<li>L</li>
		<li>E</li>
		<li>A</li>
		<li>R</li>
		<li>N</li>
		<li>I</li>
		<li>N</li>
		<li>G</li>
		<div style="clear: both;"></div>
	</ul>
</body>
</html>`,
	code_2: `body {
	margin: 0;
	padding: 0;
	background: #ff008b
}
ul{
	margin: 50px;
	padding: 0;
	border: 10px solid #fff;
	position: absolute;
	display: inline-block;;
	top: 40%;
	left: 50%;
	transform: translateY(-50%) translateX(-50%);
}
ul li {
	list-style: none;
	color: #fff;
	float: left;
	font-size: 5em;
	font-family: 'arial';
	transition: .9s;
}
ul:hover li {
	transform: rotateX(360deg);
}

ul:hover li:nth-child(1){
	transition-delay: .9s;
}
ul:hover li:nth-child(2){
	transition-delay: .8s;
}
ul:hover li:nth-child(3){
	transition-delay: .7s;
}
ul:hover li:nth-child(4){
	transition-delay: .6s;
}
ul:hover li:nth-child(5){
	transition-delay: .5s;
}
ul:hover li:nth-child(6){
	transition-delay: .4s;
}
ul:hover li:nth-child(7){
	transition-delay: .3s;
}
ul:hover li:nth-child(8){
	transition-delay: .2s;
}`
}