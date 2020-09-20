import { Component, OnInit } from '@angular/core';
import { HighlightService } from "./../../../../services/highlight/highlight.service";
import { ITableOfContent } from "./../../../../data/interface";

@Component({
  selector: 'app-cs-basic-delegate',
  templateUrl: './cs-basic-delegate.component.html',
  styleUrls: ['./cs-basic-delegate.component.css']
})
export class CsBasicDelegateComponent implements OnInit {
	private highlighted: boolean = false;
  delegateStrCode1: String;
  delegateStrCode2: String;
  delegateStrCode3: String;
  code: any;
  dataToc: ITableOfContent [];

  constructor(private highlightService: HighlightService) { }

  ngOnInit(): void {
  	this.delegateStrCode1 = `delegate <kiểu trả về> <tên delegate> (<danh sách tha số nếu có>);`;
  	this.delegateStrCode2 = `Func<kiểu_tham_số_1, kiểu_tham_số_2, ..., kiểu_trả_về> var_delegate;`;
  	this.delegateStrCode3 = `Action<kiểu_tham_số_1, kiểu_tham_số_2, ... > var_delegate;`;
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

export const TABLE_OF_CONTENT : ITableOfContent [] = [
  {
    id: 1,
    title: "Delegate là gì?",
    gotoElement: "goto1"
  },{
    id: 2,
    title: "Khai báo Delegate",
    gotoElement: "goto2",
  },{
    id: 3,
    title: "Ví dụ",
    gotoElement: "goto3",
  },{
    id: 4,
    title: "Gán nhiều phương thức vào delegate",
    gotoElement: "goto4",
  },{
    id: 5,
    title: "Sử dụng Func",
    gotoElement: "goto5",
  },{
    id: 6,
    title: "Sử dụng Action",
    gotoElement: "goto6",
  },{
    id: 7,
    title: "Sử dụng Delegate làm tham số phương thức",
    gotoElement: "goto7",
  }
];

export const CODE = {
	code_1: `using System;

public delegate int ChangeInt(int x);

namespace Delegate{
    class Program {
		public static int Tang2(int x){
			return x + 2;
		}

		public static int Giam2(int x){
			return x - 2;
		}
		
		public static void Main(string[] args){
			ChangeInt change1 = new ChangeInt(Tang2);
			Console.WriteLine(change1(100));
			ChangeInt change2 = Giam2;
			Console.WriteLine(change2(100));
		}
    } 
}
// Output: 
// 102
// 98`,
	code_2: `using System;

public delegate int ChangeInt(int x);

namespace Delegate{
    class Program {
		public static void Main(string[] args){
			ChangeInt change1 = x => x + 2;
			ChangeInt change2 = x => x - 2;
			Console.WriteLine(change1(100) + change2(100));
			Console.WriteLine(change1(100) - change2(100));
			Console.WriteLine(change1(100) * change2(100));
			Console.WriteLine(change1(100) / change2(100));
		}
    } 
}
// Output: 
// 200
// 4
// 9996
// 1`,
	code_3: `using System;

namespace Delegate{
    class Program {
		public delegate int ChangeInt(int x);
		
		public static void Main(string[] args){
			Func<int, int> change1 = x => x + 2;
			Console.WriteLine(change1(100));
			Func<int, int> change2 = x => x - 2;
			Console.WriteLine(change2(100));
		}
    } 
}
// Output: 
// 102
// 98`,
	code_4: `using System;

namespace Delegate{
    class Program {
		public delegate void ShowMessage(string str);
		
		public static void Info(string str){
			Console.WriteLine(string.Format("Info: {0}", str));
		}
		
		public static void Warning(string str){
			Console.WriteLine(string.Format("Warning: {0}", str));
		}
		
		public static void Main(string[] args){
			Action<string> action1 = x => Console.WriteLine("-------{0}-----", x);
			Action<string> action2 = Info;
			action2("InfoMessage");
			Action<string> action3 = Warning;
			action3("WarningMessage");
			Action<string> action4 = action1 + action2 + action3;
			action4("Test Add");
		}
    } 
}
// Output: 
// Info: InfoMessage
// Warning: WarningMessage
// -------Test Add-----
// Info: Test Add
// Warning: Test Add`,
	code_5: `using System;

namespace Delegate{
    class Program {
		public delegate int ChangeInt(int x);
		
		public static void ShowTang2(int x, ChangeInt change){
			Console.WriteLine(change(x));
		}
		
		public static void Main(string[] args){
			ShowTang2(100, x => x + 2);
		}
    } 
}
// Output: 
// 102`
}
