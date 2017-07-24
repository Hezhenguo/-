define(['jquery'],function($){
	var $container = $('<div class="dialog-container"></div>'),
		$mask = $('<div class="dialog-mask"></div>'),
		$box = $('<div class="dialog-box"></div>'),
		$titleBox = $('<div class="dialog-title-box"></div>'),
		$title = $('<span class="dialog-title"></span>'),
		$closeBtn = $('<span class="dialog-close-btn">[x]</span>'),
		$content = $('<div class="dialog-content"></div>')

	return{
		open:function(options){
			var _this = this;
			var settings={
				width:400,
				height:300
			};
		settings =	$.extend(settings,options);
			// var html='<div class="dialog-container">'+
			// 		'<div class="dialog-mask"></div>'+
			// 		'<div class="dialog-box">'+
			// 		'<div class="dialog-title-box">'+
			// 		'<span class="dialog-title">'+settings.title+'</span>'+
			// 		'<span class="dialog-close-btn">[x]</span>'+
			// 		'</div>'+
		
			// 		'</div>'+
			// 	'</div>';
		

				$container.append($mask);
				$box.css({
					width:settings.width,
					height:settings.height,
					marginLeft:-settings.width/2,
					marginTop:-settings.height/2

				});
				$container.append($box);
				$title.html(settings.title).appendTo($titleBox);
				$titleBox.appendTo($box);
				$closeBtn.on('click',function(){
					_this.close();
				}).appendTo($titleBox);
				$content.appendTo($box);
				$(document.body).append($container);

		},
		close:function(){
			$container.remove();
		}
	};
});