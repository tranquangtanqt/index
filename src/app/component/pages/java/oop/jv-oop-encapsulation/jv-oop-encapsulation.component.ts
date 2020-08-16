import { Component, OnInit } from '@angular/core';
import { HighlightService } from "./../../../../../services/highlight/highlight.service";

@Component({
  selector: 'app-jv-oop-encapsulation',
  templateUrl: './jv-oop-encapsulation.component.html',
  styleUrls: ['./jv-oop-encapsulation.component.css']
})
export class JvOopEncapsulationComponent implements OnInit {
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
