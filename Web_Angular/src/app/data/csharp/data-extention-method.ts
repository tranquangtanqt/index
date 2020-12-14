import { IModal } from "./../interface";

export const EXTENTION_METHOD_CONST: IModal[] = [
	{
		id: 1,
		title: `Extention Method`,
		content: `<p>Extension Methods là thêm một số phương thức vào lớp đã tồn tại mà không cần kế thừa để mở rộng lớp đó.</p>
<p><b>Các quy tắc khi định nghĩa và sử dụng extension method:</b></p>
<p class="first-line-one-tab">+ Lớp chứa extension method phải là static</p>
<p class="first-line-one-tab">+ Extension method cũng phải là một phương thức static</p>
<p class="first-line-one-tab">+ Tham số đầu tiên của extension method xác định kiểu của đối tượng được sử dụng (extension method sẽ thêm vào lớp của đối tượng đó) với từ khóa this. Tham số này sẽ được bỏ qua khi bạn gọi extension method.</p>
<p><i>Ví dụ</i></p>
<pre><code class="language-csharp">using System;
using System.Linq;

public static class MyExtentionMethod{
	public static int SumFrom1ToN(this int n){
		int sum = 0;
		for(int i = 1; i <= n; i++){
			sum += i;
		}
		return sum;
	}
	
	public static void Main(string [] args){
		int n = 10;
		Console.WriteLine(n.SumFrom1ToN());
	}
}</code></pre>`
	},{
		id: 2,
		title:`Extension method và instance method`,
		content:`<p>Giả sử cho hai extension method có hiệu lực trong cùng một lớp và phạm vi. Compiler sẽ không biết được bạn muốn gọi method nào và sẽ thông báo lỗi. Ta có ví dụ sau:</p>
<pre><code class="language-csharp">using System;

namespace ExtensionMethod{
    class Program {
        public static void Main(string[] args){
            string name =new Program().GetName();
            Console.WriteLine(name);
        }
    }
 
    static class Extension1{
        public static string GetName(this Program obj){
            return "Extension1";
        }
    }
	
    static class Extension2{
        public static string GetName(this Program obj){
            return "Extension2";
        }
    }
}</code></pre>
<p>Và ta nhận được lỗi: <b>The call is ambiguous between the following methods or properties: 'ExtensionMethod.Extension1.GetName(ExtensionMethod.Program)' and 'ExtensionMethod.Extension2.GetName(ExtensionMethod.Program)</b></p>
<pre><code class="language-csharp">using System;

namespace ExtensionMethod{
    class Program {
        public static void Main(string[] args){
            string name =new Program().GetName();
            Console.WriteLine(name);
        }

		public string GetName(){
            return "Program";
        }
    }

    static class Extension1{
        public static string GetName(this Program obj){
            return "Extension1";
        }
    }
	
    static class Extension2{
        public static string GetName(this Program obj){
            return "Extension2";
        }
    }
}

//Output: Program</code></pre>`
	},
	{
		id: 3,
		title: `RandomString`,
		content:`<pre><code class="language-csharp">using System;
using System.Linq;
using System.Text;

public static class MyExtentionMethod{
	public static string RandomString(this string s, int length){
		StringBuilder sb = new StringBuilder();

		Random rd = new Random();
		string validChars = "abcdefghijklmnopqrstuvwxyz0123456789";
		char ch;
		for(int i = 0; i <= length; i++){
			ch = validChars[rd.Next(0, validChars.Length)];
			sb.Append(ch);
		}
		
		return sb.ToString();
	}
	
	public static void Main(string [] args){
		string s = "";
		Console.WriteLine(s.RandomString(10));
	}
}</code></pre>`
	}

];