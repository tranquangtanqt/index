import { Component, OnInit } from '@angular/core';
import { HighlightService } from "./../../../../services/highlight/highlight.service";
import { ITableOfContent } from "./../../../../data/interface";

@Component({
  selector: 'app-js-array',
  templateUrl: './js-array.component.html',
  styleUrls: ['./js-array.component.css']
})
export class JsArrayComponent implements OnInit {
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

export const TABLE_OF_CONTENT : ITableOfContent [] = [
  {
    id: 1,
    title: "concat()",
    gotoElement: "goto1"
  },{
    id: 2,
    title: "copyWithin()",
    gotoElement: "goto2",
  },{
    id: 3,
    title: "fill()",
    gotoElement: "goto3",
  },{
    id: 4,
    title: "filter()",
    gotoElement: "goto4",
  },{
    id: 5,
    title: "find()",
    gotoElement: "goto5",
  },{
    id: 6,
    title: "findIndex()",
    gotoElement: "goto6",
  },{
    id: 7,
    title: "forEach()",
    gotoElement: "goto7",
  },{
    id: 8,
    title: "from()",
    gotoElement: "goto8",
  },{
    id: 9,
    title: "includes()",
    gotoElement: "goto9",
  },{
    id: 10,
    title: "indexOf()",
    gotoElement: "goto10",
  },{
    id: 11,
    title: "isArray()",
    gotoElement: "goto11",
  },{
    id: 12,
    title: "join()",
    gotoElement: "goto12",
  },{
    id: 13,
    title: "lastIndexOf()",
    gotoElement: "goto13",
  },{
    id: 14,
    title: "map()",
    gotoElement: "goto14",
  },{
    id: 15,
    title: "pop()",
    gotoElement: "goto15",
  },{
    id: 16,
    title: "push()",
    gotoElement: "goto16",
  },{
    id: 17,
    title: "reduce()",
    gotoElement: "goto17",
  },{
    id: 18,
    title: "reduceRight()",
    gotoElement: "goto18",
  },{
    id: 19,
    title: "reverse()",
    gotoElement: "goto19",
  },{
    id: 20,
    title: "shift()",
    gotoElement: "goto20",
  },{
    id: 21,
    title: "slice()",
    gotoElement: "goto21",
  },{
    id: 22,
    title: "some()",
    gotoElement: "goto22",
  },{
    id: 23,
    title: "sort()",
    gotoElement: "goto23",
  },{
    id: 24,
    title: "splice()",
    gotoElement: "goto24",
  },{
    id: 25,
    title: "toString()",
    gotoElement: "goto25",
  },{
    id: 26,
    title: "unshift()",
    gotoElement: "goto26",
  }
];

export const CODE = {
  code_1: `var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];

console.log(array1.concat(array2));
//=> Array ["a", "b", "c", "d", "e", "f"]`,
	code_2: `var array1 = [1, 2, 3, 4, 5];

// place at position 0 the element between
// position 3 and 4
console.log(array1.copyWithin(0, 3, 4));
// output: Array [4, 2, 3, 4, 5]

// place at position 1 the elements after position 3
console.log(array1.copyWithin(1, 3));
// output: Array [4, 4, 5, 4, 5]`,
	code_3: `var array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// output: [1, 5, 5, 5]

console.log(array1.fill(6));
// output: [6, 6, 6, 6]`,
	code_4: `var words = [1, 2, 3, 4, 5, 6];

const result = words.filter(num => num > 3);

console.log(result);
// output: Array [4, 5, 6]

function isBigEnough(value){
 return value > 10;  
}
var fil = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(fil);
// fil is [12, 130, 44]`,
	code_5: `var inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

function isCherries(fruit) { 
    return fruit.name === 'cherries';
}

console.log(inventory.find(isCherries)); 
// Object { name: "cherries", quantity: 5 }

const result = inventory.find(fruit =>
fruit.name === 'cherries' );
console.log(result) 
// Object { name: "cherries", quantity: 5 }`,
	code_6: `var array1 = [5, 12, 8, 130, 44];
function findFirstLargeNumber(element) {
  return element > 13;
}
console.log(array1.findIndex(findFirstLargeNumber));
// expected output: 3

function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start < 1) {
      return false;
    } else start++;
  }
  return element > 1;
}

console.log([4, 6, 8, 12].findIndex(isPrime)); 
// -1, not found
console.log([4, 6, 7, 12].findIndex(isPrime)); 
// 2`,
	code_7: `const items = ['item1', 'item2', 'item3'];
const copy = [];

items.forEach(function(item){
  copy.push(item)
});

console.log(copy);
// Array ["item1", "item2", "item3"]`,
	code_8: `console.log(Array.from('foo'));
// output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// output: Array [2, 4, 6]

console.log(Array.from({length: 5}, (v, i) => i));
// output: Array [0, 1, 2, 3, 4]`,
	code_9: `var array1 = [1, 2, 3];
console.log(array1.includes(2));
// output: true

var pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));
// output: true

console.log(pets.includes('at'));
// output: false`,
	code_10: `var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1`,
	code_11: `var elements = ['Fire', 'Wind', 'Rain'];

console.log(elements.join());
// output: Fire,Wind,Rain

console.log(elements.join(''));
// output: FireWindRain

console.log(elements.join('-'));
// output: Fire-Wind-Rain

function f(a, b, c) {
  var s = Array.prototype.join.call(arguments);
  console.log(s); // '1,a,true'
}
f(1, 'a', true);
// output: "1,a,true"`,
	code_12: `var numbers = [2, 5, 9, 2];
numbers.lastIndexOf(2);     // 3
numbers.lastIndexOf(7);     // -1
numbers.lastIndexOf(2, 3);  // 3
numbers.lastIndexOf(2, 2);  // 0
numbers.lastIndexOf(2, -2); // 0
numbers.lastIndexOf(2, -1); // 3`,
	code_13: `var array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1);
//output: Array [2, 8, 18, 32]

var kvArray = [{key: 1, value: 10}, 
               {key: 2, value: 20}, 
               {key: 3, value: 30}];
var reformattedArray = kvArray.map(obj =>{ 
   var rObj = {};
   rObj[obj.key] = obj.value;
   return rObj;
});
console.log(reformattedArray);
// output: Array [Object { 1: 10 }, 
// Object { 2: 20 }, Object { 3: 30 }]`,
	code_14: `var arr = [1, 2, 3, 4, 5];

console.log(arr.pop());
// output: 5

console.log(arr);
// output: Array [1, 2, 3, 4]

arr.pop();

console.log(arr);
// output: Array [1, 2, 3]`,
	code_15: `var arr = [0, 1, 2];

console.log(arr.push(3));
// output: 4

console.log(arr);
// output: Array [0, 1, 2, 3]

arr.push(4);

console.log(arr);
// output: Array [0, 1, 2, 3, 4]`,
	code_16: `const array1 = [1, 2, 3, 4];
const reducer = (a, b) => a + b;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// output: 15`,
	code_17: `const array1 = [[0, 1], [2, 3], [4, 5]].reduceRight(
  (previous, current) => previous.concat(current)
);
  
console.log(array1);
// output: Array [4, 5, 2, 3, 0, 1]

var arr = [0, 1, 2, 3, 4];
var sum = arr.reduceRight(
  function(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
});
console.log(sum);
// output: 10`,
	code_18: `var array1 = [1, 2, 3];
console.log('array1: ', array1);
// output: "array1: " Array [1, 2, 3]

var reversed = array1.reverse(); 
console.log('reversed: ', reversed);
// expected output: "reversed: " Array [3, 2, 1]

console.log('array1: ', array1);
// output: "array1: " Array [3, 2, 1]`,
	code_19: `var array1 = [1, 2, 3];

var firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1`,
	code_20: `var arr = [1, 2, 3, 4, 5];

console.log(arr.slice(2));
// output: Array [3, 4, 5]

console.log(arr.slice(2, 4));
// output: Array [3, 4]

console.log(arr.slice(1, 5));
// output: Array [2, 3, 4, 5]`,
	code_21: `function isBiggerThan10(element, index, array) {
  return element > 10;
}
  
[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true

[2, 5, 8, 1, 4].some(x => x > 10);  // false
[12, 5, 8, 1, 4].some(x => x > 10); // true`,
	code_22: `var months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// output: Array ["Dec", "Feb", "Jan", "March"]

var array1 = [1, 30, 4, 21];
array1.sort();
console.log(array1);
//output: Array [1, 21, 30, 4]

array1.sort((a, b) => a - b);
console.log(array1);
//output: Array [1, 4, 21, 30]

array1.sort((a, b) => b - a);
console.log(array1);
// output: Array [30, 21, 4, 1]`,
	code_23: `var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at 1st index position
console.log(months);
// output: Array ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, 'May');
// replaces 1 element at 4th index
console.log(months);
// output: Array ['Jan', 'Feb', 'March', 'April', 'May']`,
	code_24: `var array1 = [1, 2, 'a', '1a'];

console.log(array1.toString());
// output: "1,2,a,1a"`,
	code_25: `var array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// output: 5

console.log(array1);
// output: Array [4, 5, 1, 2, 3]`
}
