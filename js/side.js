$(function() {	
	// 我的收藏
	$("#lovecollect").mouseover(function(){
		$(".collect").animate({left: '-150px'}, 150);
	$(".collect").css('display','block');
	$(".collect").animate({left: '-120px'}, "slow");
	});
	$("#lovecollect").mouseout(function(){
		$(".collect").css('display','none');
		$(".collect").animate({right: '-120px'}, "slow");
		
		});
	// 历史记录
	$("#side_look").mouseover(function(){
		$(".look").animate({left: '-150px'}, 150);
	$(".look").css('display','block');
	$(".look").animate({left: '-120px'}, "slow");
	});
	$("#side_look").mouseout(function(){
		$(".look").css('display','none');
		$(".look").animate({right: '-120px'}, "slow");
		});	
	// 电话联系
	$("#side_phone").mouseover(function(){
		$(".phone").animate({left: '-150px'}, 150);
	$(".phone").css('display','block');
	$(".phone").animate({left: '-120px'}, "slow");
	});
	$("#side_phone").mouseout(function(){
		$(".phone").css('display','none');
		$(".phone").animate({right: '-120px'}, "slow");
		});	
	// 耳机连线
	$("#side_headset").mouseover(function(){
		$(".headset").animate({left: '-150px'}, 150);
	$(".headset").css('display','block');
	$(".headset").animate({left: '-120px'}, "slow");
	});
	$("#side_headset").mouseout(function(){
		$(".headset").css('display','none');
		$(".headset").animate({right: '-120px'}, "slow");
		});	
	// 便签
	$("#side_note").mouseover(function(){
		$(".note").animate({left: '-150px'}, 150);
	$(".note").css('display','block');
	$(".note").animate({left: '-120px'}, "slow");
	});
	$("#side_note").mouseout(function(){
		$(".note").css('display','none');
		$(".note").animate({right: '-120px'}, "slow");
		});			
	// 点击返回顶部
     $("#gohome").click(function() {
         $("html,body").animate({
             scrollTop: 0
         }, 1000);
     });
 });