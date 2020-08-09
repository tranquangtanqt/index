export interface Pattern {
	id: number;
	pattern: String;
	contentCode: String;
}

export const PATTERN_CONST: Pattern[] = [
	{
		id: 1,
		pattern: `* * * * * 
* * * * * 
* * * * * 
* * * * * 
* * * * *`,
		contentCode: `string s = "";
for(int i = 1; i <= 5; i++){
    for(int j = 1; j <= 5; j++){
        s += "* ";
    }
    s += "\\n";
}
Console.WriteLine(s);`
	},
	{
		id: 2,
		pattern: `1 1 1 1 1 
2 2 2 2 2 
3 3 3 3 3 
4 4 4 4 4 
5 5 5 5 5`,
		contentCode: `string s = "";
for(int i = 1; i <= 5; i++){
    for(int j = 1; j <= 5; j++){
        s += i + " ";
    }
    s += "\\n";
}
Console.WriteLine(s);`
	},
	{
		id: 3,
		pattern: `1 2 3 4 5 
1 2 3 4 5 
1 2 3 4 5 
1 2 3 4 5 
1 2 3 4 5`,
		contentCode: `string s = "";
for(int i = 1; i <= 5; i++){
    for(int j = 1; j <= 5; j++){
        s += j + " ";
    }
    s += "\\n";
}
Console.WriteLine(s);`
	},
	{
		id: 4,
		pattern: `A A A A A 
B B B B B 
C C C C C 
D D D D D 
E E E E E`,
		contentCode: `string s = "";
for(char i = 'A'; i <= 'E'; i++){
    for(char j = 'A'; j <= 'E'; j++){
        s += i + " ";
    }
    s += "\\n";
}
Console.WriteLine(s);`
	},
	{
		id: 5,
		pattern: `A B C D E 
A B C D E 
A B C D E 
A B C D E 
A B C D E`,
		contentCode: `string s = "";
for(char i = 'A'; i <= 'E'; i++){
    for(char j = 'A'; j <= 'E'; j++){
        s += j + " ";
    }
    s += "\\n";
}
Console.WriteLine(s);`
	},
	{
		id: 6,
		pattern: `5 5 5 5 5 
4 4 4 4 4 
3 3 3 3 3 
2 2 2 2 2 
1 1 1 1 1`,
		contentCode: `string s = "";
for(int i = 5; i >= 1; i--){
    for(int j = 5; j >= 1; j--){
        s += i + " ";
    }
    s += "\\n";
}
Console.WriteLine(s);`
	},
	{
		id: 7,
		pattern: `5 4 3 2 1 
5 4 3 2 1 
5 4 3 2 1 
5 4 3 2 1 
5 4 3 2 1`,
		contentCode: `string s = "";
for(int i = 5; i >= 1; i--){
    for(int j = 5; j >= 1; j--){
        s += j + " ";
    }
    s += "\\n";
}
Console.WriteLine(s);`
	},
	{
		id: 8,
		pattern: `E E E E E 
D D D D D 
C C C C C 
B B B B B 
A A A A A`,
		contentCode: `string s = "";
for(char i = 'E'; i >= 'A'; i--){
    for(char j = 'E'; j >= 'A'; j--){
        s += i + " ";
    }
    s += "\\n";
}
Console.WriteLine(s);`
	},
	{
		id: 9,
		pattern: `E D C B A 
E D C B A 
E D C B A 
E D C B A 
E D C B A`,
		contentCode: `string s = "";
for(char i = 'E'; i >= 'A'; i--){
    for(char j = 'E'; j >= 'A'; j--){
        s += j + " ";
    }
    s += "\\n";
}
Console.WriteLine(s);`
	},
	{
		id: 10,
		pattern: `* 
* * 
* * * 
* * * * 
* * * * *`,
		contentCode: `string s = "";
for(int i = 1; i <= 5; i++){
    for(int j = 1; j <= i; j++){
       s += "* ";
    }
    s += "\\n";
}
Console.WriteLine(s);`
	},
	{
		id: 11,
		pattern: `1 
2 2 
3 3 3 
4 4 4 4 
5 5 5 5 5`,
		contentCode: `string s = "";
for(int i = 1; i <= 5; i++){
    for(int j = 1; j <= i; j++){
        s += j + " ";
    }
    s += "\\n";
}
Console.WriteLine(s);`
	},
	{
		id: 12,
		pattern: `1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 `,
		contentCode: `string s = "";
for(int i = 1; i <= 5; i++){
    for(int j = 1; j <= i; j++){
        s += j + " ";
    }
    s += "\\n";
}
Console.WriteLine(s);`
	},
	{
		id: 13,
		pattern: `A 
B B 
C C C 
D D D D 
E E E E E `,
		contentCode: `string s = "";
for(char i = 'A'; i <= 'E'; i++){
    for(char j = 'A'; j <= i; j++){
        s += i + " ";
    }
    s += "\\n";
}
Console.WriteLine(s);`
	},
	{
		id: 14,
		pattern: `A 
A B 
A B C 
A B C D 
A B C D E 
`,
		contentCode: `string s = "";
for(char i = 'A'; i <= 'E'; i++){
    for(char j = 'A'; j <= i; j++){
        s += j + " ";
    }
    s += "\\n";
}
Console.WriteLine(s);`
	},
	{
		id: 15,
		pattern: `* * * * * 
* * * * 
* * * 
* * 
* 
`,
		contentCode: `string s = "";
for(int i = 5; i >= 1; i--){
    for(int j = i; j >= 1; j--){
        s += "* ";
    }
    s += "\\n";
}
Console.WriteLine(s);`
	},
	{
		id: 16,
		pattern: `1 1 1 1 1 
2 2 2 2 
3 3 3 
4 4 
5 `,
		contentCode: `string s = "";
for(int i = 1; i <= 5; i++){
    for(int j = 5; j >= i; j--){
        s += i + " ";
    }
    s += "\\n";
}
Console.WriteLine(s);`
	},
	{
		id: 17,
		pattern: `1 2 3 4 5 
1 2 3 4 
1 2 3 
1 2 
1`,
		contentCode: `string s = "";
for(int i = 5; i >= 1; i--){
    for(int j = 1; j <= i; j++){
        s += j + " ";
    }
    s += "\\n";
}
Console.WriteLine(s);`
	},
	{
		id: 18,
		pattern: `A A A A A 
B B B B 
C C C 
D D 
E`,
		contentCode: `string s = "";
for(char i = 'A'; i <= 'E'; i++){
    for(char j = i; j <= 'E'; j++){
        s += i + " ";
    }
    s += "\\n";
}
Console.WriteLine(s);`
	},
	{
		id: 19,
		pattern: `A B C D E 
A B C D 
A B C 
A B 
A `,
		contentCode: `string s = "";
for(char i = 'E'; i >= 'A'; i--){
    for(char j = 'A'; j <= i; j++){
        s += j + " ";
    }
    s += "\\n";
}
Console.WriteLine(s);`
	},
	{
		id: 20,
		pattern: `5 5 5 5 5 
4 4 4 4 
3 3 3 
2 2 
1`,
		contentCode: `string s = "";
for(int i = 5; i >= 1; i--){
    for(int j = 1; j <= i; j++){
        s += i + " ";
    }
    s += "\\n";
}
Console.WriteLine(s);`
	},
	{
		id: 100,
		pattern: ``,
		contentCode: ``
	}

];