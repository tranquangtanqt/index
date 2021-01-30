import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HlService } from "../../../../../services/pages/home/hl.service";
import { IHomeLink } from '../../../../../object/IHomeLink';
import { CommonUtils } from "../../../../../services/utils";
@Component({
  selector: 'app-hl-c',
  templateUrl: './hl-c.component.html',
  styleUrls: ['./hl-c.component.css']
})
export class HlCComponent implements OnInit {

  homeLink: IHomeLink = {} as IHomeLink;

  errors: Object;

  constructor(private lhpService: HlService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.lhpService.createLink(this.homeLink).subscribe(
      responseSuccess => {
        let common = new CommonUtils(responseSuccess.data);
        if(common.checkObjectIsNullOrEmpty()){
          this.router.navigate(['/admin/homelink']);
        } else {
          this.errors = responseSuccess.data;
        }
      },
      responseError => {
        console.log(responseError)
        // this.router.navigate(['/error']);
      }
    );
  }
}
