import { Component, OnInit } from '@angular/core';
import { HighlightService } from "./../../../../../services/highlight/highlight.service";

@Component({
  selector: 'app-jv-jpa-entity',
  templateUrl: './jv-jpa-entity.component.html',
  styleUrls: ['./jv-jpa-entity.component.css']
})
export class JvJpaEntityComponent implements OnInit {
  private highlighted: boolean = false;
  code: any;

  constructor(private highlightService: HighlightService) { }

  ngOnInit(): void {
  	this.code = CODE;
  }

  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }
}

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
