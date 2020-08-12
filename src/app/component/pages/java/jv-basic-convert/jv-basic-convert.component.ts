import { Component, OnInit } from '@angular/core';
import { HighlightService } from "./../../../../services/highlight/highlight.service";
import { ITableOfContent } from "./../../../../data/interface";

@Component({
  selector: 'app-jv-basic-convert',
  templateUrl: './jv-basic-convert.component.html',
  styleUrls: ['./jv-basic-convert.component.css']
})
export class JvBasicConvertComponent implements OnInit {
  private highlighted: boolean = false;
  dataToc: ITableOfContent [];

  constructor(private highlightService: HighlightService) { }

  ngOnInit(): void {
    this.dataToc = TABLE_OF_CONTENT;
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
    title: "Đổi số thành chuỗi",
    gotoElement: "goto1"
  },{
    id: 2,
    title: "Đổi chuỗi thành số",
    gotoElement: "goto2",
  },{
    id: 3,
    title: "Chuyển đổi từ hệ thập phân sang nhị phân, bát phân, thập lục phân",
    gotoElement: "goto3",
  },{
    id: 4,
    title: "Chuyển đổi từ hệ nhị phân, bát phân, thập lục phân sang hệ thập phân",
    gotoElement: "goto4",
  }
];
