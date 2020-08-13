import { Component, OnInit } from '@angular/core';
import { HighlightService } from "./../../../../services/highlight/highlight.service";
import { ITableOfContent } from "./../../../../data/interface";

@Component({
  selector: 'app-jv-jpa-anotation',
  templateUrl: './jv-jpa-anotation.component.html',
  styleUrls: ['./jv-jpa-anotation.component.css']
})
export class JvJpaAnotationComponent implements OnInit {
  private highlighted: boolean = false;
  code: any;
  dataToc: ITableOfContent [];

  constructor(private highlightService: HighlightService) { }

  ngOnInit(): void {
  	this.code = CODE;
    this.dataToc = TABLE_OF_CONTENT;
  }
  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }
}

export const TABLE_OF_CONTENT: ITableOfContent []= [
	{
		id: 1,
		title: "@Entity",
		gotoElement: "goto1"
	},{
		id: 2,
		title: "@Table",
		gotoElement: "goto2",
	},
];

export const CODE = {
	code_1: `@Entity
@Table(name = "STUDENT")
public class Student implements Serializable {
 
}
// Truy vấn HSQL:
String hsql1 = "Select st from " + Student.class.getName() + " st";`,
	code_2: `@Entity(name="Student")
@Table(name = "STUDENT")
public class Student implements Serializable {
 
}
// Truy vấn HSQL:
String hsql2 = "Select st from Student st";`
}
