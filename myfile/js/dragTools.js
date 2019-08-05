
//拖拽对象

function drag(domObj,titleObj){	
	var isDown = false;	
	var offsetX ;
	var offsetY ;
	
	titleObj.onmousedown = function(event){
		var evt  = event || window.event;
		offsetX = evt.offsetX;
		offsetY = evt.offsetY;
		isDown = true;
		document.body.onmousemove = function(event){
			var evt  = event || window.event;
			//if(按下鼠标){
			if(isDown){
				//跟着走
				domObj.style.cssText = "left:"+(evt.pageX-offsetX)+"px;top:"+(evt.pageY-offsetY)+"px;";
			}
		}
		
		document.body.onmouseup = function(){
			isDown = false;
		}
	}
}

//拖拽并记录轨迹
function dragAndGuiJi(domObj,titleObj,arr,func){	
	var isDown = false;	
	var offsetX ;
	var offsetY ;
	
	titleObj.onmousedown = function(event){
		var evt  = event || window.event;
		offsetX = evt.offsetX;
		offsetY = evt.offsetY;
		isDown = true;
		document.body.onmousemove = function(event){
			var evt  = event || window.event;
			//if(按下鼠标){
			if(isDown){
				var x = evt.pageX-offsetX;
				var y = evt.pageY-offsetY;
				//跟着走
				arr.push({
							x:x,
							y:y
						});
				domObj.style.cssText = "left:"+x+"px;top:"+y+"px;";
			}
		}
		
		document.body.onmouseup = function(){
			isDown = false;
			func(arr);
		}
	}
}
