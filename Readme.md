
```js

5 > 4
"apple" > "pineapple"
"2" > "12"
undefined == null
undefined === null
<!-- null == "\n0\n"
null === +"\n0\n" -->

sumfix,prefix
let a = 1, b = 1;

let c = ++a; // ?
let d = b++; // ?



if ("0") {
  alert( 'Hello' );
}
Any string except an empty one (and "0" is not empty) becomes true in the logical context.


official name of javascript



Using if..else, write the code which gets a number via prompt and then shows in alert:

1, if the value is greater than zero,
-1, if less than zero,
0, if equals zero.


Ternary operator

let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}



let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}


Variable naming




console.log(foo); // undefined

var foo = 'bar';

console.log(foo); // "bar"

```


```js
{
 	// Start of foo's TDZ
  	let bar = 'bar';
	console.log(bar); // "bar"

	console.log(foo); // ReferenceError because we're in the TDZ

	let foo = 'foo';  // End of foo's TDZ
}





switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}

let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}```


```js
We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0.

```


