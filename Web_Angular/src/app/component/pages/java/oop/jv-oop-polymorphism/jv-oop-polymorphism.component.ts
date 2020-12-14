import { Component, OnInit } from '@angular/core';
import { HighlightService } from "./../../../../../services/highlight/highlight.service";

@Component({
  selector: 'app-jv-oop-polymorphism',
  templateUrl: './jv-oop-polymorphism.component.html',
  styleUrls: ['./jv-oop-polymorphism.component.css']
})
export class JvOopPolymorphismComponent implements OnInit {
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
