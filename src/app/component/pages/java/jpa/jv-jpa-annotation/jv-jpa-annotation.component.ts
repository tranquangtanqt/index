import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jv-jpa-annotation',
  templateUrl: './jv-jpa-annotation.component.html',
  styleUrls: ['./jv-jpa-annotation.component.css']
})
export class JvJpaAnotationComponent implements OnInit {
  private highlighted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
}