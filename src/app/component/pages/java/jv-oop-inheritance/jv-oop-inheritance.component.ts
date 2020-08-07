import { Component, OnInit } from '@angular/core';
import { HighlightService } from "./../../../../services/highlight/highlight.service";

@Component({
  selector: 'app-jv-oop-inheritance',
  templateUrl: './jv-oop-inheritance.component.html',
  styleUrls: ['./jv-oop-inheritance.component.css']
})
export class JvOopInheritanceComponent implements OnInit {
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
