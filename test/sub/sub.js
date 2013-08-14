module.exports=require('theory')
('sub',function(a){
	describe('Sub',function(){
		it('deps',function(){
			expect(root.Add(root.Two, a.one)).to.be(3);
		});
	});	
	return a.one;
},{
	'./add':[
		'./one','./two'
	]
});