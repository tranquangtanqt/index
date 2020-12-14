import { Component, OnInit } from '@angular/core';
import { HighlightService } from "./../../../../services/highlight/highlight.service";

@Component({
  selector: 'app-css-skew-text-on-hover',
  templateUrl: './css-skew-text-on-hover.component.html',
  styleUrls: ['./css-skew-text-on-hover.component.css']
})
export class CssSkewTextOnHoverComponent implements OnInit {
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
	<title>Skew Text On Hover</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<div class="content-css">
		<span>L</span>
		<span>E</span>
		<span>A</span>
		<span>R</span>
		<span>N</span>
		<span>I</span>
		<span>N</span>
		<span>G</span>
		<div style="clear: both;"></div>
	</div>
</body>
</html>`,
	code_2: `body {
	padding: 0;
	margin: 0;
	background: #ff90b3;
}

.content-css {
	margin: 250px 200px;
	text-align: center;
	display: inline-block;
	transition: .5s;
}

.content-css span {
	background: #fff;
	width: 120px;
	height: 120px;
	display: block;
	line-height: 120px;
	font-family: 'arial';
	font-weight: bold;
	color: #a0a0a0;
	font-size: 40px;
	float: left;
	transition: .5s;
}

.content-css:hover span:nth-child(odd) {
	transform: skewY(-15deg);
	color: #b5b5b5;
	box-shadow: 0 60px 20px rgba(0, 0, 0, .1);
}

.content-css:hover span:nth-child(even) {
	transform: skewY(15deg);
	color: #b5b5b5;
	box-shadow: 0 60px 20px rgba(0, 0, 0, .1),
				inset 0px 0 30px rgba(0, 0, 0, .2);
}

.content-css:hover {
	transform: rotateX(35deg);
}`
}