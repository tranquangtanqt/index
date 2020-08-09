import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-table-of-content',
  templateUrl: './table-of-content.component.html',
  styleUrls: ['./table-of-content.component.css']
})
export class TableOfContentComponent implements OnInit {
  showToc: String;
  text:String;
  isShow: boolean = false;
  constructor(private eRef: ElementRef	) { }

  ngOnInit(): void {
  	this.showToc = "toc-show";
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(this.eRef.nativeElement.contains(event.target)) {
      this.text = "clicked inside";
      this.showToc = "toc-show";
      this.isShow = true;
    } else {
      this.text = "clicked outside";
      this.showToc = "toc-hidden";
      this.isShow = false;
    }
  }
}
