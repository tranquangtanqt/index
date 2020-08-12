import { Component, OnInit } from '@angular/core';
import { HighlightService } from "./../../../../services/highlight/highlight.service";
import { IPattern } from "./../../../../data/interface";
import { PATTERN_CONST } from "./../../../../data/pattern/data-pattern";

@Component({
  selector: 'app-pattern',
  templateUrl: './pattern.component.html',
  styleUrls: ['./pattern.component.css']
})
export class PatternComponent implements OnInit {
  private highlighted: boolean = false;
  pattern: IPattern[];

  constructor(private highlightService: HighlightService) { }

  ngOnInit(): void {
    this.pattern = PATTERN_CONST;
  }
  
  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }
}
