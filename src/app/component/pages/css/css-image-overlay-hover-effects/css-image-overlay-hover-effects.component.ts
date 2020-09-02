import { Component, OnInit } from '@angular/core';
import { HighlightService } from "./../../../../services/highlight/highlight.service";

@Component({
  selector: 'app-css-image-overlay-hover-effects',
  templateUrl: './css-image-overlay-hover-effects.component.html',
  styleUrls: ['./css-image-overlay-hover-effects.component.css']
})
export class CssImageOverlayHoverEffectsComponent implements OnInit {
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
  <title>CSS Image Overlay Hover Effects</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="content-css">
    <div class="image-box-css">
      <img src="shutterstock.jpg" alt="">
      <div class="text-box-css">
        <h2>Image Overlay Hover Effects</h2>
      </div>
    </div>
  </div>
</body>
</html>`,
	code_2: `body {
  padding: 0;
  margin: 0;
  background: #003444;
}

.content-css {
  margin: 100px auto;
  width: 600px;
}

.image-box-css {
  position: relative;
  overflow: hidden;
}

.image-box-css img {
  width: 100%;
  transition: .5s;
}

.text-box-css {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255, 0, 0, .9);
  transition: .5s;
}

.text-box-css h2 {
  padding: 0;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  color: #fff;
}

.image-box-css:hover .text-box-css {
  left: 0%;
}

.image-box-css:hover img {
  transform: scale(1.2);
}`
}
