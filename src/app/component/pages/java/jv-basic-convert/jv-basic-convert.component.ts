import { Component, OnInit } from '@angular/core';
import { HighlightService } from "./../../../../services/highlight/highlight.service";

@Component({
  selector: 'app-jv-basic-convert',
  templateUrl: './jv-basic-convert.component.html',
  styleUrls: ['./jv-basic-convert.component.css']
})
export class JvBasicConvertComponent implements OnInit {
  private highlighted: boolean = false;

  constructor(private highlightService: HighlightService) { }

  ngOnInit(): void {
  }
  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }
}
