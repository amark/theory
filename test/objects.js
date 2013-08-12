module.exports=require('theory')
('hash',function(a){
	describe('Objects',function(){
		it('deps',function(){
			expect(a.object_is).to.be(undefined);
			expect(root.ObjectUtils).to.be.ok();
			expect(a.object_util).to.be(undefined);
			expect(a.get.has.status).to.be('done');
			expect(theory.object_union).to.eql({u:1});
			expect(root.CopyObject).to.be.ok();
		});
	});
	return {all:'your',tests:'belong',to:'us'};
},{
	'./object_is':''
	,'./object_util':'util'
	,'./object_get':'get'
});