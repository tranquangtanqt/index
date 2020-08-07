import { Component, OnInit } from '@angular/core';
import { HighlightService } from "./../../../../services/highlight/highlight.service";

@Component({
  selector: 'app-jv-oop-construcstors',
  templateUrl: './jv-oop-construcstors.component.html',
  styleUrls: ['./jv-oop-construcstors.component.css']
})
export class JvOopConstrucstorsComponent implements OnInit {
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
