import { Component, OnInit, HostListener, ElementRef, Input } from '@angular/core';
import { ITableOfContent } from "./../../../data/interface";

@Component({
  selector: 'app-table-of-content',
  templateUrl: './table-of-content.component.html',
  styleUrls: ['./table-of-content.component.css']
})
export class TableOfContentComponent implements OnInit {
  @Input() childDataToc: ITableOfContent[];
  isShow: boolean = false;
  constructor(private eRef: ElementRef	) { }

  ngOnInit(): void {}

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(this.eRef.nativeElement.contains(event.target)) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  scrollTo(param){
    document.getElementById(param).scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
