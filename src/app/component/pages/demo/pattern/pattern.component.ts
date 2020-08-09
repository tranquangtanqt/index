import { Component, OnInit } from '@angular/core';
import { HighlightService } from "./../../../../services/highlight/highlight.service";
import { Pattern, PATTERN_CONST } from "./../../../../data/data-pattern";

@Component({
  selector: 'app-pattern',
  templateUrl: './pattern.component.html',
  styleUrls: ['./pattern.component.css']
})
export class PatternComponent implements OnInit {
  private highlighted: boolean = false;
  pattern: Pattern[];

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
