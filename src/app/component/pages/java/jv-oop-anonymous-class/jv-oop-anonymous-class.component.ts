import { Component, OnInit } from '@angular/core';
import { HighlightService } from "./../../../../services/highlight/highlight.service";

@Component({
  selector: 'app-jv-oop-anonymous-class',
  templateUrl: './jv-oop-anonymous-class.component.html',
  styleUrls: ['./jv-oop-anonymous-class.component.css']
})
export class JvOopAnonymousClassComponent implements OnInit {
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
    code_1: `class Machine {
    public void start() {
        System.out.println("Starting...");
    }
}`,
    code_2: `public static void main(String[ ] args) {
    Machine m = new Machine() {
        @Override public void start() {
            System.out.println("Wooooo");
        }
    };
    m.start();
}`, 
    code_3: `class Machine {
    public void start() {
        System.out.println("Starting...");
    }
}

class Program {
    public static void main(String[ ] args) {
        Machine m = new Machine() {
            @Override public void start() {
                System.out.println("Wooooo");
            }
        };
        m.start();
    }
}

/*****************
 * Output
 * Wooooo
*****************/`,
    code_4: `class Machine {
    public void start() {
        System.out.println("Starting...");
    }
}

class Program {
    public static void main(String[ ] args) {
        Machine m1 = new Machine() {
            public void start() {
                System.out.println("Wooooo");
            }
        };
        Machine m2 = new Machine();
        m2.start();
    }
}

/***************
 * Output
 * Starting...
***************/`
}