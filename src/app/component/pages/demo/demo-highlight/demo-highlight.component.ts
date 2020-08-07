import { Component, OnInit } from '@angular/core';
import { HighlightService } from "./../../../../services/highlight/highlight.service";

@Component({
  selector: 'app-demo-highlight',
  templateUrl: './demo-highlight.component.html',
  styleUrls: ['./demo-highlight.component.css']
})
export class DemoHighlightComponent implements OnInit {
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
