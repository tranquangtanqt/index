import { Component, OnInit  } from '@angular/core';
import { Observable } from "rxjs";
import { HlService } from "../../../../../core/services/pages/home/hl.service";
import { IHomeLink } from '../../../../../core/interface/IHomeLink';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hl-s',
  templateUrl: './hl-s.component.html',
  styleUrls: ['./hl-s.component.css']
})
export class HlSComponent implements OnInit {

  listHomeLink: Observable<IHomeLink[]>;

  sortedList: any;
  constructor(private hlService: HlService, private router: Router) { }

  ngOnInit(): void {
    this.hlService.getAllData().subscribe(
      responseSuccess => {
        this.listHomeLink = responseSuccess.data;
      }, 
      responseError => {
        this.router.navigate(['/error']);
      }
    );
  }

  listSorted(list: any){
    this.sortedList = list;
    
  }

  onSubmit(){
    if(this.sortedList){
      this.sortedList.forEach((element, index) => {
        element['sortOrder'] = index + 1;
      });

      this.hlService.updateSortLink(this.sortedList).subscribe(
          responseSuccess => {
            this.router.navigate(['/admin/homelink']);
          }, 
          responseError => {
            this.router.navigate(['/error']);
          }
      );
    }
  }
}