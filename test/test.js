var assert = require('assert');
var heplerMeth = require('../src/index');

var num1 = 1, num2 = 2.1;
var str1 = "1", str2 = "2.1", str3 = "Hellooo World";
var arr = [4, 1, 2, 1, 4, 5, 4];
var arrOfArr = [[1, 2], [3, 4]];
var obj = {hello: "world"};
var obj1 = {hello: "world", goodbye: 'world'};
var arrOfObj = [obj, obj1];
var func = function () {};
var json = JSON.stringify(obj);

describe('Object', function () {

  describe('#is_n', function () {
    it('should return true if the variable is number, even for string', function () {
      assert.equal(num1.is_n(), true);
      assert.equal(num2.is_n(), true);
      assert.equal(str1.is_n(), true);
    })

    it('should return false if Number is of String type', function () {
      assert.equal(str1.is_n(true), false);
    })

    it('should return false if the variable is not Number', function () {
      assert.equal(arr.is_n(), false);
      assert.equal(obj.is_n(), false);
    })
  });

  describe('#is_i', function () {
    it('should return true if the variable is Integer', function () {
      assert.equal(num1.is_i(), true);
      assert.equal(num2.is_i(), false);
      assert.equal(str1.is_i(), true);
    })

    it('should return false if Integer is of String type', function () {
      assert.equal(str1.is_i(true), false);
    })
  });

  describe('#is_float', function () {
    it('should return true if the variable is Float', function () {
      assert.equal(num2.is_float(), true);
      assert.equal(num1.is_float(), false);
      assert.equal(str1.is_i(), true);
    })

    it('should return false if Float is of String type', function () {
      assert.equal(str2.is_float(true), false);
    })
  });

  describe('#is_s', function () {
    it('should return true if the variable is String', function () {
      assert.equal(str1.is_s(), true);
      assert.equal(num1.is_s(), false);
    })
  });
  
  describe('#is_a', function () {
    it('should return true if the variable is Array', function () {
      assert.equal(arr.is_a(), true);
      assert.equal(num1.is_a(), false);
    })
  });

  describe('#is_o', function () {
    it('should return true if the variable is Object', function () {
      assert.equal(obj.is_o(), true);
      assert.equal(arr.is_o(), false);
    })
  });
  
  describe('#is_f', function () {
    it('should return true if the variable is Function', function () {
      assert.equal(func.is_f(), true);
      assert.equal(arr.is_f(), false);
    })
  });

  describe('#is_json', function () {
    it('should return true if the variable is JSON', function () {
      assert.equal(json.is_json(), true);
      assert.equal(func.is_json(), false);
    })
  });
  
  describe('#to_json', function () {
    it('should return JSON equivalent of variable', function () {
      assert.equal(obj.to_json(), JSON.stringify(obj));
      assert.equal(arr.to_json(), JSON.stringify(arr));
    })
  });
  
  describe('#present', function () {
    it('should return true if variable has value', function () {
      assert.equal(str1.present(), true);
      assert.equal(arr.present(), true);
      assert.equal(obj.present(), true);
    })
    
    it('should return false if variable is empty', function () {
      assert.equal("".present(), false);
      assert.equal([].present(), false);
      assert.equal({}.present(), false);
    })
  });
  
  describe('#empty', function () {
    it('should return true if variable is empty', function () {
      assert.equal("".empty(), true);
      assert.equal([].empty(), true);
      assert.equal({}.empty(), true);

    })
    
    it('should return false if variable is empty', function () {
      assert.equal(str1.empty(), false);
      assert.equal(arr.empty(), false);
      assert.equal(obj.empty(), false);
    })
  });
  
  describe('#count', function () {
    it('should return occurrence of patter in a String or Array', function () {
      assert.equal(str3.count("o"), 4);
      assert.equal(str3.count("l"), 3);
      assert.equal(str3.count("Hello"), 1);
      assert.equal(arr.count(1), 2);
      assert.equal(arr.count(4), 3);
    })
    
    it('should return 0 if pattern is not present in String or Array', function () {
      assert.equal(str3.count("odo"), 0);
      assert.equal(arr.count(100), 0);
    })
  });
  
  describe('#equals', function () {
    it('should return true if two Number, Object, String or Array are similar', function () {
      assert.equal(str3.equals(str3), true);
      assert.equal(arr.equals(arr), true);
      assert.equal(obj.equals(obj), true);
      assert.equal(num1.equals(num1), true);
    })
    
    it('should return false if two Object, String or Array are not similar', function () {
      assert.equal(str3.equals("odo"), false);
      assert.equal(arr.equals([1, 2]), false);
      assert.equal(obj.equals({1: 2}), false);
    })
  });

  describe('#to_query', function () {
    it('should return Query string from Object passed', function () {
      assert.equal(obj1.to_query(obj1), "hello=world&goodbye=world");
    })    
  });

  describe('#has', function () {
    it('should return true if key is present in Object', function () {
      assert.equal(obj1.has('hello'), true);
      assert.equal(obj1.has('hellow'), false);
    });

    it('should return true if key and value both present in Object', function () {
      assert.equal(obj1.has('hello', 'world'), true);
      assert.equal(obj1.has('hellow', 'world'), false);
    }); 
  });
  
  describe('#hasValue', function () {
    it('should return true if value is present in any key of Object', function () {
      assert.equal(obj1.hasValue('world'), true);
      assert.equal(obj1.hasValue('hellow'), false);
    });
  });
})

describe('Array', function () {
  describe('#equals', function () {
    it("should return true if two arrays are same else false", function () {
      assert.equal([1, 2, 3].equals([1, 2 , 3]), true);
      assert.equal([1, 2, 3].equals([1, 2]), false);
    })

    it("should return true if checking nested array as well", function () {
      assert.equal([1, 2, [3, 4]].equals([1, 2, [3, 4]]), true);
      assert.equal([1, 2, [3, 4]].equals([1, 2]), false);
    })

    it("should return true if array elements are object", function () {
      assert.equal([1, 2, {hello: 'world'}].equals([1, 2, {hello: 'world'}]), true);
      assert.equal([1, 2, {hello: 'world!'}].equals([1, 2, {hello: 'world'}]), false);
    })
  })

  describe('#includes', function () {
    it("should return true/false if Array include a value", function () {
      assert.equal(arr.includes(1), true);
      assert.equal(arr.includes(6), false);
    });

    it("should return true/false if Array is present in Array", function () {
      assert.equal(arrOfArr.includes([1, 2]), true);
      assert.equal(arrOfArr.includes([1, 2, 3]), false);
    });

    it("should return true/false if Object is present in Array", function () {
      assert.equal(arrOfObj.includes(obj), true);
      assert.equal(arrOfObj.includes(obj1), true);
      assert.equal(arrOfObj.includes({1: 2}), false);
    });
  })
})