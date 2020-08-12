import { Component, OnInit } from '@angular/core';
import { HighlightService } from "./../../../../services/highlight/highlight.service";
import { IPattern, ITableOfContent } from "./../../../../data/interface";
import { PATTERN_CONST } from "./../../../../data/pattern/data-pattern";

@Component({
  selector: 'app-pt-index',
  templateUrl: './pt-index.component.html',
  styleUrls: ['./pt-index.component.css']
})
export class PtIndexComponent implements OnInit {
  private highlighted: boolean = false;
  pattern: IPattern[];
  dataTocPattern: ITableOfContent [];

  constructor(private highlightService: HighlightService) { }

  ngOnInit(): void {
    this.pattern = PATTERN_CONST;
    this.dataTocPattern = TABLE_OF_CONTENT;
  }
  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }
}

export const TABLE_OF_CONTENT : ITableOfContent [] = [
  {
    id: 1,
    title: "Parent #1 - #4",
    gotoElement: "goto4"
  },{
    id: 2,
    title: "Parent #5 - #8",
    gotoElement: "goto8",
  },{
    id: 3,
    title: "Parent #9 - #12",
    gotoElement: "goto12",
  },{
    id: 4,
    title: "Parent #13 - #16",
    gotoElement: "goto16",
  },{
    id: 5,
    title: "Parent #17 - #20",
    gotoElement: "goto20"
  }

];

// export const TABLE_OF_CONTENT : ITableOfContent [] = [
//   {
//     id: 5,
//     title: "Parent #17 - #20",
//     gotoElement: "goto20",
//     details: [
//       {idDetail: 1, titleDetail: "title2_1", gotoElementDetail: "goto4"},
//       {idDetail: 2, titleDetail: "title2_2", gotoElementDetail: "goto16",},
//       {idDetail: 3, titleDetail: "title2_3", gotoElementDetail: "goto20",},
//     ]
//   }

// ];