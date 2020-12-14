import { Component, OnInit } from '@angular/core';
import { HighlightService } from "./../../../../services/highlight/highlight.service";

@Component({
  selector: 'app-js-basic-on-onclick',
  templateUrl: './js-basic-on-onclick.component.html',
  styleUrls: ['./js-basic-on-onclick.component.css']
})
export class JsBasicOnOnclickComponent implements OnInit {
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
	<title>Example 1</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<body>
	<button id="add">Add</button>
	<div id="container"></div>
	<script>
		// #1 //
		$("#add").click(function (){
			let str = '<button class="show-alert">Show alert</button>';
			$("#container").append(str);
		});

		// #2 //
		$("#container>button.show-alert").click(function (){
			alert("OK");
		});
	</script>
</body>
</html>`,
  code_2: `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Example 2</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<body>
	<button id="add">Add</button>
	<div id="container"></div>
	<script>
		// #1 //
		$("#add").on("click", function(){
			let str = '<button class="show-alert">Show alert</button>';
			$("#container").append(str);
		})
		
		// #2 //
		$("#container").on("click", "button.show-alert", function(){
			alert("OK");
		})
	</script>
</body>
</html>`,
	code_3: `// #1 //
$("#add").click(function (){
	let str = '<button class="show-alert">Show alert</button>';
 	$("#container").append(str);
});`,
	code_4: `// #1 //
$("#add").on("click", function(){
	let str = '<button class="show-alert">Show alert</button>';
	$("#container").append(str);
})`,
	code_5: `$(".show-alert").click(function (){
	alert("OK");
});`,
	code_6: `$(".show-alert").on("click", function(){
	alert("OK");
})`,
	code_7: `$("#container>button.show-alert").click(function (){
	alert("OK");
});`,
	code_8: `$("#container").on("click", "button.show-alert", function(){
	alert("OK");
})`
}

