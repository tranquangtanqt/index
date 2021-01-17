import { Component, OnInit } from '@angular/core';


import { Observable } from "rxjs";
import { LinkHomePageService } from "../../../../services/linkhomepage/link-home-page.service";
import { Router } from '@angular/router';
import { ILinkHomePage } from './../../../../object/ILinkHomePage';

@Component({
  selector: 'app-admin-link-home-page',
  templateUrl: './admin-link-home-page.component.html',
  styleUrls: ['./admin-link-home-page.component.css']
})
export class AdminLinkHomePageComponent implements OnInit {

  listLinkHomePage: Observable<ILinkHomePage[]>;
  constructor(private linkHomePageService: LinkHomePageService, private router: Router) { }

  ngOnInit(): void {
    this.linkHomePageService.getAllData().subscribe(
      response => {
        
        this.listLinkHomePage = response.data;
        console.log(this.listLinkHomePage);
      }
    );
  }
}
