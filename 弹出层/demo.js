require(['jquery','dialog'],function($,dialog){
	$('#btn').on('click',function(){
		dialog.open({
			title:'我的对话框',
			width: 500,
		});
	});
});