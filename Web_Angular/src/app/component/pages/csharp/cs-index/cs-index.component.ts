import { Component, OnInit } from '@angular/core';
import { HighlightService } from "./../../../../services/highlight/highlight.service";
import { IModal } from "./../../../../data/interface";
import { EXTENTION_METHOD_CONST } from "./../../../../data/csharp/data-extention-method";

@Component({
  selector: 'app-cs-index',
  templateUrl: './cs-index.component.html',
  styleUrls: ['./cs-index.component.css']
})
export class CsIndexComponent implements OnInit {
	private highlighted: boolean = false;
  extentionMethod: IModal[];

  constructor(private highlightService: HighlightService) { }

  ngOnInit(): void {
    this.extentionMethod = EXTENTION_METHOD_CONST;
  }
  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

}
