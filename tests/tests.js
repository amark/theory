console.log("tests initiating...");
module.exports=require('theory')
('tests',function(a){
	var testsit = (function(z,x,y){
		
		state("theory.bi( TEST ).is()");
		tests("false", true, theory.bi(false).is());
		tests("true", true, theory.bi(true).is());
		tests("''", false, theory.bi('').is());
		tests("'a'", false, theory.bi('a').is());
		tests("0", false, theory.bi(0).is());
		tests("1", false, theory.bi(1).is());
		tests("[]", false, theory.bi([]).is());
		tests("[1]", false, theory.bi([1]).is());
		tests("{}", false, theory.bi({}).is());
		tests("{a:1}", false, theory.bi({a:1}).is());
		tests("function(){}", false, theory.bi(function(){}).is());
		
		state("theory.bi.is( TEST )");
		tests("false", true, theory.bi.is(false));
		tests("true", true, theory.bi.is(true));
		tests("''", false, theory.bi.is(''));
		tests("'a'", false, theory.bi.is('a'));
		tests("0", false, theory.bi.is(0));
		tests("1", false, theory.bi.is(1));
		tests("[]", false, theory.bi.is([]));
		tests("[1]", false, theory.bi.is([1]));
		tests("{}", false, theory.bi.is({}));
		tests("{a:1}", false, theory.bi.is({a:1}));
		tests("function(){}", false, theory.bi.is(function(){}));
		
		state("theory.num( TEST ).is()");
		tests("0", true, theory.num(0).is());
		tests("1", true, theory.num(1).is());
		tests("Infinity", true, theory.num(Infinity).is());
		tests("NaN", false, theory.num(NaN).is());
		tests("''", false, theory.num('').is());
		tests("'a'", false, theory.num('a').is());
		tests("[]", false, theory.num([]).is());
		tests("[1]", false, theory.num([1]).is());
		tests("{}", false, theory.num({}).is());
		tests("{a:1}", false, theory.num({a:1}).is());
		tests("false", false, theory.num(false).is());
		tests("true", false, theory.num(true).is());
		tests("function(){}", false, theory.num(function(){}).is());
		
		state("theory.num.is( TEST )");
		tests("0", true, theory.num.is(0));
		tests("1", true, theory.num.is(1));
		tests("Infinity", true, theory.num.is(Infinity));
		tests("NaN", false, theory.num.is(NaN));
		tests("''", false, theory.num.is(''));
		tests("'a'", false, theory.num.is('a'));
		tests("[]", false, theory.num.is([]));
		tests("[1]", false, theory.num.is([1]));
		tests("{}", false, theory.num.is({}));
		tests("{a:1}", false, theory.num.is({a:1}));
		tests("false", false, theory.num.is(false));
		tests("true", false, theory.num.is(true));
		tests("function(){}", false, theory.num.is(function(){}));
		
		state("theory.text( TEST ).is()");
		tests("''", true, theory.text('').is());
		tests("'a'", true, theory.text('a').is());
		tests("0", false, theory.text(0).is());
		tests("1", false, theory.text(1).is());
		tests("[]", false, theory.text([]).is());
		tests("[1]", false, theory.text([1]).is());
		tests("{}", false, theory.text({}).is());
		tests("{a:1}", false, theory.text({a:1}).is());
		tests("false", false, theory.text(false).is());
		tests("true", false, theory.text(true).is());
		tests("function(){}", false, theory.text(function(){}).is());
		
		state("theory.text.is( TEST )");
		tests("''", true, theory.text.is(''));
		tests("'a'", true, theory.text.is('a'));
		tests("0", false, theory.text.is(0));
		tests("1", false, theory.text.is(1));
		tests("[]", false, theory.text.is([]));
		tests("[1]", false, theory.text.is([1]));
		tests("{}", false, theory.text.is({}));
		tests("{a:1}", false, theory.text.is({a:1}));
		tests("false", false, theory.text.is(false));
		tests("true", false, theory.text.is(true));
		tests("function(){}", false, theory.text.is(function(){}));
	
		state("theory.list( TEST ).is()");
		tests("[]", true, theory.list([]).is());
		tests("[1]", true, theory.list([1]).is());
		tests("0", false, theory.list(0).is());
		tests("1", false, theory.list(1).is());
		tests("''", false, theory.list('').is());
		tests("'a'", false, theory.list('a').is());
		tests("{}", false, theory.list({}).is());
		tests("{a:1}", false, theory.list({a:1}).is());
		tests("false", false, theory.list(false).is());
		tests("true", false, theory.list(true).is());
		tests("function(){}", false, theory.list(function(){}).is());
		
		state("theory.list.is( TEST )");
		tests("[]", true, theory.list.is([]));
		tests("[1]", true, theory.list.is([1]));
		tests("0", false, theory.list.is(0));
		tests("1", false, theory.list.is(1));
		tests("''", false, theory.list.is(''));
		tests("'a'", false, theory.list.is('a'));
		tests("{}", false, theory.list.is({}));
		tests("{a:1}", false, theory.list.is({a:1}));
		tests("false", false, theory.list.is(false));
		tests("true", false, theory.list.is(true));
		tests("function(){}", false, theory.list.is(function(){}));
		
		state("theory.obj( TEST ).is()");
		tests("{}", true, theory.obj({}).is());
		tests("{a:1}", true, theory.obj({a:1}).is());
		tests("0", false, theory.obj(0).is());
		tests("1", false, theory.obj(1).is());
		tests("''", false, theory.obj('').is());
		tests("'a'", false, theory.obj('a').is());
		tests("[]", false, theory.obj([]).is());
		tests("[1]", false, theory.obj([1]).is());
		tests("false", false, theory.obj(false).is());
		tests("true", false, theory.obj(true).is());
		tests("function(){}", false, theory.obj(function(){}).is());
		
		state("theory.obj.is( TEST )");
		tests("{}", true, theory.obj.is({}));
		tests("{a:1}", true, theory.obj.is({a:1}));
		tests("0", false, theory.obj.is(0));
		tests("1", false, theory.obj.is(1));
		tests("''", false, theory.obj.is(''));
		tests("'a'", false, theory.obj.is('a'));
		tests("[]", false, theory.obj.is([]));
		tests("[1]", false, theory.obj.is([1]));
		tests("false", false, theory.obj.is(false));
		tests("true", false, theory.obj.is(true));
		tests("function(){}", false, theory.obj.is(function(){}));
		
		state("theory.fns( TEST ).is()");
		tests("function(){}", true, theory.fns(function(){}).is());
		tests("''", false, theory.fns('').is());
		tests("'a'", false, theory.fns('a').is());
		tests("0", false, theory.fns(0).is());
		tests("1", false, theory.fns(1).is());
		tests("[]", false, theory.fns([]).is());
		tests("[1]", false, theory.fns([1]).is());
		tests("{}", false, theory.fns({}).is());
		tests("{a:1}", false, theory.fns({a:1}).is());
		tests("false", false, theory.fns(false).is());
		tests("true", false, theory.fns(true).is());
		
		state("theory.fns.is( TEST )");
		tests("function(){}", true, theory.fns.is(function(){}));
		tests("''", false, theory.fns.is(''));
		tests("'a'", false, theory.fns.is('a'));
		tests("0", false, theory.fns.is(0));
		tests("1", false, theory.fns.is(1));
		tests("[]", false, theory.fns.is([]));
		tests("[1]", false, theory.fns.is([1]));
		tests("{}", false, theory.fns.is({}));
		tests("{a:1}", false, theory.fns.is({a:1}));
		tests("false", false, theory.fns.is(false));
		tests("true", false, theory.fns.is(true));
		
		state("theory.num( TEST ) || .ify( TEST )");
		tests("0", 0, theory.num(0).ify());
		tests("0", 0, theory.num.ify(0));
		tests("1", 1, theory.num(1).ify());
		tests("1", 1, theory.num.ify(1));
		tests("-1", -1, theory.num(-1).ify());
		tests("-1", -1, theory.num.ify(-1));
		tests("'0'", 0, theory.num('0').ify());
		tests("'0'", 0, theory.num.ify('0'));
		tests("'1'", 1, theory.num('1').ify());
		tests("'1'", 1, theory.num.ify('1'));
		tests("'-1'", -1, theory.num('-1').ify());
		tests("'-1'", -1, theory.num.ify('-1'));
		tests("'10'", 10, theory.num('10').ify());
		tests("'10'", 10, theory.num.ify('10'));
		tests("'01'", 1, theory.num('01').ify());
		tests("'01'", 1, theory.num.ify('01'));
		tests("'37.91'", 37.91, theory.num('37.91').ify());
		tests("'37.91'", 37.91, theory.num.ify('37.91'));
		tests("'-7.3'", -7.3, theory.num('-7.3').ify());
		tests("'-7.3'", -7.3, theory.num.ify('-7.3'));
		tests("'A14C'", 14, theory.num('A14C').ify());
		tests("'A14C'", 14, theory.num.ify('A14C'));
		tests("'A14C2'", 14, theory.num('A14C2').ify());
		tests("'A14C2'", 14, theory.num.ify('A14C2'));
		tests("'A2.1,2'", 2.1, theory.num('A2.1,2').ify());
		tests("'A2.1,2'", 2.1, theory.num.ify('A2.1,2'));
		
		tests("0,[]", [0], theory.num(0).ify([]));
		tests("0,[]", [0], theory.num.ify(0,[]));
		tests("1,[]", [1], theory.num(1).ify([]));
		tests("1,[]", [1], theory.num.ify(1,[]));
		tests("'0',[]", [0], theory.num('0').ify([]));
		tests("'0',[]", [0], theory.num.ify('0',[]));
		tests("'A14C',[]", [14], theory.num('A14C').ify([]));
		tests("'A14C',[]", [14], theory.num.ify('A14C',[]));
		tests("'A14C2',[]", [14,2], theory.num('A14C2').ify([]));
		tests("'A14C2',[]", [14,2], theory.num.ify('A14C2',[]));
		tests("'A0.4C45,-100. Z 0032 - 5',[]", [0.4,45,-100,32,5], theory.num('A0.4C45,-100. Z 0032 - 5').ify([]));
		tests("'A0.4C45,-100. Z 0032 - 5',[]", [0.4,45,-100,32,5], theory.num.ify('A0.4C45,-100. Z 0032 - 5',[]));
		
		state("theory.num( TEST ) || .random( TEST ) || .r( TEST )");
		tests("", 6, theory.num.r().toString().length);
		tests("11", 11, theory.num.r(11).toString().length);
		
		state("theory.text( TEST ) || .ify( TEST )");
		tests("0", "0", theory.text(0).ify());
		tests("0", "0", theory.text.ify(0));
		tests("22", "22", theory.text(22).ify());
		tests("22", "22", theory.text.ify(22));
		tests("[true,33,'yay']", '[true,33,"yay"]', theory.text([true,33,'yay']).ify());
		tests("[true,33,'yay']", '[true,33,"yay"]', theory.text.ify([true,33,'yay']));
		tests("{a:0,b:'1',c:[0,'1'],d:{e:'f'}}", '{"a":0,"b":"1","c":[0,"1"],"d":{"e":"f"}}', theory.text({a:0,b:'1',c:[0,'1'],d:{e:'f'}}).ify());
		tests("{a:0,b:'1',c:[0,'1'],d:{e:'f'}}", '{"a":0,"b":"1","c":[0,"1"],"d":{"e":"f"}}', theory.text.ify({a:0,b:'1',c:[0,'1'],d:{e:'f'}}));
		tests("false", "false", theory.text(false).ify());
		tests("false", "false", theory.text.ify(false));
		tests("true", "true", theory.text(true).ify());
		tests("true", "true", theory.text.ify(true));
		
		
		state("theory.text( TEST ) || .random( TEST ) || .r( TEST )");
		tests("", 16, theory.text.r().length);
		tests("11", 11, theory.text(11).random().length);
		tests("4", 4, theory.text.r(4).length);
		
		state("theory.text( TEST ) || .clip( TEST )");
		tests('"A B C D"', 'A B C', theory.text('A B C D').clip(' ',0,-1));
		tests('"A B C D"', 'A B C', theory.text.clip('A B C D',' ',0,-1));
		tests('"path/to/awesome.js"', "js", theory.text("path/to/awesome.js").clip('.',-1));
		tests('"path/to/awesome.js"', "js", theory.text.clip("path/to/awesome.js",'.',-1));
		
		state("theory.text( TEST ) || .caps( TEST )");
		tests('"shout!"', "SHOUT!", theory.text("shout!").caps());
		tests('"shout!"', "SHOUT!", theory.text.caps("shout!"));
		
		state("theory.text( TEST ) || .low( TEST )");
		tests('"HUSH 1"', "hush 1", theory.text("HUSH 1").low());
		tests('"HUSH 1"', "hush 1", theory.text.low("HUSH 1"));
		
		state("theory.list( TEST ) || .at( TEST )");
		tests('[1,2,3,4,5,6,7,8,9], 2', 2, theory.list([1,2,3,4,5,6,7,8,9]).at(2));
		tests('[1,2,3,4,5,6,7,8,9], 2', 2, theory.list.at([1,2,3,4,5,6,7,8,9],2));
		tests('[1,2,3,4,5,6,7,8,9], -2', 8, theory.list([1,2,3,4,5,6,7,8,9]).at(-2));
		tests('[1,2,3,4,5,6,7,8,9], -2', 8, theory.list.at([1,2,3,4,5,6,7,8,9],-2));
		tests('[1,2], 9', undefined, theory.list([1,2]).at(9));
		tests('[1,2], 9', undefined, theory.list.at([1,2],9));
		
		state("theory.list( TEST ) || .ebb( TEST )");
		tests('[2,3,4], 2', 3, theory.list([2,3,4]).ebb(2));
		tests('[2,3,4], 2', 3, theory.list.ebb([2,3,4],2));
		tests('[2,3,4], -2', 3, theory.list([2,3,4]).ebb(-2));
		tests('[2,3,4], -2', 3, theory.list.ebb([2,3,4],-2));
		tests('[2,3,4], 9', 4, theory.list([2,3,4]).ebb(9));
		tests('[2,3,4], 9', 4, theory.list.ebb([2,3,4],9));
		tests('[2,3,4], -9', 2, theory.list([2,3,4]).ebb(-9));
		tests('[2,3,4], -9', 2, theory.list.ebb([2,3,4],-9));
		tests('[2,3,0], 9', 0, theory.list([2,3,0]).ebb(9));
		tests('[2,3,0], 9', 0, theory.list.ebb([2,3,0],9));
		tests('[false,3,4], -9', false, theory.list([false,3,4]).ebb(-9));
		tests('[false,3,4], -9', false, theory.list.ebb([false,3,4],-9));
		
		state("theory.list( TEST ) || .ify( TEST )");
		tests('"Bob, Joe,Isaac , Fred"', ["Bob","Joe","Isaac","Fred"], theory.list("Bob, Joe,Isaac , Fred").ify());
		tests('"Bob, Joe,Isaac , Fred"', ["Bob","Joe","Isaac","Fred"], theory.list.ify("Bob, Joe,Isaac , Fred"));
		tests('"1,2,3 ; 4,5,6",{split:\';\'}', ["1,2,3","4,5,6"], theory.list("1,2,3 ; 4,5,6").ify({split:';'}));
		tests('"1,2,3 ; 4,5,6",{split:\';\'}', ["1,2,3","4,5,6"], theory.list.ify("1,2,3 ; 4,5,6",{split:';'}));
		tests("{a:1,b:'c',d:[0,1,2]}", ['a:1','b:c','d:0,1,2'], theory.list({a:1,b:'c',d:[0,1,2]}).ify());
		tests("{a:1,b:'c',d:[0,1,2]}", ['a:1','b:c','d:0,1,2'], theory.list.ify({a:1,b:'c',d:[0,1,2]}));
		tests("{a:1,b:'c',d:[0,1,2],e:{f:'g'}},{split:'='}", ["a=1", "b=c", "d=0,1,2", 'e={"f":"g"}'], theory.list({a:1,b:'c',d:[0,1,2],e:{f:'g'}}).ify({wedge:'='}));
		tests("{a:1,b:'c',d:[0,1,2],e:{f:'g'}},{split:'='}", ["a=1", "b=c", "d=0,1,2", 'e={"f":"g"}'], theory.list.ify({a:1,b:'c',d:[0,1,2],e:{f:'g'}},{wedge:'='}));
		
		state("theory.list( TEST ) || .fuse( TEST )");
		tests('[2,3],[4,5],[6,7]', [2,3,4,5,6,7], theory.list([2,3]).fuse([4,5],[6,7]));
		tests('[2,3],[4,5],[6,7]', [2,3,4,5,6,7], theory.list.fuse([2,3],[4,5],[6,7]));
		
		
		state("theory.list( TEST ) || .less( TEST )");
		tests("[0,1,'a','b','c','b','d'], 'b'", [0,1,'a','c','d'], theory.list([0,1,'a','b','c','b','d']).less('b'));
		tests("[0,1,'a','b','c','b','d'], b'", [0,1,'a','c','d'], theory.list.less([0,1,'a','b','c','b','d'],'b'));
		tests("[0,1,NaN,'','c',false,true,[1],[]], NaN,false,0,[],''", [1,'c',true,[1]], theory.list([0,1,NaN,'','c',false,true,[1],[]]).less(NaN,false,0,[],''));
		tests("[0,1,NaN,'','c',false,true,[1],[]], NaN,false,0,[],''", [1,'c',true,[1]], theory.list.less([0,1,NaN,'','c',false,true,[1],[]],NaN,false,0,[],''));
		tests("2, [0,0,1,2,2,3],[0,2]", [1,3], theory.list(2).less([0,0,1,2,2,3],[0,2]));
		
		state("theory.list( TEST ) || .find( TEST )");
		tests("[-2,-1,0,1,2],0", 3, theory.list([-2,-1,0,1,2]).find(0));
		tests("[-2,-1,0,1,2],0", 3, theory.list.find([-2,-1,0,1,2],0));
		tests("['a','b','c'],'z'", 0, theory.list(['a','b','c']).find('z'));
		tests("['a','b','c'],'z'", 0, theory.list.find(['a','b','c'],'z'));
		tests("[false,true,NaN,0,1,'','a',['b'],{c:'d'}],NaN", 3, theory.list([false,true,NaN,0,1,'','a',['b'],{c:'d'}]).find(NaN));
		tests("[false,true,NaN,0,1,'','a',['b'],{c:'d'}],NaN", 3, theory.list.find([false,true,NaN,0,1,'','a',['b'],{c:'d'}],NaN));
		tests("[false,true,NaN,0,1,'','a',['b'],{c:'d'}],['b']", 8, theory.list([false,true,NaN,0,1,'','a',['b'],{c:'d'}]).find(['b']));
		tests("[false,true,NaN,0,1,'','a',['b'],{c:'d'}],['b']", 8, theory.list.find([false,true,NaN,0,1,'','a',['b'],{c:'d'}],['b']));
		tests("[false,true,NaN,0,1,'','a',['b'],{c:'d'}],{c:'d'}", 9, theory.list([false,true,NaN,0,1,'','a',['b'],{c:'d'}]).find({c:'d'}));
		tests("[false,true,NaN,0,1,'','a',['b'],{c:'d'}],{c:'d'}", 9, theory.list.find([false,true,NaN,0,1,'','a',['b'],{c:'d'}],{c:'d'}));
		
		state("theory.list( TEST ) || .each( TEST )");
		tests("[1,2,3,4,5]", [1,3,6,10,15], theory.list([1,2,3,4,5]).each(function(v,i,t){ t(v+=this.d); this.d=v; },{d:0}));
		tests("[1,2,3,4,5]", [1,3,6,10,15], theory.list.each([1,2,3,4,5],function(v,i,t){ t(v+=this.d); this.d=v; },{d:0}));
		tests("[2,3,0,4]", [2,6,24], theory.list([2,3,0,4]).each(function(v,i,t){ if(!v){ return } t(v*=this.d); this.d=v; },{d:1}));
		tests("[2,3,0,4]", [2,6,24], theory.list.each([2,3,0,4],function(v,i,t){ if(!v){ return } t(v*=this.d); this.d=v; },{d:1}));
		tests("[true,false,NaN,Infinity,'',9]", 0, theory.list([true,false,NaN,Infinity,'',9]).each(function(v,i,t){ if(i===3){ return 0 }}));
		tests("[true,false,NaN,Infinity,'',9]", 0, theory.list.each([true,false,NaN,Infinity,'',9],function(v,i,t){ if(i===3){ return 0 }}));
	});
	var start = new Date().getTime(),
	state = (function(s){
		console.log(' --- ' + s + ' --- ');
		if(!root.page) return;
		tests.t = tests.t||document.getElementById("tests");
		tests.t.innerHTML=(tests.t.innerHTML+"<br/><br/>"+s);
	}), tests = (function(s, b, t){
		var OK = tests.eq(b,t), SOK = OK? 'OK' : 'ERROR';
		console.log(SOK + '\t' + s + '\t' + JSON.stringify(b));
		if(!root.page) return;
		tests.t = tests.t||document.getElementById("tests");
		SOK = OK? 'OK' : '<span class="err">ERROR</span>';
		tests.t.innerHTML=(tests.t.innerHTML+"<br/>"+ SOK + '&#09;' + s + '&#09;' + JSON.stringify(b));
	}), eq =
	tests.eq = function(a, b, aStack, bStack) { // via Underscore
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
		var className = Object.prototype.toString.apply(a);
		if (className != Object.prototype.toString.apply(b)) return false;
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
	testsit("we","will",[3,7],8,{never:'see'});
});