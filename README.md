
# helperMeth - Helpful Methods on String, Array, Object, Number in Javascript

Some method's inspiration/naming taken from ruby.

## Methods
* [.is_i()](#.is_i())
* [.is_float()](#.is_float())
* [.is_s()](#.is_s())
* [.is_a()](#.is_a())
* [.is_o()](#.is_o())
* [.is_f()](#.is_f())
* [.is_json()](#.is_json())
* [.to_json()](#.to_json())
* [.present()](#.present())
* [.empty()](#.empty())
* [Object.to_query()](#Object.to_query())
* [.count()](#.count())
* [Array.equals()](#Array.equals())
* [Array.includes()](#Array.includes()) (Enhanced versin of ES6's include method)
* [Array.to_sentence()](#Array.to_sentence())
* [String.to_a()](#String.to_a())
* [String.to_o()](#String.to_o())
* [String.upcase()](#String.upcase())
* [String.downcase()](#String.downcase())
* [String.titleize()](#String.titleize())
* [String.pluralize()](#String.pluralize())

### .is_i()
Returns true if variable is an Integer/Number:
```js
var num = 21;
var str = "Hello world!";
num.is_i() // return true`
str.is_i() // returns false
```

### .is_float()
Return true if variable is a float:

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

### Object.to_query()
Converts object to query parameter string.
```js
var obj = {hello: "world", goodbye: "world"};
obj.to_query();
// Outputs: "hello=world&goodbye=world"
```

### .count()
Count the number occurrence of an item/character in a Array or String.
```js
var str = "Hello World!";
str.count("o"); // returns: 2

var arr = [1, 2, 4, 1, 4, 4];
arr.count(4) //returns 3
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
[1, 2, [3, 4]].equals([3, 4]) // return true
[1, 2].equals([2, 1]) // return false
```
### Array.to_sentence()
Converts an array to human readable sentence:
```js
  ['John', "Johny", "Jenna"].to_sentence();
  // Output: "John, Johny and Jenna"
```
This method accepts two parameter: `last_word_connector`, where you can specify which word will connect that last word with rest of the Array values
```js
['John', "Johny", "Jenna"].to_sentence("or");
// Output: "John, Johny or Jenna"
```
Another parameter is: `word separator`, which will use user given separator instead of default `,`:
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
Option argument: true, if passed will convert all word's first character to string.
```js
"hello world!".titleize() // returns: "Hello world!"
"hello world!".titleize(true) // returns: "Hello World!"
```

### String.pluralize()
Converts a string to customizable plural text based on number passed as argument. This is not grammatically perfect, that is why added second argument: `pluralText`  which will return this text if the number is greater than 1;
```js
"size".pluralize() // returns: "sizes"
"size".pluralize(1) // returns: "size"
"size".pluralize(2, "so many sizes") // returns: "so many sizes"
"size".pluralize(1, "so many sizes") // returns: "size"
```

