
//添加cookie
//键，
//值，
//保质期（以天为单位）

function addCookie(key,value,dayCount){
	var d = new Date();
	d.setDate(d.getDate()+dayCount);
	//document.cookie = key+"="+value+";expires="+d.toGMTString();
	document.cookie = key+"="+escape(value)+";expires="+d.toGMTString();
}

//获取cookie
//键
//返回值：键对应的值。
function getCookie(key){
	//1、分割成数组
	var arr = unescape(document.cookie).split("; ");
	//2、查找
	for(var i=0;i<arr.length;i++){
		if(arr[i].indexOf(key+"=")==0){
			return arr[i].substring((key+"=").length);
		}
	}
	return null;
}

//删除cookie
//参数：
//键
function removeCookie(key){
	addCookie(key,"hi",-1);
}