import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HlService } from "../../../../../services/pages/home/hl.service";
import { IHomeLink } from '../../../../../object/IHomeLink';
import { CommonUtils } from "../../../../../services/utils";

@Component({
  selector: 'app-hl-u',
  templateUrl: './hl-u.component.html',
  styleUrls: ['./hl-u.component.css']
})
export class HlUComponent implements OnInit {
  id: number;
  homeLink: IHomeLink;
  errors: Object;

  constructor(private route: ActivatedRoute, private router: Router,
    private hlService: HlService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.hlService.getLink(this.id).subscribe(
      responseSuccess => {
        this.homeLink = responseSuccess.data;
      }, 
      responseError => {
        this.router.navigate(['/error']);
      }
    );
  }

  onSubmit(){
    this.hlService.updateLink(this.id, this.homeLink)
      .subscribe(
        responseSuccess => {
          let common = new CommonUtils(responseSuccess.data);
          if(common.checkObjectIsNullOrEmpty()){
            this.router.navigate(['/admin/homelink']);
          } else {
            this.errors = responseSuccess.data;
          }
        }, 
        responseError => {
          this.router.navigate(['/error']);
        }
      );
  }
}
