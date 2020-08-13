import { Component, OnInit } from '@angular/core';
import { HighlightService } from "./../../../../services/highlight/highlight.service";

@Component({
  selector: 'app-jv-oop-construcstors',
  templateUrl: './jv-oop-construcstors.component.html',
  styleUrls: ['./jv-oop-construcstors.component.css']
})
export class JvOopConstrucstorsComponent implements OnInit {
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
    code_1: `public class Vehicle {
    private String color;
    Vehicle() {
        color = "Red";
    }
}`,
    code_2: `public class Vehicle {
    private String color;
    Vehicle(String c) {
        color = c;
    }
}`,
    code_3: `public class MyClass {
    public static void main(String[ ] args) {
        Vehicle v = new Vehicle("Blue");
    }
}`,
    code_4: `public class Vehicle {
    private String color;

    Vehicle() {
        this.setColor("Red");
    }

    Vehicle(String c) {
        this.setColor(c);
    }

    // Setter
    public void setColor(String c) {
        this.color = c;
    }
}`,
    code_5: `public class Vehicle {
    private String color;
    
    Vehicle() {
        this.setColor("Red");
    }
    Vehicle(String c) {
        this.setColor(c);
    }
    
    // Setter
    public void setColor(String c) {
        this.color = c;
    }
    
    // Getter
    public String getColor() {
        return color;
    }
}

public class Program {
    public static void main(String[] args) {        
        //color will be "Red"
        Vehicle v1 = new Vehicle();
        
        //color will be "Green"
        Vehicle v2 = new Vehicle("Green"); 
        
        System.out.println(v2.getColor());
        
        //color will be Red and Green 
        Vehicle v3 = new Vehicle(v1.getColor() + " and " + v2.getColor()); 
        
        System.out.println(v3.getColor());
    }
}`
}
