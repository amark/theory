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
		tests('[2,3,4], 2, {ebb: true}', 3, theory.list([2,3,4]).at(2,{ebb:true}));
		tests('[2,3,4], 2, {ebb: true}', 3, theory.list.at([2,3,4],2,{ebb:true}));
		tests('[2,3,4], -2, {ebb: true}', 3, theory.list([2,3,4]).at(-2,{ebb:true}));
		tests('[2,3,4], -2, {ebb: true}', 3, theory.list.at([2,3,4],-2,{ebb:true}));
		tests('[2,3,4], 9, {ebb: true}', 4, theory.list([2,3,4]).at(9,{ebb:true}));
		tests('[2,3,4], 9, {ebb: true}', 4, theory.list.at([2,3,4],9,{ebb:true}));
		tests('[2,3,4], -9, {ebb: true}', 2, theory.list([2,3,4]).at(-9,{ebb:true}));
		tests('[2,3,4], -9, {ebb: true}', 2, theory.list.at([2,3,4],-9,{ebb:true}));
		tests('[2,3,0], 9, {ebb: true}', 0, theory.list([2,3,0]).at(9,{ebb:true}));
		tests('[2,3,0], 9, {ebb: true}', 0, theory.list.at([2,3,0],9,{ebb:true}));
		tests('[false,3,4], -9, {ebb: true}', false, theory.list([false,3,4]).at(-9,{ebb:true}));
		tests('[false,3,4], -9, {ebb: true}', false, theory.list.at([false,3,4],-9,{ebb:true}));
		
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
		
		state("theory.obj( TEST ) || .ify( TEST )");
		tests('[0,1]', [0,1], theory.obj('[0,1]').ify());
		tests('[0,1]', [0,1], theory.obj.ify('[0,1]'));
		tests('{"a":false,"b":1,"c":"d","e":[0,1],"f":{"g":"h"}}', {"a":false,"b":1,"c":"d","e":[0,1],"f":{"g":"h"}}, theory.obj('{"a":false,"b":1,"c":"d","e":[0,1],"f":{"g":"h"}}').ify());
		tests('{"a":false,"b":1,"c":"d","e":[0,1],"f":{"g":"h"}}', {"a":false,"b":1,"c":"d","e":[0,1],"f":{"g":"h"}}, theory.obj.ify('{"a":false,"b":1,"c":"d","e":[0,1],"f":{"g":"h"}}'));
		
		state("theory.obj( TEST ) || .empty( TEST )");
		tests('{}', true, theory.obj({}).empty());
		tests('{}', true, theory.obj.empty({}));
		tests('{a:false}', false, theory.obj({a:false}).empty());
		tests('{a:false}', false, theory.obj.empty({a:false}));
		
		state("theory.obj( TEST ) || .copy( TEST )");
		tests("{a:1,b:'c',d:[0,1,2],e:{f:'g'},h:function(){ return 1 }}", {a:1,b:'c',d:[0,1,2],e:{f:'g'},h:function(){ return 1 }}, theory.obj({a:1,b:'c',d:[0,1,2],e:{f:'g'},h:function(){ return 1 }}).copy());
		tests("{a:1,b:'c',d:[0,1,2],e:{f:'g'},h:function(){ return 1 }}", {a:1,b:'c',d:[0,1,2],e:{f:'g'},h:function(){ return 1 }}, theory.obj.copy({a:1,b:'c',d:[0,1,2],e:{f:'g'},h:function(){ return 1 }}));
		
		state("theory.obj( TEST ) || .union( TEST )");
		tests("{a:'b',c:'d'}, {c:1,z:2}", {a:'b',c:'d',z:2}, theory.obj({a:'b',c:'d'}).union({c:1,z:2}));
		tests("{a:'b',c:'d'}, {c:1,z:2}", {a:'b',c:'d',z:2}, theory.obj.union({a:'b',c:'d'},{c:1,z:2}));
		tests("{a:'b',c:'d'}, {c:1,z:2}, {x:3,y:4}", {a:'b',c:'d',z:2,x:3,y:4}, theory.obj({a:'b',c:'d'}).union({c:1,z:2},{x:3,y:4}));
		tests("{a:'b',c:'d'}, {c:1,z:2}, {x:3,y:4}", {a:'b',c:'d',z:2,x:3,y:4}, theory.obj.union({a:'b',c:'d'},{c:1,z:2},{x:3,y:4}));
		tests("[{a:'b',c:'d'},{c:1,z:2}], {ig:'nore'}", {a:'b',c:'d',z:2}, theory.obj([{a:'b',c:'d'},{c:1,z:2}]).u({ig:'nore'}));
		tests("[{a:'b',c:'d'},{c:1,z:2}], {ig:'nore'}", {a:'b',c:'d',z:2}, theory.obj.u([{a:'b',c:'d'},{c:1,z:2}],{ig:'nore'}));
		
		state("theory.obj( TEST ) || .has( TEST )");
		tests("{yay:false}, 'yay'", true, theory.obj({yay:false}).has('yay'));
		tests("{yay:false}, 'yay'", true, theory.obj.has({yay:false},'yay'));
		tests("{yay:false}, 'toString'", false, theory.obj({yay:false}).has('toString'));
		tests("{yay:false}, 'toString'", false, theory.obj.has({yay:false},'toString'));
		
		state("theory.obj( TEST ) || .each( TEST )");
		tests("{a:'z',b:'y',c:'x'}", {x:'c',y:'b',z:'a'}, theory.obj({a:'z',b:'y',c:'x'}).each(function(v,i,t){ t(v,i) }));
		tests("{a:'z',b:'y',c:'x'}", {x:'c',y:'b',z:'a'}, theory.obj.each({a:'z',b:'y',c:'x'},function(v,i,t){ t(v,i) }));
		tests("{a:'z',b:false,c:'x'}", {a:'z',c:'x'}, theory.obj({a:'z',b:false,c:'x'}).each(function(v,i,t){ if(!v){ return } t(i,v) }));
		tests("{a:'z',b:false,c:'x'}", {a:'z',c:'x'}, theory.obj.each({a:'z',b:false,c:'x'},function(v,i,t){ if(!v){ return } t(i,v) }));
		tests("{a:'z',b:3,c:'x'}", 0, theory.obj({a:'z',b:3,c:'x'}).each(function(v,i,t){ if(v===3){ return 0 }}));
		tests("{a:'z',b:3,c:'x'}", 0, theory.obj.each({a:'z',b:3,c:'x'},function(v,i,t){ if(v===3){ return 0 }}));
		
		state("theory.obj( TEST ) || .get( TEST )");
		tests("{a:1,b:2,c:3}, 'b'", 2, theory.obj({a:1,b:2,c:3}).get('b'));
		tests("{a:1,b:2,c:3}, 'b'", 2, theory.obj.get({a:1,b:2,c:3},'b'));
		tests("{a:1,b:{x:{z:7}},c:3}, 'b.pow.z.x'", undefined, theory.obj({a:1,b:{x:{z:7}},c:3}).get('b.pow.z.x'));
		tests("{a:1,b:{x:{z:7}},c:3}, 'b.pow.z.x'", undefined, theory.obj.get({a:1,b:{x:{z:7}},c:3},'b.pow.z.x'));
		tests("{a:1,b:{x:{z:7}},c:3}, 'b.x.z'", 7, theory.obj({a:1,b:{x:{z:7}},c:3}).get('b.x.z'));
		tests("{a:1,b:{x:{z:7}},c:3}, 'b.x.z'", 7, theory.obj.get({a:1,b:{x:{z:7}},c:3},'b.x.z'));
		tests("{a:1,b:[[1,2],[3,4],[{x:9}]],c:3}, 'b.x'", 9, theory.obj({a:1,b:[[1,2],[3,4],[{x:9}]],c:3}).get('b.x'));
		tests("{a:1,b:[[1,2],[3,4],[{x:9}]],c:3}, 'b.x'", 9, theory.obj.get({a:1,b:[[1,2],[3,4],[{x:9}]],c:3},'b.x'));
		tests("{a:1,b:[[1,2],[3,4],{x:9}],c:3}, 'b.1.x'", undefined, theory.obj({a:1,b:[[1,2],[3,4],{x:9}],c:3}).get('b.1.x'));
		tests("{a:1,b:[[1,2],[3,4],{x:9}],c:3}, 'b.1.x'", undefined, theory.obj.get({a:1,b:[[1,2],[3,4],{x:9}],c:3},'b.1.x'));
		tests("{a:1,b:[[1,2],[3,4],{x:9}],c:3}, 'b.3.x'", 9, theory.obj({a:1,b:[[1,2],[3,4],{x:9}],c:3}).get('b.3.x'));
		tests("{a:1,b:[[1,2],[3,4],{x:9}],c:3}, 'b.3.x'", 9, theory.obj.get({a:1,b:[[1,2],[3,4],{x:9}],c:3},'b.3.x'));
		tests("{a:1,b:[[1,2],[3,4],{x:9}],c:3}, 'b.-1.x'", 9, theory.obj({a:1,b:[[1,2],[3,4],{x:9}],c:3}).get('b.-1.x'));
		tests("{a:1,b:[[1,2],[3,4],{x:9}],c:3}, 'b.-1.x'", 9, theory.obj.get({a:1,b:[[1,2],[3,4],{x:9}],c:3},'b.-1.x'));
		tests("{a:{b:{c:null}}}, 'a.b.c'", null, theory.obj({a:{b:{c:null}}}).get('a.b.c'));
		tests("{a:{b:{c:null}}}, 'a.b.c'", null, theory.obj.get({a:{b:{c:null}}},'a.b.c'));
		tests("{a:{b:{c:null}}}, 'a.b.c->'", function(){}, theory.obj({a:{b:{c:null}}}).get('a.b.c->'));
		tests("{a:{b:{c:null}}}, 'a.b.c->'", function(){}, theory.obj.get({a:{b:{c:null}}},'a.b.c->'));
		tests("{a:{b:{c:function(){return 1}}}}, 'a.b.c->'", function(){return 1}, theory.obj({a:{b:{c:function(){return 1}}}}).get('a.b.c->'));
		tests("{a:{b:{c:function(){return 1}}}}, 'a.b.c->'", function(){return 1}, theory.obj.get({a:{b:{c:function(){return 1}}}},'a.b.c->'));
		
		state("theory.time( TEST ).is( TEST )")
		tests("", true, (t.ts=theory.time.is()) && a.num.is(t.ts) && 13 <= t.ts.toString().length)
		
		state("theory.time( TEST ).now( TEST )")
		tests("", true, (t.ts=theory.time.now()) && a.num.is(t.ts) && 17 <= t.ts.toString().length)
		
		state("theory.time.loop( TEST )")
		tests("", true, (t.tl=theory.time.loop(function(){console.log('loop')},1000)) && a.num.is(t.tl))
		
		state("theory.time.wait( TEST )")
		tests("", true, (t.tw=theory.time.wait(function(){console.log('wait')},1000)) && a.num.is(t.tw))
		
		state("theory.time( TEST ).stop( TEST )")
		tests("", true, (theory.time.stop(t.tl) && theory.time.stop(t.tw)))
		
		state("theory.fns.sort( TEST )")
		tests("", {b:[true,false],n:[0,1],t:['','a'],l:[[],[2]],o:[{},{b:3}],f:[function(){}]}, theory.fns.sort([true,false,0,1,'','a',[],[2],{},{b:3},function(){}]))
		
		state("theory.fns( TEST ).pass( TEST )")
		tests("", 7, theory.fns(function(){ this.fp = 5; return this.fp +2; }).pass(t)());
		tests("", 7, theory.fns.pass(function(){ this.fp = 5; return this.fp +2; },t)());
		
		state("theory.fns( TEST ).flow( TEST )")
		theory.fns.flow([
			function(n){
				n(t.ff = 5);
			},function(x,n){
				n(x*x);
			}
		],function(x){
			t.ff = x*x;
		});theory.time.wait(function(){tests("", 625, t.ff)},50);
	});
	var start = new Date().getTime(), t = {},
	state = (function(s){
		console.log(' --- ' + s + ' --- ');
		if(!root.page) return;
		tests.t = tests.t||document.getElementById("tests");
		tests.t.innerHTML=(tests.t.innerHTML+"<br/><br/>"+s);
	}), tests = (function(s, b, t){
		var OK = theory.test.is(b,t), SOK = OK? 'OK' : 'ERROR';
		console.log(SOK + '\t' + s + '\t' + JSON.stringify(b));
		if(!root.page) return;
		tests.t = tests.t||document.getElementById("tests");
		SOK = OK? 'OK' : '<span class="err">ERROR</span>';
		tests.t.innerHTML=(tests.t.innerHTML+"<br/>"+ SOK + '&#09;' + s + '&#09;' + JSON.stringify(b));
	});
	testsit("we","will",[3,7],8,{never:'see'});
});