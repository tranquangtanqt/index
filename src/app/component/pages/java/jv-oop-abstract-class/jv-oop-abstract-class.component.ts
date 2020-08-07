import { Component, OnInit } from '@angular/core';
import { HighlightService } from "./../../../../services/highlight/highlight.service";

@Component({
  selector: 'app-jv-oop-abstract-class',
  templateUrl: './jv-oop-abstract-class.component.html',
  styleUrls: ['./jv-oop-abstract-class.component.css']
})
export class JvOopAbstractClassComponent implements OnInit {
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
