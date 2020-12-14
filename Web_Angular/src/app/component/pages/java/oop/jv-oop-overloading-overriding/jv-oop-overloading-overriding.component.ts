import { Component, OnInit } from '@angular/core';
import { HighlightService } from "./../../../../../services/highlight/highlight.service";

@Component({
  selector: 'app-jv-oop-overloading-overriding',
  templateUrl: './jv-oop-overloading-overriding.component.html',
  styleUrls: ['./jv-oop-overloading-overriding.component.css']
})
export class JvOopOverloadingOverridingComponent implements OnInit {
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
