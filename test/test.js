console.log("Tests initiating...");
module.exports=require('theory')
('test',function(a){
	var testit = (function(z,x,y){
		
		state("theory.bi( TEST ).is()");
		test("false", true, theory.bi(false).is());
		test("true", true, theory.bi(true).is());
		test("''", false, theory.bi('').is());
		test("'a'", false, theory.bi('a').is());
		test("0", false, theory.bi(0).is());
		test("1", false, theory.bi(1).is());
		test("[]", false, theory.bi([]).is());
		test("[1]", false, theory.bi([1]).is());
		test("{}", false, theory.bi({}).is());
		test("{a:1}", false, theory.bi({a:1}).is());
		test("function(){}", false, theory.bi(function(){}).is());
		
		state("theory.bi.is( TEST )");
		test("false", true, theory.bi.is(false));
		test("true", true, theory.bi.is(true));
		test("''", false, theory.bi.is(''));
		test("'a'", false, theory.bi.is('a'));
		test("0", false, theory.bi.is(0));
		test("1", false, theory.bi.is(1));
		test("[]", false, theory.bi.is([]));
		test("[1]", false, theory.bi.is([1]));
		test("{}", false, theory.bi.is({}));
		test("{a:1}", false, theory.bi.is({a:1}));
		test("function(){}", false, theory.bi.is(function(){}));
		
		state("theory.num( TEST ).is()");
		test("0", true, theory.num(0).is());
		test("1", true, theory.num(1).is());
		test("Infinity", true, theory.num(Infinity).is());
		test("NaN", false, theory.num(NaN).is());
		test("''", false, theory.num('').is());
		test("'a'", false, theory.num('a').is());
		test("[]", false, theory.num([]).is());
		test("[1]", false, theory.num([1]).is());
		test("{}", false, theory.num({}).is());
		test("{a:1}", false, theory.num({a:1}).is());
		test("false", false, theory.num(false).is());
		test("true", false, theory.num(true).is());
		test("function(){}", false, theory.num(function(){}).is());
		
		state("theory.num.is( TEST )");
		test("0", true, theory.num.is(0));
		test("1", true, theory.num.is(1));
		test("Infinity", true, theory.num.is(Infinity));
		test("NaN", false, theory.num.is(NaN));
		test("''", false, theory.num.is(''));
		test("'a'", false, theory.num.is('a'));
		test("[]", false, theory.num.is([]));
		test("[1]", false, theory.num.is([1]));
		test("{}", false, theory.num.is({}));
		test("{a:1}", false, theory.num.is({a:1}));
		test("false", false, theory.num.is(false));
		test("true", false, theory.num.is(true));
		test("function(){}", false, theory.num.is(function(){}));
		
		state("theory.text( TEST ).is()");
		test("''", true, theory.text('').is());
		test("'a'", true, theory.text('a').is());
		test("0", false, theory.text(0).is());
		test("1", false, theory.text(1).is());
		test("[]", false, theory.text([]).is());
		test("[1]", false, theory.text([1]).is());
		test("{}", false, theory.text({}).is());
		test("{a:1}", false, theory.text({a:1}).is());
		test("false", false, theory.text(false).is());
		test("true", false, theory.text(true).is());
		test("function(){}", false, theory.text(function(){}).is());
		
		state("theory.text.is( TEST )");
		test("''", true, theory.text.is(''));
		test("'a'", true, theory.text.is('a'));
		test("0", false, theory.text.is(0));
		test("1", false, theory.text.is(1));
		test("[]", false, theory.text.is([]));
		test("[1]", false, theory.text.is([1]));
		test("{}", false, theory.text.is({}));
		test("{a:1}", false, theory.text.is({a:1}));
		test("false", false, theory.text.is(false));
		test("true", false, theory.text.is(true));
		test("function(){}", false, theory.text.is(function(){}));
	
		state("theory.list( TEST ).is()");
		test("[]", true, theory.list([]).is());
		test("[1]", true, theory.list([1]).is());
		test("0", false, theory.list(0).is());
		test("1", false, theory.list(1).is());
		test("''", false, theory.list('').is());
		test("'a'", false, theory.list('a').is());
		test("{}", false, theory.list({}).is());
		test("{a:1}", false, theory.list({a:1}).is());
		test("false", false, theory.list(false).is());
		test("true", false, theory.list(true).is());
		test("function(){}", false, theory.list(function(){}).is());
		
		state("theory.list.is( TEST )");
		test("[]", true, theory.list.is([]));
		test("[1]", true, theory.list.is([1]));
		test("0", false, theory.list.is(0));
		test("1", false, theory.list.is(1));
		test("''", false, theory.list.is(''));
		test("'a'", false, theory.list.is('a'));
		test("{}", false, theory.list.is({}));
		test("{a:1}", false, theory.list.is({a:1}));
		test("false", false, theory.list.is(false));
		test("true", false, theory.list.is(true));
		test("function(){}", false, theory.list.is(function(){}));
		
		state("theory.obj( TEST ).is()");
		test("{}", true, theory.obj({}).is());
		test("{a:1}", true, theory.obj({a:1}).is());
		test("0", false, theory.obj(0).is());
		test("1", false, theory.obj(1).is());
		test("''", false, theory.obj('').is());
		test("'a'", false, theory.obj('a').is());
		test("[]", false, theory.obj([]).is());
		test("[1]", false, theory.obj([1]).is());
		test("false", false, theory.obj(false).is());
		test("true", false, theory.obj(true).is());
		test("function(){}", false, theory.obj(function(){}).is());
		
		state("theory.obj.is( TEST )");
		test("{}", true, theory.obj.is({}));
		test("{a:1}", true, theory.obj.is({a:1}));
		test("0", false, theory.obj.is(0));
		test("1", false, theory.obj.is(1));
		test("''", false, theory.obj.is(''));
		test("'a'", false, theory.obj.is('a'));
		test("[]", false, theory.obj.is([]));
		test("[1]", false, theory.obj.is([1]));
		test("false", false, theory.obj.is(false));
		test("true", false, theory.obj.is(true));
		test("function(){}", false, theory.obj.is(function(){}));
		
		state("theory.fns( TEST ).is()");
		test("function(){}", true, theory.fns(function(){}).is());
		test("''", false, theory.fns('').is());
		test("'a'", false, theory.fns('a').is());
		test("0", false, theory.fns(0).is());
		test("1", false, theory.fns(1).is());
		test("[]", false, theory.fns([]).is());
		test("[1]", false, theory.fns([1]).is());
		test("{}", false, theory.fns({}).is());
		test("{a:1}", false, theory.fns({a:1}).is());
		test("false", false, theory.fns(false).is());
		test("true", false, theory.fns(true).is());
		
		state("theory.fns.is( TEST )");
		test("function(){}", true, theory.fns.is(function(){}));
		test("''", false, theory.fns.is(''));
		test("'a'", false, theory.fns.is('a'));
		test("0", false, theory.fns.is(0));
		test("1", false, theory.fns.is(1));
		test("[]", false, theory.fns.is([]));
		test("[1]", false, theory.fns.is([1]));
		test("{}", false, theory.fns.is({}));
		test("{a:1}", false, theory.fns.is({a:1}));
		test("false", false, theory.fns.is(false));
		test("true", false, theory.fns.is(true));
		
		state("theory.num( TEST ) || .ify( TEST )");
		test("0", 0, theory.num(0).ify());
		test("0", 0, theory.num.ify(0));
		test("1", 1, theory.num(1).ify());
		test("1", 1, theory.num.ify(1));
		test("-1", -1, theory.num(-1).ify());
		test("-1", -1, theory.num.ify(-1));
		test("'0'", 0, theory.num('0').ify());
		test("'0'", 0, theory.num.ify('0'));
		test("'1'", 1, theory.num('1').ify());
		test("'1'", 1, theory.num.ify('1'));
		test("'-1'", -1, theory.num('-1').ify());
		test("'-1'", -1, theory.num.ify('-1'));
		test("'10'", 10, theory.num('10').ify());
		test("'10'", 10, theory.num.ify('10'));
		test("'01'", 1, theory.num('01').ify());
		test("'01'", 1, theory.num.ify('01'));
		test("'37.91'", 37.91, theory.num('37.91').ify());
		test("'37.91'", 37.91, theory.num.ify('37.91'));
		test("'-7.3'", -7.3, theory.num('-7.3').ify());
		test("'-7.3'", -7.3, theory.num.ify('-7.3'));
		test("'A14C'", 14, theory.num('A14C').ify());
		test("'A14C'", 14, theory.num.ify('A14C'));
		test("'A14C2'", 14, theory.num('A14C2').ify());
		test("'A14C2'", 14, theory.num.ify('A14C2'));
		test("'A2.1,2'", 2.1, theory.num('A2.1,2').ify());
		test("'A2.1,2'", 2.1, theory.num.ify('A2.1,2'));
		
		test("0,[]", [0], theory.num(0).ify([]));
		test("0,[]", [0], theory.num.ify(0,[]));
		test("1,[]", [1], theory.num(1).ify([]));
		test("1,[]", [1], theory.num.ify(1,[]));
		test("'0',[]", [0], theory.num('0').ify([]));
		test("'0',[]", [0], theory.num.ify('0',[]));
		test("'A14C',[]", [14], theory.num('A14C').ify([]));
		test("'A14C',[]", [14], theory.num.ify('A14C',[]));
		test("'A14C2',[]", [14,2], theory.num('A14C2').ify([]));
		test("'A14C2',[]", [14,2], theory.num.ify('A14C2',[]));
		test("'A0.4C45,-100. Z 0032 - 5',[]", [0.4,45,-100,32,5], theory.num('A0.4C45,-100. Z 0032 - 5').ify([]));
		test("'A0.4C45,-100. Z 0032 - 5',[]", [0.4,45,-100,32,5], theory.num.ify('A0.4C45,-100. Z 0032 - 5',[]));
		
		state("theory.num( TEST ) || .random( TEST ) || .r( TEST )");
		test("", 6, theory.num.r().toString().length);
		test("11", 11, theory.num.r(11).toString().length);
		
		state("theory.text( TEST ) || .ify( TEST )");
		test("0", "0", theory.text(0).ify());
		test("0", "0", theory.text.ify(0));
		test("22", "22", theory.text(22).ify());
		test("22", "22", theory.text.ify(22));
		test("[true,33,'yay']", '[true,33,"yay"]', theory.text([true,33,'yay']).ify());
		test("[true,33,'yay']", '[true,33,"yay"]', theory.text.ify([true,33,'yay']));
		test("{a:0,b:'1',c:[0,'1'],d:{e:'f'}}", '{"a":0,"b":"1","c":[0,"1"],"d":{"e":"f"}}', theory.text({a:0,b:'1',c:[0,'1'],d:{e:'f'}}).ify());
		test("{a:0,b:'1',c:[0,'1'],d:{e:'f'}}", '{"a":0,"b":"1","c":[0,"1"],"d":{"e":"f"}}', theory.text.ify({a:0,b:'1',c:[0,'1'],d:{e:'f'}}));
		test("false", "false", theory.text(false).ify());
		test("false", "false", theory.text.ify(false));
		test("true", "true", theory.text(true).ify());
		test("true", "true", theory.text.ify(true));
		
		
		state("theory.text( TEST ) || .random( TEST ) || .r( TEST )");
		test("", 16, theory.text.r().length);
		test("11", 11, theory.text(11).random().length);
		test("4", 4, theory.text.r(4).length);
		
		state("theory.text( TEST ) || .clip( TEST )");
		test('"A B C D"', 'A B C', theory.text('A B C D').clip(' ',0,-1));
		test('"A B C D"', 'A B C', theory.text.clip('A B C D',' ',0,-1));
		test('"path/to/awesome.js"', "js", theory.text("path/to/awesome.js").clip('.',-1));
		test('"path/to/awesome.js"', "js", theory.text.clip("path/to/awesome.js",'.',-1));
		
		state("theory.text( TEST ) || .caps( TEST )");
		test('"shout!"', "SHOUT!", theory.text("shout!").caps());
		test('"shout!"', "SHOUT!", theory.text.caps("shout!"));
		
		state("theory.text( TEST ) || .low( TEST )");
		test('"HUSH 1"', "hush 1", theory.text("HUSH 1").low());
		test('"HUSH 1"', "hush 1", theory.text.low("HUSH 1"));
		
		state("theory.list( TEST ) || .at( TEST )");
		test('[1,2,3,4,5,6,7,8,9]', 2, theory.list([1,2,3,4,5,6,7,8,9]).at(2));
		test('[1,2,3,4,5,6,7,8,9]', 2, theory.list.at([1,2,3,4,5,6,7,8,9],2));
		test('[1,2,3,4,5,6,7,8,9]', 8, theory.list([1,2,3,4,5,6,7,8,9]).at(-2));
		test('[1,2,3,4,5,6,7,8,9]', 8, theory.list.at([1,2,3,4,5,6,7,8,9],-2));
		
		state("theory.list( TEST ) || .ify( TEST )");
		test('"Bob, Joe,Isaac , Fred"', ["Bob","Joe","Isaac","Fred"], theory.list("Bob, Joe,Isaac , Fred").ify());
		test('"Bob, Joe,Isaac , Fred"', ["Bob","Joe","Isaac","Fred"], theory.list.ify("Bob, Joe,Isaac , Fred"));
		test('"1600 Amphitheatre Parkway  Mountain View, CA 94043; 1 Infinite Loop Cupertino, CA 95014",{split:\';\'}', 
			["1600 Amphitheatre Parkway  Mountain View, CA 94043","1 Infinite Loop Cupertino, CA 95014"], 
			theory.list("1600 Amphitheatre Parkway  Mountain View, CA 94043; 1 Infinite Loop Cupertino, CA 95014").ify({split:';'}));
		test('"1600 Amphitheatre Parkway  Mountain View, CA 94043; 1 Infinite Loop Cupertino, CA 95014",{split:\';\'}', 
			["1600 Amphitheatre Parkway  Mountain View, CA 94043","1 Infinite Loop Cupertino, CA 95014"], 
			theory.list.ify("1600 Amphitheatre Parkway  Mountain View, CA 94043; 1 Infinite Loop Cupertino, CA 95014",{split:';'}));
		test("{a:1,b:'c',d:[0,1,2]}", ['a:1','b:c','d:0,1,2'], theory.list({a:1,b:'c',d:[0,1,2]}).ify());
		test("{a:1,b:'c',d:[0,1,2]}", ['a:1','b:c','d:0,1,2'], theory.list.ify({a:1,b:'c',d:[0,1,2]}));
		test("{a:1,b:'c',d:[0,1,2]}", ['a=1','b=c','d=0,1,2'], theory.list({a:1,b:'c',d:[0,1,2]}).ify({wedge:'='}));
		test("{a:1,b:'c',d:[0,1,2]}", ['a=1','b=c','d=0,1,2'], theory.list.ify({a:1,b:'c',d:[0,1,2]},{wedge:'='}));
		
		/*
		state("\nLIST functions:");
		//log((theory.list([4,0,8]).each(8) === (2+theory.list.index)) ," . each indexOf + swappable index");
		//log((theory.list.each([9,1,2],2) === (2+theory.list.index)) ," each indexOf + swappable index");
		var w = 0;
		theory.list([1,4,5]).each(function(v,i,t){
			w += v;
		});
		//log((w === 10) ," . each sums 10");
		w = 0;
		theory.list.each([8,-3,5],function(v,i,t){
			w += v;
		});
		//log((w === 10) ," each sums 10");
		state("\nOBJ functions:");
		var w = '';
		theory.list({did:'not',hear:'you'}).each(function(v,i,t){
			w += v;
		});
		//log((w === 'notyou') ," . each key/v");
		w = '';
		theory.list.each({you:'are',way:'cool'},function(v,i,t){
			w += v;
		});
		//log((w === 'arecool') ," each key/v");
		state("\nFNS functions:");
		var args = theory.fns.sort(theory.list.slit.call(arguments, 0));
		*/
	});
	var start = new Date().getTime(),
	state = (function(s){
		console.log(' --- ' + s + ' --- ');
		if(!root.page) return;
		test.t = test.t||document.getElementById("test");
		test.t.innerHTML=(test.t.innerHTML+"<br/><br/>"+s);
	}), test = (function(s, b, t){
		var OK = test.eq(b,t), SOK = OK? 'OK' : 'ERROR';
		console.log(SOK + '\t' + s + '\t' + JSON.stringify(b));
		if(!root.page) return;
		test.t = test.t||document.getElementById("test");
		SOK = OK? 'OK' : '<span class="err">ERROR</span>';
		test.t.innerHTML=(test.t.innerHTML+"<br/>"+ SOK + '&#09;' + s + '&#09;' + JSON.stringify(b));
	}), eq =
	test.eq = function(a, b, aStack, bStack) { // via Underscore
		var _ = {};
		_.isFunction = function(obj) {
		  return typeof obj === 'function';
		};
		_.has = function(obj, key) {
		  return hasOwnProperty.call(obj, key);
		};
		aStack = aStack||[]; bStack = bStack||[];
		// Identical objects are equal. `0 === -0`, but they aren't identical.
		// See the Harmony `egal` proposal: http://wiki.ecmascript.org/doku.php?id=harmony:egal.
		if (a === b) return a !== 0 || 1 / a == 1 / b;
		// A strict comparison is necessary because `null == undefined`.
		if (a == null || b == null) return a === b;
		// Compare `[[Class]]` names.
		var className = toString.call(a);
		if (className != toString.call(b)) return false;
		switch (className) {
		  // Strings, numbers, dates, and booleans are compared by value.
		  case '[object String]':
			// Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
			// equivalent to `new String("5")`.
			return a == String(b);
		  case '[object Number]':
			// `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
			// other numeric values.
			return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
		  case '[object Date]':
		  case '[object Boolean]':
			// Coerce dates and booleans to numeric primitive values. Dates are compared by their
			// millisecond representations. Note that invalid dates with millisecond representations
			// of `NaN` are not equivalent.
			return +a == +b;
		  // RegExps are compared by their source patterns and flags.
		  case '[object RegExp]':
			return a.source == b.source &&
				   a.global == b.global &&
				   a.multiline == b.multiline &&
				   a.ignoreCase == b.ignoreCase;
		}
		if (typeof a != 'object' || typeof b != 'object') return false;
		// Assume equality for cyclic structures. The algorithm for detecting cyclic
		// structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
		var length = aStack.length;
		while (length--) {
		  // Linear search. Performance is inversely proportional to the number of
		  // unique nested structures.
		  if (aStack[length] == a) return bStack[length] == b;
		}
		// Add the first object to the stack of traversed objects.
		aStack.push(a);
		bStack.push(b);
		var size = 0, result = true;
		// Recursively compare objects and arrays.
		if (className == '[object Array]') {
		  // Compare array lengths to determine if a deep comparison is necessary.
		  size = a.length;
		  result = size == b.length;
		  if (result) {
			// Deep compare the contents, ignoring non-numeric properties.
			while (size--) {
			  if (!(result = eq(a[size], b[size], aStack, bStack))) break;
			}
		  }
		} else {
		  // Objects with different constructors are not equivalent, but `Object`s
		  // from different frames are.
		  var aCtor = a.constructor, bCtor = b.constructor;
		  if (aCtor !== bCtor && !(_.isFunction(aCtor) && (aCtor instanceof aCtor) &&
								   _.isFunction(bCtor) && (bCtor instanceof bCtor))) {
			return false;
		  }
		  // Deep compare objects.
		  for (var key in a) {
			if (_.has(a, key)) {
			  // Count the expected number of properties.
			  size++;
			  // Deep compare each member.
			  if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
			}
		  }
		  // Ensure that both objects contain the same number of properties.
		  if (result) {
			for (key in b) {
			  if (_.has(b, key) && !(size--)) break;
			}
			result = !size;
		  }
		}
		// Remove the first object from the stack of traversed objects.
		aStack.pop();
		bStack.pop();
		return result;
	};
	testit("we","will",[3,7],8,{never:'see'});
});