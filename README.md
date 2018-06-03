
# helperMeth - README
### Helpful Methods on String, Array, Object, Number in Javascript

- Improved version of Array's `includes` method, introduced in ES6.
- Deep/Nested checking of values inside Array and Object. Using recursion.
- Has shorthand methods
- Some method's inspiration/naming taken from ruby language.

## Methods
* Generic Methods
  * [.is_n()](#is_n)
  * [.is_i()](#is_i)
  * [.is_float()](#is_float)
  * [.is_s()](#is_s)
  * [.is_a()](#is_a)
  * [.is_o()](#is_o)
  * [.is_f()](#is_f)
  * [.is_json()](#is_json)
  * [.to_json()](#to_json)
  * [.present()](#present)
  * [.empty()](#empty)
  * [.count()](#count)
  * [.equals()](#equals) (Checks if String, Integer, Boolean or Object are equals, Deep Checking)
* Object Specific Methods
  * [Object.to_query()](#objectto_query)
  * [Object.has()](#objecthas) (Key exists or Key-Value pair exists in Object)
  * [Object.hasValue()](#objecthasvalue) (Value exists in any key in Object)
* Array Specific Methods
  * [Array.equals()](#arrayequals)
  * [Array.includes()](#arrayincludes) (Enhanced versin of ES6's include method)
  * [Array.to_sentence()](#arrayto_sentence)
* String Specific Methods
  * [String.to_a()](#stringto_a)
  * [String.to_o()](#stringto_o)
  * [String.includes()](#stringincludes)
  * [String.upcase()](#stringupcase)
  * [String.downcase()](#stringdowncase)
  * [String.titleize()](#stringtitleize)
  * [String.pluralize()](#stringpluralize)

### .is_n()
Returns true if variable is an Number (Integer/Float). Also accepts optional arugments: `true`, if strict type checking is required in case of string:
```js
var num = 1;
var float1 = 1.3;
var str = "1";
num1.is_n() // return true
float1.is_n() // return true
str.is_n() // returns true
str.is_n(true) // returns false
```

### .is_i()
Returns true if variable is an Integer/Number. Also accepts optional arugments: `true`, if strict type checking is required in case of string:
```js
var num = 21;
var str = "Hello world!";
num.is_i() // return true
str.is_i() // returns false
```

### .is_float()
Return true if variable is a Float. Also accepts optional arugments: `true`, if strict type checking is required in case of string:

```js
var num1 = 2.1;
var num2 = 21;
num1.is_float(); // return true`
num2.is_float(); // returns false
```

### .is_s()
Return true if variable is a string.
```js
var str = "Hello world!";
str.is_s(); // returns true
```

### .is_a()
Return true if variable is an Array.
```js
var arr = [1, 2, 3];
arr.is_a(); // returns true
```

### .is_o()
Return true if variable is an Object.
```js
var obj = {hello: "World"};
obj.is_o(); // returns true
```

### .is_f()
Return true if variable is a Function.
```js
var func = function () {};
func.is_f(); // returns true
```

### .is_json()
Return true if variable JSON.
```js
var json = '{"hello":"world"}';
json.is_json(); // returns true
```

### .to_json()
Convert Array or Objects to JSON type
```js
var json = {"hello":"world"};
json.to_json(); // returns stringify version of variable
```

### .present()
Check if Array has elements, String has characters, Object has keys. In short, they are not empty.
```js
var str1 = "Hello";
var str2 = "";
str1.present(); // Returns true
str2.present(); // Returns false

var arr1 = [1, 2];
var arr2 = [];
var arr1.present() // Returns true
var arr2.present() // Returns false

var obj1 = {"hello":"world"};
var obj2 = {};
var obj1.present() // Returns true
var obj2.present() // Returns false
```

### .empty()
Inverse of `.present()` method. it checks if Array, String or Object is empty.
```js
var str1 = "";
str.empty() // Returns true
```

### .count()
Count the number occurrence of an item/character in an Array or String.
```js
var str = "Hello World!";
str.count("o"); // returns: 2

var arr = [1, 2, 4, 1, 4, 4];
arr.count(4) //returns 3
```

### .equals()
Returns true if String or Number is equal.
```js
var num1 = 1;
var num2 = 1.2;
var str = "1";

num1.equals(1) // returns true;
num1.equals("1") // returns false;
num2.equals(1.2) // returns true;
str.equals("1") // returns true
str.equals(1) // returns false
```


### Object.to_query()
Converts object to query parameter string.
```js
var obj = {hello: "world", goodbye: "world"};
obj.to_query();
// Outputs: "hello=world&goodbye=world"
```

### Object.has()
Returns true if the Key or Key-Value pair exists in the Object.
Takes two argument: First `key_name`, Second `value_name` (Optional).
```js
var obj = {hello: "World!"};
obj.has("hello"); // returns: true
obj.has("hell"); // returns: false
obj.has('hello', 'World!') // returns true

// Deep Nested Checking
var obj1 = {hello: 'world!', good: {bye: 'world'}};
obj1.has('good', {bye: 'world'})
```

### Object.hasValue()
Returns true if the Value exists in the Object.
```js
var obj = {hello: 'world!', good: {bye: 'world'}};
obj.hasValue('world!'); // return true
obj.hasValue({bye: 'world'}); // return true
obj.hasValue('world'); // return false
```

### Array.equals()
Checks if two Arrays are same. This works for nested array as well.
```js
[1, 2].equals([1, 2]) // return true
[1, 2, [3, 4]].equals([1, 2, [3, 4]]) // return true
[1, 2].equals([2, 1]) // return false
```

### Array.includes()
ES6 has `.includes()` method, but this method fails if we check if array element is present in an Array:
```js
[1, 2, [1]].includes([1]) // ES6 version will return false
```
New implementation will use `.equals()` method and will check if another Array is present in Array.
```js
[1, 2].includes(1) // return true
[1, 2, [3, 4]].includes([3, 4]) // return true
[1, 2].includes(3) // return false
```
### Array.to_sentence()
Converts an array to human readable sentence:
```js
  ['John', "Johny", "Jenna"].to_sentence();
  // Output: "John, Johny and Jenna"
```
This method accepts two parameter: `last_word_connector`, where you can specify which word will connect the last word with rest of the Array values
```js
['John', "Johny", "Jenna"].to_sentence("or");
// Output: "John, Johny or Jenna"
```
Another parameter is: `word separator`, instead of default `,`:
```js
['John', "Johny", "Jenna"].to_sentence("or", " ");
// Output: "John Johny or Jenna"
```

### String.to_a()
Converts String to Array:
```js
"Hello".to_a() // returns: ["H", "e", "l", "l", "o"]
```

### String.to_o()
Convert string to Object:
```js
"Hello".to_a() // returns: {H: "H", e: "e", l: "l", o: "o"}
```

### String.includes()
returns true if string contains substring
```js
"Hello World!".includes('Hell') // return true 
"This World!".includes('Heaven') // return false 
```

### String.upcase()
Converts string charactores to Uppercase:
```js
"Hello".upcase() // returns: HELLO
```

### String.downcase()
Converts string charactores to Lowercase:
```js
"HeeLLO".upcase() // returns: heello
```

### String.titleize()
Converts first letter of word to Uppercase.
Optional argument: true, if passed will convert all words in a sentence to titlecase else only the first letter.
```js
"hello world!".titleize() // returns: "Hello world!"
"hello world!".titleize(true) // returns: "Hello World!"
```

### String.pluralize()
Converts a string to customizable plural text based on number passed as argument. This is not grammatically perfect, that is why added second argument: `pluralText`  which will get return if the number is greater than 1;
```js
"size".pluralize() // returns: "sizes"
"size".pluralize(1) // returns: "size"
"size".pluralize(2, "so many sizes") // returns: "so many sizes"
"size".pluralize(1, "so many sizes") // returns: "size"
```

