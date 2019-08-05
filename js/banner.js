var myTimer = null;
var ord = 0;
var arr=["https://www.uc123.com/",
"https://ai.taobao.com/?pid=mm_50814843_6614255_22476314",
"https://baike.baidu.com/item/%E6%9C%B4%E7%82%AF%E6%A4%8D/8021888?fr=aladdin",
"https://baike.baidu.com/item/%E9%B9%BF%E6%99%97/5083717?fr=aladdin",
"https://baike.baidu.com/item/%E6%9C%88%E5%9F%8E%E9%9B%AA%E5%85%94/1554945"];

//自动播放
function autoPlay(){
	if(myTimer!=null){
		return;//
	}

	myTimer = setInterval(function(){
		//一、改变数据
		//1、计算数据
		var preOrd = ord;
		ord++;
		//2、边界
		if(ord>4){
			ord = 0;
		}
		//二、改变外观
		//1)、改图片
		let imgDoms = $("#bannerbox").children;
		imgDoms[preOrd].style.zIndex = 1;
		imgDoms[ord].style.zIndex = 2;
		fadeInOut(imgDoms[preOrd],imgDoms[ord],2000);
		//2)、改豆豆的颜色
		let liDoms = $("#doudouBox").children;
		for(var i=0;i<liDoms.length;i++){
			liDoms[i].style.backgroundColor = "#45181f";
		}
		liDoms[ord].style.backgroundColor = "#ff6600";
		
	},2000)
}

//停止播放
function stopPlay(){
	window.clearInterval(myTimer);
	myTimer = null;
}

//跳转到对应的图片上
//参数：图片的下标
// goImg(3);
function goImg(transOrd){
	//一、改变数据
	//1、计算数据（改变图片的下标）
	var preOrd = ord;//上一张的序号 
	ord = transOrd;//5

	//2、边界
	if(ord>4){
		ord = 0;
	}else if(ord<0){
		ord = 4;
	}

	//二、改变外观
	//1)、改图片
	let imgDoms = $("#bannerbox").children;
	imgDoms[preOrd].style.zIndex = 1;
	imgDoms[ord].style.zIndex = 2;
	//2)、改豆豆的颜色
	let liDoms = $("#doudouBox").children;
	liDoms[preOrd].style.backgroundColor="#45181f";
	liDoms[ord].style.backgroundColor="#ff6600";
	
}

function preImg(){
	goImg(ord-1);
}

function nextImg(){
	goImg(ord+1);
}

 function fadeInOut(domObjIn,domObjOut,timeLong){
 		var currOpacity = 0;
 		var step = 1/(timeLong/10);
 		var myTimer = setInterval(function(){
			//一、改变数据
 			//1、修改数据
 			currOpacity+=step;//
			//2、边界处理
 			if(currOpacity>=1){
 				currOpacity=1;
 				window.clearInterval(myTimer);
 			}
			//二、改变外观
 			domObjIn.style.opacity = currOpacity;
 			domObjOut.style.opacity = 1- currOpacity;
 		},10);
 	}

window.onload = function(){
	//1、自动变换图片
	autoPlay();

	//2、鼠标放在轮播图上会停止
	$("#bannerbox").onmouseover = stopPlay;

	//3、鼠标离开轮播图会继续播放
	$("#bannerbox").onmouseout = autoPlay;

	//4、点击豆豆，跳转到对应的图片
	let liDoms = $("#doudouBox").children;
	for(var i=0;i<liDoms.length;i++){
		liDoms[i].onmousemove = function(event){
			let evt = event||window.event;
			goImg(parseInt(this.getAttribute("index")));
			evt.stopPropagation();
		};
	}

	//5、左右按钮
	let leftBtn = $("#arrowBox").firstElementChild;
	leftBtn.onclick = function(event){
		let evt = event||window.event;
		preImg();
		evt.stopPropagation();
	}
	let rightBtn = $("#arrowBox").lastElementChild;
	rightBtn.onclick = function(event){
		let evt = event||window.event;
		nextImg();
		evt.stopPropagation();
	}
	//6.添加超链接
	$("#bannerbox").onclick = function(){
		location.href = arr[ord];
	}
}

function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}	