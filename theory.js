/** THEORY **/
var theory = (function(b,c,fn){
	var a = (this.name ==='theory' || b === true)? 
			theory 
		:	this
		,args = (theory.list)?
			theory.list.slit.call(arguments,0)
		:	[];
	a.name = a.name||'theory';
	a.version = a.version||2;
	if(args.length){
		if(theory.bi.is(b)){
			if(c){
				a = c.theory;
			}
		}else{
			return (function(args,n){
				args = theory.fns.sort(args);
				r = {};
				if(args.t.length == 1 || args.o.length == 1){
					r = theory.obj.get(
						theory.list(args.o).at(1)||theory.list(args.l).at(1)||a
						,theory.list(args.t).at(1)
					);
				}
				return r;
			})(args,args.length);
		}
	}var $=null,_=null;
	a.log = (function(s){
		var log = {};
		//console.log(s);
		return log;
	});
	a.fns = (function($){
		var fns = a.fns;
		a.log(fns.name = 'fns');
		fns.$_ = $ !== undefined? $ : null;$=null;
		fns.is = (function(fn){
			$ = this.$_;this.$_=null;fn = $||fn;
			return (fn instanceof Function)? true : false;
		});
		fns.ids = 1;
		fns.pass = (function(fn,context){ // from jQuery.proxy()
			if (a.text.is(context)){
				var tmp = a(fn,context);//fn[context];
				context = fn;
				fn = tmp;
			}
			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if (!this.is(fn)) {
				return undefined;
			}
			// Simulated bind
			var args = a.list.slit.call(arguments,2),
				proxy = function() {
					return fn.apply(context,args.concat(a.list.slit.call(arguments)));
				};
			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.id = fn.id = fn.id || proxy.id || this.ids++;
			return proxy;
		});
		fns.flow = (function(sync,fn){
			fn = fn||(function(){});
			if(!a.list.is(sync) || !sync.length){
				return fn();
			}
			var t = (function(){
				t = {i:0};
				t.next = (function(){
					var args = a.list.slit.call(arguments,0), w;
					t.next.end = fn;
					args.push(t.next);
					w = (function(){
						(sync[t.i++]||fn).apply(t,args);
					});
					root.node? process.nextTick(w) : a.time.wait(w,0);
				});
				return t;
			})();
			return t.next();
		});
		fns.sort = (function(args){
			if(!args) return {e:"Empty"};
			var args = a.list.slit.call(args, 0), r = {b:[],n:[],t:[],l:[],o:[],f:[]}
			for(var i in args){
				if (this.is(args[i])){
					r.f.push(args[i]);
				} else if(a.list.is(args[i])){
					r.l.push(args[i]);
				} else if(a.obj.is(args[i])){
					r.o.push(args[i]);
				} else if(a.num.is(args[i])) {
					r.n.push(args[i]);
				} else if(a.text.is(args[i])){
					r.t.push(args[i]);
				} else if(a.bi.is(args[i])){
					r.b.push(args[i]);
				}
			}
			return r;
		});
		fns.$ = (function(t,v){
			v = t.$;
			t.$=null;
			return v;
		});
		return fns;
	});a.fns();
	a.list = (function($){
		var list = a.list;
		a.log(list.name = 'list');
		list.$ = $ !== undefined? $ : null;$=null;
		list.is = (function(l){
			l = a.fns.$(this)||l;
			return (l instanceof Array)? true : false;
		});
		list.slit = Array.prototype.slice;
		list.at = (function(l,i,fn){
			if($=a.fns.$(this)){
				fn=i;i=l;l=$;
			}
			if(!l||!i) return false;
			if(a.text.is(l)) l = l.split("");
			if(i < 0) {
				var r = l.slice().reverse();
				i = Math.abs(i);
			}
			for(--i; 0 <= i; i--){	// upgrade to functionalize
				if(r && r[i]) return r[i];
				else if(l[i]) return l[i];
			}
			return false;
		});
		list.ify = (function(l,opt){
			if($=a.fns.$(this)){
				opt=l;l=$;
			}
			opt=opt||{};
			opt.wedge = opt.wedge||':';
			opt.split = opt.split||',';
			var r = [];
			if(a.obj(l).is()){ // TODO: BUG: Does not handle certain types correctly.
				a.obj(l).each(function(v,i){
					r.push(i+opt.wedge+v);
				});
			}
			return r;
		});
		list.merge = (function(l,ll){
			if($=a.fns.$(this)){
				ll=l;l=$;
			}
			return l.concat(ll);
		});
		list.union = list.u = (function(l,ll){ //[1,2,3,4,5] u [3,5,6,7,8] = [1,2,3,4,5,6,7,8]
			return l.not.implemented.yet;
			if($=a.fns.$(this)){
				ll=l;l=$;
			}
			return [];
		});
		list.intersect = list.n = (function(l,ll){ //[1,2,3,4,5] n [3,5,6,7,8] = [3,5]
			return l.not.implemented.yet;
			if($=a.fns.$(this)){
				ll=l;l=$;
			}
			return [];
		});
		list.get = (function(l,i,fn){
			if($=a.fns.$(this)){
				fn=i;i=l;l=$;
			}
			return list.at(l,i,fn);
		});
		list.plop = (function(l,s){
			if($=a.fns.$(this)){
				s=l;l=$;
			}
			for(var i = l.length-1; 0 <= i; i--){
				if(l[i] == s) {
					return l.splice(i, 1);
				}
			}
		});
		list.find = (function(l,c,t){
			if($=a.fns.$(this)){
				t=c;c=l;l=$;
			}
			return list._each(l,c,t);
		});
		list.each = (function(l,c,t){
			if($=a.fns.$(this)){
				t=c;c=l;l=$;
			}
			return list._each(l,c,t);
		});
		list.crunch = (function(l,c,t){
			if($=a.fns.$(this)){
				t=c;c=l;l=$;
			}
			return list._each(l,function(v,i,t){
				if(!v) return;
				if(list.is(v) && !v.length) return;
				t(v);
			});
		});
		list.index = 1;
		list._each = (function(){ // modified github.com/kriszyp/each to non-0 index & 0 !indexOf
			var undefined;
			function getEmit(result){
				return function(newValue){
					// emit function adds result to return array
					result.push(newValue);
				};
			}
			return function(array, callback, thisObject){
				// create an emit function if there is enough arguments, otherwise avoid the allocation cost
				var i = 0, result, emit, length = array.length;
				if(typeof callback == "function"){
					// standard each usage, calling a callback on each item
					if(callback.length > 2){
						emit = getEmit(result = []);
					}
					if(length > -1){
						if(thisObject){
							// iterate over array
							for(;i < length; i++){
								// call the callback
								var newValue = callback.call(thisObject, array[i], (i+list.index), emit);
								// if a value was returned, examine it
								if(newValue !== undefined){
									// defined value breaks out of loop
									return newValue;
								}
							}
						}else{
							// we do a separate branch for when thisObject isn't provided because
							// it is faster to avoid the .call()
							for(;i < length; i++){
								// call the callback
								var newValue = callback(array[i], (i+list.index), emit);
								// if a value was returned, examine it
								if(newValue !== undefined){
									// defined value breaks out of loop
									return newValue;
								}
							}
						}
					}else{
						// not an array, iterate over an object
						for(i in array){
							if(array.hasOwnProperty(i)){
								var newValue = callback.call(thisObject, array[i], i, emit);
							}
							if(newValue !== undefined){
								// defined value breaks out of loop
								return newValue;
							}
						}  
					}
					return result;
				}
				// indexOf operation
				for(i = thisObject || 0; i < length; i++){
					if(array[i] === callback){
						return (i+list.index);
					}
				}
				return (list.index)?0:-1;
			};
		})();
		return list;
	});a.list();
	a.obj = (function($){
		var obj = a.obj;
		a.log(obj.name = 'obj');
		obj.$ = $ !== undefined? $ : null;$=null;
		obj.is = (function(o){
			o = a.fns.$(this)||o;
			return (o instanceof Object && !a.list.is(o))? true : false;
		});
		obj.ify = (function(o){
			o = a.fns.$(this)||o;
			if(a.obj.is(o)) return o;
			try{
				o = JSON.parse(o);
			}catch(e){o={}};
			return o;
		});
		obj.empty = (function(o){
			if(!(o = a.fns.$(this)||o)) return true;
			return obj.each(o,function(v,i){
				if(i) return true;
			})? false : true;
		});
		obj.copy = (function(o){
			o = a.fns.$(this)||o;
			var r = {};
			a.obj.each(o,function(v,i,t){
				r[i] = v;
			});
			return r;
		});
		obj.union = obj.u = (function(x,y){
			if($=a.fns.$(this)){
				y=x;x=$;
			}
			x = x||{}; y = y||{};
			var o = {};
			a.obj.each(x,function(v,i,t){
				o[i] = v;
			});
			a.obj.each(y,function(v,i,t){
				o[i] = v;
			});
			return o;
		});
		obj.each = (function(o,c,t){
			if($=a.fns.$(this)){
				t=c;c=o;o=$;
			}
			return a.list._each(o,c,t);
		});
		obj.get = (function(o,l){
			if($=a.fns.$(this)){
				l=o;o=$;
			}
			if(a.num.is(l)){
				l = a.text.ify(l);
			}
			if(a.list.is(l)){
				l = l.join('.');
			}
			if(a.text.is(l)){
				nf = (l.length == (l = l.replace(a.text.find.__.fn,'')).length);
				l = (/\//g.test(l))? [l] : l.split(a.text.find.__.dot);
			}
			return a.list(l||[]).each(function(v,i){
				if(!(o||{}).hasOwnProperty(v)) return nf? null : function(){};
				o = o[v];
				if(l.length == i){
					return nf? o : (a.fns.is(o)? o : function(){});
				}
			});
		});
		return obj;
	});a.obj();
	a.text = (function($){
		var text = a.text;
		a.log(text.name = 'text');
		text.$ = $ !== undefined? $ : null;$=null;
		text.is = (function(t){
			t = (($=a.fns.$(this))!==null)?$:t;
			return typeof t == 'string'?true:false;
		});
		text.get = (function(q){
			return;
		});
		text.ify = (function(t){
			t = a.fns.$(this)||t||'';
			if(a.obj.is(t)) return JSON.stringify(t);
			return t.toString? t.toString():t;
		});
		text.random = (function(l){
			l = (a.fns.$(this)||l)||16;
			var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz',s='';
			while(l>0){
				s += chars.charAt(Math.floor(Math.random()*chars.length));
				l--;
			}
			return s;
		});
		text.find = (function(_this){
			var regex = {};
			a.log(regex.name = _this.name+'.find');
			regex.is = /[\.\\\?\*\[\]\{\}\(\)\^\$\+\|\,]/ig
			regex.special = {'.':1,'\\':1,'?':1,'*':1,'[':1,']':1,'{':1,'}':1,'(':1,')':1,'^':1,'$':1,'+':1,'|':1,',':1}
			regex.mail = /^(("[\w-\s]+")|([\w-]+(?:[\.\+][\w-]+)*)|("[\w-\s]+")([\w-]+(?:[\.\+][\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
			regex.list = /(,\s|;\s|,|;|\s)/ig;
			regex.css = /(.+?):(.+?);/ig;
			regex.url = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
			regex.ext = /\.([^\.]+)$/i;
			regex.ws_ = /\-/ig;
			regex.space = /\s/ig;
			regex.num = { 'int': /(\-\d+|\d+)/g };
			regex.__ = { fn: /\-\>$/, dot: /\./ };
			return regex;
		})(text);
		text.caps = (function(t){
			t = a.fns.$(this)||t;
			t = (text.is(t))?t:"";
			return t.toUpperCase();
		});
		text.low = (function(t){
			t = a.fns.$(this)||t;
			t = (text.is(t))?t:"";
			return t.toLowerCase();
		});
		return text;
	});a.text();
	a.num = (function($){
		var num = a.num;
		a.log(num.name = 'num');
		num.$ = $ !== undefined? $ : null;$=null;
		num.is = (function(n){
			n = (($=a.fns.$(this))!==null)?$:n;
			return ( (n===0)? true : (!isNaN(n) && !a.bi.is(n) && !a.list.is(n) && !a.text.is(n))? true : false);
		});
		num.get = (function(i){
			return;
		});
		num.i = (function(val){return parseInt($||val,10)});
		num.dec = (function(val){return parseFloat($||val)||0});
		num.random = num.r = (function(l){
			l = ((($=a.fns.$(this))!==null)?$:l)||6;
			l = (l<=14)? l : 14;
			var n = '9';
			for(var i = 0; i < l-1; i++){ n += '0';}
			n = a.num.i(n);
			var r = function(){return Math.floor(Math.random()*10)||r()};
			n = Math.floor(r() + Math.pow(Math.random(),Math.random()) * (n));
			if(n.toString().length != l) return num.r(l);
			return n;
		});
		num.ii = (function(n){
			n = a.fns.$(this)||n;
			if(!n) {
				return []; 
			}else if(a.num.is(n)){
				return [n] 
			} else {
				r = n.match(a.text.find.num['int']) || [];
				r = a.list.each(r,function(v,i,t){
					t(num.i(v));
				});
				return r;
			}
		});
		return num;
	});a.num();
	a.bi = (function($){
		var bi = a.bi;
		a.log(bi.name = 'bi');
		bi.$ = $ !== undefined? $ : null;$=null;
		bi.is = (function(b){
			b = (($=a.fns.$(this))!==null)?$:b;
			return (b instanceof Boolean || typeof b == 'boolean')?true:false;
		});
		return bi;
	});a.bi();
	a.time = (function(){
		var time = {};
		a.log(time.name = 'time');
		time.is = (function(t){
			return (+new Date().getTime())
		});
		time.now = (function(){
			return a.num.i((a.time.is().toString())+a.num.r(4))
		});
		time.loop = (function(fn,d){
			var args = a.fns.sort(a.list.slit.call(arguments, 0));
			return (args.f.length)?setInterval(a.list(args.f).at(1),a.list(args.n).at(1)):null;
		});
		time.wait = (function(fn,d){
			var args = a.fns.sort(a.list.slit.call(arguments, 0));
			return (args.f.length)?setTimeout(a.list(args.f).at(1),a.list(args.n).at(1)):null;
		});
		time.clear = (function(i){
			return clearTimeout(i);
		});
		return time;
	})();
	a.com = (function($){
		var com = a.com;
		a.log(com.name = 'com');
		com.$ = $ !== undefined? $ : null;
		com.way = com.way||$;$=null;
		com.queue = [];
		theory.com.queue = theory.com.queue||[];
		com.dc = [theory.time.now()];
		com.opt = (function(opt,type){
			opt = opt||{};
			opt.type = opt.type||type||'xreq';
			opt.wire = opt.wire||'tcp';
			opt.host = ((opt.host||'localhost') === 'localhost')?
				'127.0.0.1' : opt.host;
			return opt;
		});
		com.create = (function(opt){
			opt = com.opt(opt,'xrep');
			if(!opt.port) return;
			com.src = (opt.wire +'://'+ opt.host)
				+ ((opt.port)?':'+opt.port:'');
			com.wire = com.zmq.createSocket(opt.type);
			com.wire.bind(com.src,function(e){
				if(e){
					console.log("com error: "+e);
					return;
				}
				console.log(com.src);
				com.wire.on('message', function(c,m){
					m = m? m.toString() : c.toString();
					com.msg(a.obj.ify(m),c);
				});
			});
		});
		com.node = (function(opt){
			if(process.send){
				process.on('message',function(m){
					com.msg(a.obj.ify(m));
				});
				process.send({onOpen:{readyState:(process.readyState = 1),state:(a.obj.get(a,opt.way+'.state')?a[opt.way].state():false)}});
				com.wire = process;
				return;
			}
		});
		com.page = (function(){
			com.src = com.src||(window.location.protocol +'//'+ window.location.hostname)
				+ ((window.location.port)?':'+window.location.port:'')
				+ (com.path||'/com');
			var municate = (function(){
				theory.com.wire = new SockJS(com.src);
				theory.com.wire.onopen = function(){
					theory.com.open&&theory.com.open();
					console.log("Communication initiated at "+com.src+" with "+com.wire.protocol+".");
					com.drain();
				};
				theory.com.wire.onmessage = function(m){
					m = a.obj.ify(m.data||m);
					if(theory.com.asked[m.when]){
						a(theory.com.asked,m.when+"->")(m);
						delete theory.com.asked[m.when];
						return;
					}
					com.msg(m);
				};
				theory.com.wire.onclose = function(m){
					console.log('close');
					theory.com.close&&theory.com.close(m);
				};
			});
			if(com.off) return;
			if(window.SockJS){
				municate();
			} else {
				module.ajax.code(com.url||'http://cdn.sockjs.org/sockjs-0.3.min.js',function(d){
					municate();
				});
			}
		});
		com.init = (function(c){
			if(root.node) com.node({way:c});
			if(c) return;
			if(root.page) com.page();
			return com;
		});
		com.drain = (function(){
			while(theory.com.queue.length > 0){
				com.write(theory.com.queue.shift());
			}
		});
		com.parse = (function(m){
			if(a.obj.is(m)) return m;
			try{
				m = JSON.parse(m);
			}catch(e){m={}};
			return m;
		});
		com.msg = (function(m,c){
			theory.obj.get(theory,theory(m,'how.way')+'->')(m,c);
		});
		com.ways = (function(m,w){
			var way = com.way;
			if($=a.fns.$(this)){
				way = ($.charAt(0)=='.')?way+$:$;
			}
			m = com.meta(m,way);
		});
		com.ask = (function(m,f){
			if(!a.fns.is(f)) return;
			var w = a.obj.get(m,'how.way')||com.way;
			if($=a.fns.$(this)){
				w = ($.charAt(0)=='.')?com.way+$:$;
			}
			m = com.meta(m,w);
			delete m.where;
			theory.com.asked[m.when] = f;
			com.write(m);
		});theory.com.asked = theory.com.asked||{};
		com.reply = (function(m){
			var w = a.obj.get(m,'how.way')||com.way;
			if($=a.fns.$(this)){
				w = ($.charAt(0)=='.')?com.way+$:$;
			}
			m = com.meta(m,w);
			if(m.how.web === 'state'){
				m.how.way = 'web.reply';
			}
			m.who = m.who||{};
			m.who.to = m.who.to||m.who.cid;
			com.write(m);
		});
		com.send = (function(m){
			var w = a.obj.get(m,'how.way')||com.way;
			if($=a.fns.$(this)){
				w = ($.charAt(0)=='.')?com.way+$:$;
			}
			m = com.meta(m,w);
			com.write(m);
		});
		com.write = (function(m,c){
			c = c||theory.com.wire;
			if(!c || c.readyState !== 1){
				theory.com.queue.push(m);
				return;
			}
			if(a.obj.is(m)){
				m = a.text(m).ify();
			}
			//console.log("send --> "+m);
			c.send(m);
		});
		com.meta = (function(m,opt){
			if(!a.obj.is(m)) m = {what:m};
			var n = {what: (m.what = m.what||{}) };
			opt = opt||{c:{}};
			if(a.text.is(opt)){
				opt = {w:opt,c:{}};
			}
			if(opt.protocol){
				opt.c = opt;
			}
			a.obj(m).each(function(v,i){
				if( i == 'how' ||
					i == 'who' || i == 'what' ||
					i == 'when'|| i == 'where'){
					return;
				}
				n.what[i] = m.what[i] = v;
				delete m[i];
			});
			if(!m.how){
				n.how = {
					way: opt.w||com.way
				}
			}else{
				n.how = m.how;
				n.how.way = opt.w||m.how.way||com.way;
				delete m.how;
			}
			m.how = n.how;
			if(!m.when){
				n.when = a.time.now();
			}else{
				n.when = m.when;
				delete m.when;
			}
			m.when = n.when;
			if(!m.who){
				if(root.page && !com.who){
					n.who = {
						tid: (com.who=root.who)
					}
				}
				if(root.node){
					n.who = {};
				}
			}else{
				if(a.obj.is(m.who)){
					n.who = m.who;
				}else{
					n.who = {
						to: m.who
					}
				}
				if(root.node){
				}
				if(root.page && !com.who){
					n.who.tid = com.who = root.who;
				}
				delete m.who;
			}
			m.who = n.who;
			if(!m.where){
				if(root.page){
					if(a.text.is(m.where)){
					
					}else{
					
					}
				}
				if(root.node){
					n.where = {
						pid: process.pid
					}
				}
			}else{
				if(a.obj.is(m.where)){
					n.where = m.where;
				}else{
					n.where = {
						at: m.where
					}
				}
				if(root.node){
					if(!a.obj.get(m,'where.pid')){
						n.where.pid = process.pid;
					}
				}
				delete m.where;
			}
			m.where = n.where;
			return n;
		});
		return com;
	});
	a.test = (function(b,c,fn){
		try{return b()}catch(e){return e};
	});
	return a;
});theory(true);

/** 
		BASE 
**/
(function(r){
	var root = root||{}, a = theory;
	root.sec = ['all'];
	root.name = 'theory';
	root.queue = {};
	root.launch = {};
	root.pollute = ((typeof GLOBAL !== 'undefined' && GLOBAL.global && GLOBAL.process &&
					GLOBAL.process.env && GLOBAL.process.pid && GLOBAL.process.execPath)?
		(function(){
			global.node = true;
			global.theory = theory;
			process.env.totheory = __filename;
			global.name = root.name;
			if(process.env.NODE_ENV==='production'){process.env.LIVE = true};
			module.rel = (module.parent||{filename:''}).filename.split('/').slice(0,-1).join('/');
			module.exports=(function(cb,deps,name){
				var args = a.fns.sort(a.list.slit.call(arguments, 0)), r
					,m = util.mod(args);
				root.queue[m.name=util.stripify(m.name)] = util.stripify(m.name);
				global.a = m.theory = util.theorize(m);
				global.aname = global.aname||m.name;
				cb = util.launch(m);
				util.deps(args,function(j){
					r = require((j.slice(0,2) == './')? module.rel + j.slice(1) : j);
					if(r){
						theory[(j=util.stripify(j))] = m.theory[j] = r;
					}
				},m);
				console.log(m.name+'!');
				var mod = (theory[m.name] = global.a[m.name] = cb(m.theory));
				if(global.aname === m.name && theory.com) theory.com(root.name).init(m.name);
				return mod;
			});
			return;
		}) : (function(){
			root.page = true;
			window.root = root;
			root.who = root.who||a.list((document.cookie+';').match(/tid=(.+?);/)||[]).at(-1)||'';
			window.console = window.console||{log:function(s){return s}};
			console.saw = (function(s){console.log(a.text(s).ify())});
			window.__dirname = '';
			window.exports = {};
			window.module = {exports: window.exports};
			window.module.ajax = {load:// modified cross browser async javascript loader via http://johannburkard.tumblr.com/post/3053844418
				(function(b,c){var d=document,f="script",a=d.createElement(f),e=2166136261,g=b.length,h=c,i=/=\?/,d=d.body,s=window.setTimeout,z;
				if(i.test(b)){for(;g--;)e=e*16777619^b.charCodeAt(g);window[f+=e<0?-e:e]=function(){h.apply(h,arguments);delete window[f]};b=b.replace(i,"="+f);c=0}
				a.onload=a.onreadystatechange=function(){if(/de|m/.test(a.readyState||"m")){c&&c();document.body.removeChild(a);try{for(c in a)delete a[c]}catch(b){}}};
				a.src=b;z=function(){document.body?document.body.appendChild(a):s(z,1)};s(z,1)})};
			window.module.ajax.code = util.execute;
			window.onerror = (function(e,w,l){
				console.log(e + " at line "+ l +" on "+ w);
				//if(theory.com) theory.com.send({e:e,url:w,line:l});
			});
			var thiselem = document.getElementsByTagName('script');
			thiselem = thiselem[thiselem.length-1];
			window.require = window.module.ajax.code;
			util.sandbox(thiselem.innerHTML,'Theory Configuration');
			if(theory.com) theory.com(root.name).init();
			window.require = (function(p){
				var _require = require;
				_require.resolve = (function(){
				
				});
				_require.cache = _require.cache||{};
				if(!p){
					return _require;
				}
				if(util.stripify(p) == util.stripify(root.name)){
					return (function(cb,deps){
						return util.async(deps,cb);
					});
				}
				if(_require.cache[p] || window[p]){
					console.log(p+' already cached');
					return _require.cache[p];
				}
				window.module.ajax.code(p,function(d){
				});
				return (function(cb,deps){
					return util.async(deps,cb);
				});
			});
			require();
		})
	);
	var util = (function(){
		var _this = {};
		_this.pathify = (function(p){return p = (/\.js$/i.test(p))? p : p+'.js'; });
		_this.stripify = (function(p){
			if(!a.text.is(p)) return '';
			p=p.replace(/^\./,'');
			return (p.split('/').reverse()[0]).replace(/\.js$/i,'');
		});
		_this.mod = (function(args){
			if(!a.obj.is(args)){
				return {name:'fail',init:(function(){console.log('module failed to load')})};
			}
			if(args.l.length){
				var ao = a.list(args.l).at(1);
				if(ao.name) return ao;
			}
			if(args.o.length){
				var ao = a.list(args.o).at(1);
				if(ao.name) return ao;
			}
			if(args.f.length){
				return {
					name: a.list(args.t).at(1)
					,init: a.list(args.f).at(1)
				}
			}
		});
		_this.launch = (function(m,i){
			root.launch[m.name] = true;
			a.obj(root.queue).each(function(v,i){
				root.queue[i] = a.list(v).each(function(w,j,t){
					if(m.name != w.name){
						t(w);
					}
				});
				// TODO: BUG: Quazi-solved. Needs tests. Handle file names with '.' or other punctuations and post-fix, such as "jquery.ui.min".
				if(!(root.queue[i]||[]).length){
					delete root.queue[i];
				}
			});
			return m.init||m.main||m.start||m.boot||m.cb||m.fn||(function(){console.log('module failed to load')});
		});
		_this.sandbox = (function(s,n){
			try{ // via jQuery
				(window.execScript || function(s){
					window["eval"].call(window, s);
				})(s);
			}catch(e){
				console.log("sandbox fail: "+n);
			}
		});
		_this.execute = (function(p,m,o,fn){
			var args = a.fns.sort(a.list.slit.call(arguments,0));
			p = a.list(args.t).at(1);
			fn = a.list(args.f).at(1);
			m = a.list(args.o).at(1)||{theory:{}};
			console.log("loading " + p);
			var init = (function(p,o,d){
				if(module.clear){
					module.exports = exports = {};
					module.clear = false;
				} else {
					module.exports = (theory.obj.empty(exports))? module.exports : exports;
				}
				if(!root.launch[(p=util.stripify(p))]){
					if(theory.fns.is(module.exports)){
						theory[p] = m.theory[p] = module.exports();
					} else {
						theory[p] = m.theory[p] = module.exports||{};
					}
				}
				module.exports = exports = {};
				util.drain(p,o,m);
				if(theory.fns.is(fn)) fn(d);
				return theory[p];
			});
			try{window.module.ajax.load(util.pathify(p),function(d){
				console.log(p +' loaded');
				return init(p,o,d);
			});module.exports = exports = {};}catch(e){
				console.log("Network error.");
			};
		});
		_this.deps = (function(args,fn,mod){
			var deps = {};
			if(args.t.length){
			}
			if(args.l.length){
				var ao = mod||a.list(args.l).at(1);
				deps = ao.dependencies||ao.require||ao.dep;
			}
			if(args.o.length){
				var ao = mod||a.list(args.o).at(1);
				deps = ao.dependencies||ao.require||ao.dep;
			}
			(ao||mod).dependencies = deps;
			a.list(deps).each(function(v,i){
				if(a.list.is(deps)){
					i = v;
				} else {
					v = {v:v};
				}
				fn(i,v);
			});
			return deps;
		});
		_this.theorize = (function(m){
			m.theory = (function(){
				if(arguments.length){
					return theory.apply(m.theory,arguments);
				}
				return theory(true,m);
			});m.theory();
			if(m.theory.com) m.theory.com(m.name);
			return m.theory;
		});
		_this.async = (function(deps,cb){
			var b = true, i, l = [], mod
				,args = a.fns.sort(a.list.slit.call(arguments,0))
				,m = util.mod(args);
			m.theory = util.theorize(m);
			deps = _this.deps(args,function(j,o){
				i = util.stripify(j);
				if(!a(root.launch,i)){
					if(!a(root.queue,i)){
						_this.execute(j,m,o);
					}
					(root.queue[i] = a(root.queue,i) || []).push(m);
					b = false;
				}else{
					m.theory[i] = theory[i];
				}
			},m);
			if(b){
				cb = util.launch(m);
				theory[m.name] = cb(m.theory||theory);
				util.drain(m.name);
				module.clear = m.name;
				return theory[m.name];
			}
		});
		_this.drain = (function(p,o,m){
			var b = true, l = true, d, cb;
			d = a(root.queue,p);
			if(d&&a.list.is(d)){
				d = d.slice().reverse();
			}else{
				d = [];
			}
			a.obj(root.queue).each(function(v,i){
				a.list(v).each(function(w,j){
					if(p === w.name){
						return l = false;
					}
				});
			});
			if(l){
				root.launch[p] = true;
			}
			a.list(d).each(function(v,i){
				b = true;
				if(l && v.theory) v.theory[p] = theory[p];
				a.list(v.dependencies).each(function(w,j){
					if(!root.launch[(j=util.stripify(a.list.is(v.dependencies)?w:j))]){
						return b = false;
					}
					v.theory[j] = theory[j];
				});
				if(b && !root.launch[v.name]){
					cb = util.launch(v,i);
					theory[v.name] = cb(v.theory);
					_this.drain(v.name);
				}
			});
		});
		return _this;
	})();
	root.init = (function(){
		root.pollute();
	})();
})();