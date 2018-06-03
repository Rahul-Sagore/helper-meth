// Ruby like Helper Method on Primitve Data Type in Javascript

function _defined(variable) {
  return typeof variable !== 'undefined';
}

Object.prototype.is_n = function (strict) {
  // Strick checking if the variable is not string and of number type
  if (strict) return this.constructor === Number;
  return !isNaN(this);
}

Object.prototype.is_i = function (strict) {
  return this.is_n(strict) && Math.round(this) == this;
}

// Check if variable is Float
Object.prototype.is_float = function (strict) {
  return this.is_n(strict) && !this.is_i(strict);
}

// Check if variable is String
Object.prototype.is_s = function () {
  return this.constructor === String;
}

// Check if variable is Array
Object.prototype.is_a = function () {
  return this.constructor === Array;
}

// Check if variable is Object
Object.prototype.is_o = function () {
  return Object.prototype.toString.call(this) === "[object Object]";
}

Object.prototype.is_f = function () {
  return Object.prototype.toString.call(this) === "[object Function]";
}

Object.prototype.is_json = function () {
  try {
    JSON.parse(this);
  } catch(e) {
    return false;
  }
  return true;
}

Object.prototype.to_json = function () {
  return JSON.stringify(this);
}

Object.prototype.present = function () {
  thisObj = this;
  if (thisObj.is_s() || thisObj.is_a()) return thisObj.length > 0;
  if (thisObj.is_o()) return Object.keys(thisObj).length > 0;
  return false;
}

Object.prototype.empty = function () {
  return !this.present();
}

Object.prototype.count = function (target) {
  if (!this.is_s() && !this.is_a()) throw "This method works on string and array only!";
  var source = this.is_s() ? this.to_a() : this;
  var count = 0, sourceLen = source.length;

  if ( this.is_a() ) {
    source.map(function(item) { if (item === target) count++; });
  } else {
    var regex = new RegExp(target, 'g');
    count = (this.match(regex) || []).length
  }
  return count;
}

Object.prototype.equals = function (target) {
  var thisObj = this;
  if (thisObj.is_s() || thisObj.is_n(true)) {
    return thisObj.valueOf() === target;
  }
  if ( thisObj.is_o() ) {
    if ( !target.is_o() ) return false
    sKeysLen = Object.keys(thisObj).length;
    tKeysLen = Object.keys(target).length;
    if (sKeysLen !== tKeysLen) return false;
    for (key in thisObj) {
      if (thisObj.hasOwnProperty(key)) {
        if (!thisObj[key].equals(target[key])) return false
      }
    }
    return true
  }
  if (thisObj.valueOf() === target) return true;
  return false
}

Object.prototype.to_query = function () {
  if ( !this.is_o() ) throw "This method works on object only!";
  var thisObj = this;
  var queryStrArr = [];
  for ( var key in  thisObj ) {
    if ( thisObj.hasOwnProperty(key) ) {
      queryStrArr.push(key + "=" + encodeURIComponent(thisObj[key]));
    }
  }
  return queryStrArr.join('&');
}

Object.prototype.has = function (key, value) {
  if (!this.is_o()) throw "This method works on object only!";
  if ( key ) {
    var keyIdx = Object.keys(this).indexOf(key);
    if ( !_defined(value) ) {
      return keyIdx > -1;
    }
    if (keyIdx >= 0 && _defined(value)) {
      return value.equals(this[key]);
    }
  }
  return false;
}

Object.prototype.hasValue = function (value) {
  if (!this.is_o()) throw "This method works on object only!";
  var thisObj =  this;
  for ( var key in  thisObj ) {
    if ( thisObj.hasOwnProperty(key) ) {
      if (thisObj[key].equals(value)) return true;
    }
  }
  return false;
}

// ARRAY METHODS

Array.prototype.equals = function(targetArr) {
  if( !targetArr.is_a ) return false;
  var thisArr = this;
  var thisArrLen = thisArr.length;
  var targetArrLen = targetArr.length;
  if (thisArrLen != targetArrLen) return false;

  for (var i = 0; i < thisArrLen; i++) {
    var sItem = thisArr[i];
    var tItem = targetArr[i];
    if ( sItem.is_a() ) { // If Item is Array
       if ( !tItem.is_a() ) return false;
       if ( tItem.is_a() ) {
         if ( sItem.length != tItem.length ) return false;
         if (!sItem.equals(tItem)) return false;
       }
    }
    if ( sItem.is_o() ) { // If item is Object
      if( !sItem.equals(tItem) ) return false;
    }
    if ((!sItem.is_a() && !sItem.is_o()) && sItem != tItem) return false;
  }
  return true
}

Array.prototype.includes = function (item) {
  var thisArr = this;
  for (var i = 0; i < thisArr.length; i++) {
    var thisItem = thisArr[i];
    if ( thisItem === item ) return true;
    if ( item.is_a() &&  thisItem.is_a()) { // If item is array
      if ( thisItem.equals(item) ) return true;
    }
    if ( thisItem.is_o() && item.is_o()) {
      if (item.equals(thisItem)) return true;
    }
  }
  return false;
}

Array.prototype.to_sentence = function (connector, separator) {
  var connector = connector || 'and';
  var separator = separator || ', '
  var arr = this.slice(0, this.length - 1);
  return arr.join(separator) + " " + connector.trim() + " " + this[this.length - 1];
}

Array.prototype.uniq = function () {
  var thisArr = this;
  var newArr = [], thisArrLen = thisArr.length;

  for (var i = 0; i < thisArrLen; i++) {
    var thisItem = thisArr[i];
    if ( newArr.indexOf(thisItem) == -1 ) newArr.push(thisItem);
  }
  return newArr;
}

// STRING METHODS

String.prototype.to_a = function (pattern) {
  if (pattern) return this.split(pattern);
  var thisString = this;
  var newArr = [];
  for (var i = 0; i < thisString.length; i++) {
    newArr.push(thisString[i]);
  }
  return newArr;
}

String.prototype.to_o = function () {
  var thisString = this;
  var newObj = {};
  for (var i = 0; i < thisString.length; i++) {
    newObj[thisString[i]] = thisString[i];
  }
  return newObj;
}

String.prototype.includes = function (pattern) {
  var thisString = this;
  return this.indexOf(pattern) > -1;
}

String.prototype.upcase = function () {
  return this.toUpperCase();
}

String.prototype.downcase = function () {
  return this.toLowerCase();
}

String.prototype.titleize = function (all) {
  var wordArr = this.split(" ");

  if (!all) return this[0].upcase() + this.slice(1);

  return wordArr.map(function(word) {
    return word[0].upcase() + word.slice(1);
  }).join(" ");
}

String.prototype.pluralize = function (num, pluralText) {
  if ( num > 1) {
    return pluralText || this + 's';
  }
  if (!_defined(num)) {
    return this + 's';
  }
  return this.toString();
}
