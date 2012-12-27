Theory
======

Theory is an abstraction layer for server side and client side JavaScript.

For some documentation, see the Coalesce framework for now, until I have time to
write awesome docs here.

Type Checking
=============

Numbers
=======

-   **ify** `a.num.ify(what, opt)`

    -   what is the number, text, whatever that needs to be converted into a
        number.

    -   opt is options parameter.

        -   `[]` indicates you want a list of numbers returned.

    -   Examples

        -   `a.num.ify("A37")` → `37`

        -   `a.num("It is -22.7 degrees").ify()` → `-22.7`

        -   `a.num("My values are 33, -2.2, and 6.").ify([])` → `[33, -2.2, 6]`

-   **random** `a.num.random(length)`, `a.num.r(length)`

    -   length is how many digits long you want your random number.

    -   *Note:* Maximum is 14, defaults to 6.

    -   Examples

        -   `a.num.random()` → `583587`

        -   `a.num.r()` → `811452`

        -   `a.num(11).r()` → `72573435444`

        -   `a.num(2).random()` → `91`

Text
====

-   **ify** `a.text.ify(what)`

    -   what is the number, text, list, object, whatever you want to turn into
        text.

    -   *Note:* Essentially just a wrapper for `JSON.stringify()` for now.

    -   Examples

        -   `a.text.ify({a:0,b:'1',c:[0,'1'],d:{e:'f'}})` →
            `"{a:0,b:'1',c:[0,'1'],d:{e:'f'}}"`

-   **random** `a.text.random(length)`, `a.text.r(length)`

    -   length is how many characters long you want your random text. Defaults
        to 16.

    -   Examples

        -   `a.text.random()` → `"uTkphuTCmzQ7Pl3e"`

        -   `a.text.r(4)` → `"XneV"`

        -   `a.text(11).r()` → `"gbDVM9TyFRl"`

-   **clip** `a.text(what).clip(split, start, end)`

    -   what is the text to clip.

    -   split is the text or regex to split and rejoin upon.

    -   start is the start of the slice index.

    -   end is the end of the slice index.

    -   Examples

        -   `a.text('A B C D').clip(' ',0,-1)` → `"A B C"`

        -   `a.text.clip("path/to/awesome.js",'.',-1)` → `"js"`

-   **caps** `a.text.caps(what)`

    -   what is the text you want to capitalize.

    -   Examples

        -   `a.text.caps("shout!")` → `"SHOUT!"`

-   **low** `a.text.low(what)`

    -   what is the text you want to make lower case.

    -   Examples

        -   `a.text.low("HUSH 1")` → `"hush 1"`

-   **find** a collection of Regular Expressions.

    -   *Note:* No guarantee of these working or being available in future
        versions.

Lists
=====

-   **ify** `a.list.ify(what, opt)`

    -   what is the text or object that you want to convert into a list.

    -   opt is the options parameter.

        -   split: what to divide upon for text, whitespace auto handled. `','`
            is default.

        -   wedge: what token to use as the divider between an object’s key and
            value. `':'` default.

    -   Examples

        -   `a.list.ify("Bob, Joe,Isaac , Fred")` →
            `["Bob","Joe","Isaac","Fred"]`

        -   `a.list({a:1,b:'c',d:[1,2,3]}).ify()` → `['a:1','b:c','d:0,1,2']`

        -   `a.list({session:'AK41795'}).ify({wedge:'='})` →
            `['session=AK41795']`

        -   `a.list.ify("1,2,3 ; 4,5,6",{split:';'})` → `["1,2,3", "4,5,6"]`

-   **at** `a.list.at(what, index)`

    -   what is the list you want to access.

    -   index is the where in the list you want to retrieve the value.

    -   Examples

        -   `a.list.at([5,6,7,8,9],-2)` → `8`

        -   `a.list([5,6,7,8,9]).at(2)` → `6`

-   **ebb** `a.list.ebb(what, index)`

    -   what is the list you want to access, similar to `at`, above.

    -   index is where, but if you over reach, it will cascade till it finds the
        closest item.

    -   Examples

        -   `a.list.ebb([2,3,4],9)` → `4`

        -   `a.list([0,1,2]).ebb(-9)` → `0`

        -   `a.list.ebb([5,6,7],-2)` → `6`

-   **fuse** `a.list.fuse(what, ...)`

    -   what is the list that other lists will fuse into.

    -   … any number of extra list parameters.

    -   Examples

        -   `a.list.fuse([2,3],[4,5],[6,7])` → `[2,3,4,5,6,7]`

        -   `a.list([2,3]).fuse([4,5],[6,7])` → `[2,3,4,5,6,7]`

