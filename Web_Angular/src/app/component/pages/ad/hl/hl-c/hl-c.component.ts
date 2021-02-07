import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HlService } from "../../../../../core/services/pages/home/hl.service";
import { IHomeLink } from '../../../../../core/interface/IHomeLink';
import { CommonUtils } from "../../../../../core/class/utils";
import { MessagesService } from "../../../../../core/services/messages/messages.service";
import { MessageConst } from "../../../../../core/const/constant";

@Component({
  selector: 'app-hl-c',
  templateUrl: './hl-c.component.html',
  styleUrls: ['./hl-c.component.css']
})
export class HlCComponent implements OnInit {

  homeLink: IHomeLink = {} as IHomeLink;

  errors: Object;

  constructor(private lhpService: HlService, private router: Router,
    private messagesService: MessagesService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.lhpService.createLink(this.homeLink).subscribe(
      responseSuccess => {
        let common = new CommonUtils(responseSuccess.data);
        if(common.checkObjectIsNullOrEmpty()){
          this.messagesService.changeMessage(`${MessageConst.messageCreateSuccess}`);
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
