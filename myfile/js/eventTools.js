
//1、浏览器默认行为的阻止

function eventPreventDefault1706(evt){
	if(evt.preventDefault){
		evt.preventDefault();
	}else{//IE浏览器
		evt.returnValue = false;
	}
}


//给某个DOM元素绑定一个事件

//domObj：dom元素
//eventType:事件类型，不带on
//func:事件处理函数
//isBubble：是否冒泡，冒泡还是捕获

function addEvent1706(domObj,eventType,func,isBubble){
	if(domObj.addEventListener){
		domObj.addEventListener(eventType,func,isBubble);
	}else if(domObj.attachEvent){
		domObj.attachEvent("on"+eventType,func);
	}else{
		//当某个对象的属性是以表达式或者变量的方式表现时，用方括号，而不是点。
		domObj["on"+eventType] = func;
	}
}
//当某个对象的属性是以表达式或者变量的方式表现时，用方括号，而不是点。
/*
domObj.onclick
domObj[eventType]
*/