-   **less** `a.list.less(what, ...)`

    -   what is the list you want to subtract items from.

    -   … the items you want to remove from the list,

    -   Examples

        -   `a.list.less([0,1,false,'a',false],false)` → `[0,1,'a']`

        -   `a.list([2,2,7,['a'],1,9,0,31]).less(0,['a'],2)` → `[7, 1, 9, 31]`

    -   *Note:* An option to pass a list of items to be removed exists by
        indicating you only want `2` parameters, such that
        `a.list(2).less([0,1,2,2,3,4],[0,2])` → `[1,3,4]`.

-   **find** `a.list.find(list, what)`

    -   list is the list you want to search.

    -   what is the item you are looking for.

    -   Examples

        -   `a.list([4,5]).find(9)` → `0`

        -   `a.list([4,5]).find(5)` → `2`

        -   `a.list.find([4,5],4)` → `1`

-   **each** `a.list.each(list, function, this)`

    -   list is the list you want to iterate through each of its items.

    -   function is your callback which gets executed sequentially, on each
        item.

        -   the first parameter is the current item’s value.

        -   the second parameter is the current index of that value in the list.

        -   the third parameter is a map function, which when called pushes its
            argument into a list that is returned by default by `each`.

        -   `return;` or `return undefined;` immediately proceeds to the next
            item.

        -   return anything else and the loop breaks, then `each` returns the
            value you returned instead.

    -   this is an optional argument that will become the `this` inside the
        function.

    -   Examples

        -   `a.list([1,2,3]).each(function(val, i, map){ map(val + i) })` → `[2,
            4, 6]`

        -   `a.list([1,2,3]).each(function(){ return "Hello World!"; })` →
            `"Hello World!"`

        -   `a.list([1,2,3]).each(function(val, i, map){ if(val == 2){ return }
            map(val); })` → `[1,3]`

        -   `a.list([1,2,3]).each(function(val, i, map){ map(val); if(val == 2){
            return val } })` → `2`

        -   `a.list([{name:'joe',age:27},{name:'bob',age:42}]).each(function(val,
            i, map){ map(val.name) })` → `['joe','bob']`

        -   `a.list(['a','b','c']).each(function(){ return this })` → `//
            current context`

        -   `a.list(['a','b','c']).each(function(){ return this }, {z:1})` →
            `{z:1}`

Notes
-----

Theory uses lists and index notation, not arrays and offset notation. Offset
notation is the common practice of describing the position of an element in an
array by its corresponding location in the physically allocated space of
contiguous memory, which logically starts at a zeroth initial. This is otherwise
shortened to “*0 based index arrays*”, despite the misnomer of it actually being
an offset. The author of this library has chosen index notation instead because
it offers the following advantages:

1.  Naturally, the first element in a list cardinally corresponds to `1`.
    Contrarily, even official documentation of JavaScript has explicit
    disclaimers that the “*first element of an array is actually at index 0*” -
    this is easily forgotten, especially by novices, and can lead to errors.

2.  Mathematically, a closed interval is properly represented in code as `for(i
    = 1; i <= items.length; i++)`, because it includes its endpoints. Offset
    notation instead is technically a left-closed right-open interval set,
    represented in code as `for(i = 0; i < items.length; i++)`. This matters
    because code deals with integer intervals, because all elements have a fixed
    size - you can not access a fractional part of an element. Integer intervals
    are closed intervals, thus conclusively proving this importance.

3.  Mathematically, matrix notation also starts with 1.

4.  The last element in a list cardinally corresponds to the length of the list,
    thus allowing easy access with `items.length` rather than having frustrating
    `(items.length - 1)` arithmetic everywhere in your code.

5.  Negative indices are symmetric with positive indices. Such that `-1` and `1`
    respectively refer to the last and first element, and in the case where
    there is only one item in the list, it matches the same element. This
    convenience allows for simple left and right access that offset notation
    does not provide.

6.  Non existence of an element can be represented by `0`, which would
    conveniently code elegantly as `if( !items.indexOf('z') ) return;`. Rather,
    one must decide upon whether `if( items.indexOf('z') == -1 ) return;` is
    philosophically more meaningful than `if( items.indexOf('z') < 0 ) return;`
    with offset notation despite ignoring the asymmetry of the equation.

[[ .. to be continued ]]
