import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { HlService } from "../../../../../services/pages/home/hl.service";
import { IHomeLink } from '../../../../../object/IHomeLink';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hl-i',
  templateUrl: './hl-i.component.html',
  styleUrls: ['./hl-i.component.css']
})
export class HlIComponent implements OnInit {

  listHomeLink: Observable<IHomeLink[]>;

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
  
  updateRedirect(id: number){
    this.router.navigate(['/admin/homelink/update/' + id]);
  }

  delete(id: number){
    this.hlService.deleteLink(id)
    .subscribe(
      responseSuccess => {
        this.listHomeLink = responseSuccess.data;
      },
      responseError => {
        this.router.navigate(['/error']);
      });
  }
}