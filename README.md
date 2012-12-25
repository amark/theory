Theory
==========
Theory is an abstraction layer for server side and client side JavaScript.

For some documentation, see the Coalesce framework for now, until I have time to write awesome docs here.

# Type Checking

# Numbers
- **ify** `a.num.ify(what, opt)`
	- what is the number, text, whatever that needs to be converted into a number.
	- opt is options parameter.
		- `[]` indicates you want a list of numbers returned.
	- Examples
		- `a.num.ify("A37")` → `37`
		- `a.num("It is -22.7 degrees").ify()` → `-22.7`
		- `a.num("My values are 33, -2.2, and 6.").ify([])` → `[33, -2.2, 6]`
- **random** `a.num.random(length)`, `a.num.r(length)`
	- length is how many digits long you want your random number.
	- *Note:* Maximum is 14, defauts to 6.
	- Examples
		- `a.num.random()` → `583587`
		- `a.num.r()` → `811452`
		- `a.num(11).r()` → `72573435444`
		- `a.num(2).random()` → `91`

# Text
- **ify** `a.text.ify(what)`
	- what is the number, text, list, object, whatever you want to turn into text.
	- *Note:* Essentially just a wrapper for `JSON.stringify()` for now.
	- Examples
		- `a.text.ify({a:0,b:'1',c:[0,'1'],d:{e:'f'}})` → `"{a:0,b:'1',c:[0,'1'],d:{e:'f'}}"`
- **random** `a.text.random(length)`, `a.text.r(length)`
	- length is how many characters long you want your random text. Defaults to 16.
	- Examples
		- `a.text.random()` → `"uTkphuTCmzQ7Pl3e"`
		- `a.text.r(4)` → `"XneV"`
		- `a.text(11).r()` → `"gbDVM9TyFRl"`
- **clip** `a.text(what).clip(split, start, end)`
	- what is the text to clip.
	- split is the text or regex to split and rejoin upon.
	- start is the start of the slice index.
	- end is the end of the slice index.
	- Examples
		- `a.text('A B C D').clip(' ',0,-1)` → `"A B C"`
		- `a.text.clip("path/to/awesome.js",'.',-1)` → `"js"`
- **caps** `a.text.caps(what)`
	- what is the text you want to capitalize.
	- Examples
		- `a.text.caps("shout!")` → `"SHOUT!"`
- **low** `a.text.low(what)`
	- what is the text you want to make lower case.
	- Examples
		- `a.text.low("HUSH 1")` → `"hush 1"`
- **find** a collection of Regular Expressions.
	- *Note:* No guarantee of these working or being available in future versions.

# Lists
- **at** `a.list.at(what, index)`
	- what is the list you want to access.
	- index is the where in the list you want to retrieve the value.
	- Examples
		- `a.list.at([5,6,7,8,9],-2)` → `8`
		- `a.list([5,6,7,8,9]).at(2)` → `6`
- **ify** `a.list.ify(what, opt)`
	- what is the text or object that you want to convert into a list.
	- opt is the options parameter.
		- split: what to divide upon for text, whitespace auto handled. `','` is default.
		- wedge: what token to use as the divider between an object's key and value. `':'` default.
	- Examples
		- `a.list.ify("Bob, Joe,Isaac , Fred")` → `["Bob","Joe","Isaac","Fred"]`
		- `a.list({a:1,b:'c',d:[1,2,3]}).ify()` → `['a:1','b:c','d:0,1,2']`
		- `a.list({session:'AK41795'}).ify({wedge:'='})` → `['session=AK41795']`
		- `a.list.ify("1,2,3 ; 4,5,6",{split:';'})` → `["1,2,3", "4,5,6"]`

[[ .. to be continued ]]