import { Component, OnInit } from '@angular/core';
import { HighlightService } from "./../../../../services/highlight/highlight.service";

@Component({
  selector: 'app-css-image-hover-effects1',
  templateUrl: './css-image-hover-effects1.component.html',
  styleUrls: ['./css-image-hover-effects1.component.css']
})
export class CssImageHoverEffects1Component implements OnInit {
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
	<title>CSS Image Hover Effects</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<div class="css-content">
		<img src="shutterstock.jpg" alt="">
		<div class="css-text-box">
			<h2>Image Hover Effects</h2>
			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptates quas, ex quia neque aperiam incidunt quos molestias! Debitis ex, quibusdam explicabo eius vel voluptatum accusamus ratione repellat quo doloribus.</p>
		</div>
	</div>
</body>
</html>`,
	code_2: `body {
	padding: 0;
	margin: 0;
	background: #262626;
}

.css-content {
	width: 400px;
	height: 250px;
	background: #000;
	font-family: "arial";
	color: #fff;
	margin: 200px auto;
	overflow: hidden;
	perspective: 50em;
	box-sizing: border-box;
	transition: .5 ease;
	position: relative;
	border: 1px solid rgba(255, 255, 255, .2);
}

.css-content img {
	width: 100%;
	transition: .5s;
	transform-origin: 0 100%;
}

.css-text-box {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	z-index: 1;
	opacity: 0;
	background: #f00;
	padding: 20px 30px;
	transform: rotateX(-90deg);
	transform-origin: 50% 0%;
	transition: .5s;
}

.css-text-box h2,
.css-text-box p{
	line-height: 1.3em;
}

.css-content:hover img {
	transform: rotateX(90deg);
	opacity: 0;
}

.css-content:hover .css-text-box{
	opacity: 1;
	transform: rotateX(0deg);
	transition-delay: .3s;
}`
}

