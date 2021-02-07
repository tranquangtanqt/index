import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';

import { HlService } from "../../../../../core/services/pages/home/hl.service";
import { IHomeLink } from '../../../../../core/interface/IHomeLink';
import { MessagesService } from "../../../../../core/services/messages/messages.service";
import { MessageConst } from "../../../../../core/const/constant";
import { AlertifyService } from "../../../../../core/services/alertify/alertify.service";

@Component({
  selector: 'app-hl-l',
  templateUrl: './hl-l.component.html',
  styleUrls: ['./hl-l.component.css']
})
export class HlLComponent implements OnInit {
  
  listHomeLink: Observable<IHomeLink[]>;
  message: string;

  constructor(private hlService: HlService, private router: Router,
    private messagesService: MessagesService, private alertifyService: AlertifyService) { }

  ngOnInit(): void {
    
    this.hlService.getAllData().subscribe(
      responseSuccess => {
        this.listHomeLink = responseSuccess.data;
        this.messagesService.currentMessage.subscribe(mess => this.message = mess);
        if(this.message != ""){
          this.alertifyService.success(this.message);
          this.messagesService.changeMessage("");
        }
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
        this.messagesService.changeMessage(`${MessageConst.messageDeleteSuccess}`);
        this.listHomeLink = responseSuccess.data;
      },
      responseError => {
        this.router.navigate(['/error']);
      });
  }
}