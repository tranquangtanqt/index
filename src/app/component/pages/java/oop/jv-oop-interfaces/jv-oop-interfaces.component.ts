import { Component, OnInit } from '@angular/core';
import { HighlightService } from "./../../../../../services/highlight/highlight.service";

@Component({
  selector: 'app-jv-oop-interfaces',
  templateUrl: './jv-oop-interfaces.component.html',
  styleUrls: ['./jv-oop-interfaces.component.css']
})
export class JvOopInterfacesComponent implements OnInit {
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
