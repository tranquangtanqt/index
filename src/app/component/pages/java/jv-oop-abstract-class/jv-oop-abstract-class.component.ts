import { Component, OnInit } from '@angular/core';
import { HighlightService } from "./../../../../services/highlight/highlight.service";

@Component({
  selector: 'app-jv-oop-abstract-class',
  templateUrl: './jv-oop-abstract-class.component.html',
  styleUrls: ['./jv-oop-abstract-class.component.css']
})
export class JvOopAbstractClassComponent implements OnInit {
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
    code_1:  `abstract class Animal {
    int legs = 0;
    abstract void makeSound();
}`,
    code_2: `class Cat extends Animal {
    public void makeSound() {
        System.out.println("Meow");
    }
}`,
    code_3: `abstract class Animal {
    int legs = 0;
    abstract void makeSound();
}

class Cat extends Animal {
    public void makeSound() {
        System.out.println("Meow");
    }
}

public class Program {
    public static void main(String[] args) {
        Cat c = new Cat();
        c.makeSound();
    }
}

/**********
 * Output
 * Meow
***********/`,
    code_4: `abstract class Shape {
    abstract void draw();
} 

class Rectangle extends Shape {
    void draw() {
        System.out.println("Draw Rectangle");
    }
}

class Traingle extends Shape {
    void draw() {
        System.out.println("Draw Traingle");
    } 
} 

class AbstractTest {
    public static void main(String args[]) {
        Shape s1 = new Rectangle();
        s1.draw();
        s1 = new Traingle();
        s1.draw();
    }
}

/********************
 * Output
 * Draw Rectangle
 * Draw Traingle
*********************/`

};
