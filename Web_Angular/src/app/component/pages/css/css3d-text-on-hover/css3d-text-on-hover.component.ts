import { Component, OnInit } from '@angular/core';
import { HighlightService } from "./../../../../services/highlight/highlight.service";

@Component({
  selector: 'app-css3d-text-on-hover',
  templateUrl: './css3d-text-on-hover.component.html',
  styleUrls: ['./css3d-text-on-hover.component.css']
})
export class Css3dTextOnHoverComponent implements OnInit {
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
	<title>3D Text On Hover</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<h1>Learning</h1>
</body>
</html>`,
	code_2: `body {
	padding: 0;
	margin: 0;
	background: #90a7ff;
}

h1 {
	margin: 250px auto;
	text-align: center;
	font-size: 10em;
	color: #fff;
	font-family: "arial";
	font-weight: bold;
	transition: .5s;
}

h1:hover {
	text-shadow: 0 1px 0 #ccc, 0 1px 15px rgba(0, 0, 0, .2),  0 2px 0 #ccc,  0 3px 0 #ccc,  0 4px 0 #ccc,  0 5px 0 #ccc,
				0 6px 0 #ccc,  0 7px 0 #ccc,  0 8px 0 #ccc,  0 9px 0 #ccc,  0 10px 0 #ccc,
				 0 11px 0 #ccc,  0 12px 0 #ccc,  0 20px 30px rgba(0, 0, 0, .5);
}`
}